package vsu.ru.tp_table_games.controllers;


import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.List;
import java.util.Set;
import java.util.TreeSet;

@Controller
public class AudioChatProvider {
    @Autowired
    private GamesInProgressService gamesInProgressService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;


    private Set <String > users = new TreeSet <>();

    @MessageMapping("/videoChat/{id}/newUser")
    public void newUser(@Payload JSONObject chatMessage, @DestinationVariable Long id) {
        List<UserDto> usersInRoom = gamesInProgressService.addUserById(chatMessage.get("user").toString(), id);
        for (UserDto userDto:
                usersInRoom) {
                messagingTemplate.convertAndSend("/user/" + userDto.getLogin() + "/socket/userArrived", usersInRoom);
        }
        //TODO update waitingRoom.html
    }

    @MessageMapping("/videoChat/{id}/sendSignal")
    public void sendSignal(@Payload JSONObject chatMessage, @DestinationVariable String id) {
        System.out.println(chatMessage);
//        users.add((String) chatMessage.get("user"));
        messagingTemplate.convertAndSend("/user/" + (String) chatMessage.get("target") + "/socket/sendSignal", chatMessage);

//        for (String i:
//                users) {
//            if(i.compareTo((String) chatMessage.get("user")) != 0) {
//                messagingTemplate.convertAndSend("/user/" + i + "/socket/sendSignal", chatMessage);
//            }
//        }
    }
}
