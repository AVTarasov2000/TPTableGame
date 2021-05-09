package vsu.ru.tp_table_games.controllers;


import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.Set;
import java.util.TreeSet;

@Controller
public class AudioChatProvider {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;


    private Set <String > users = new TreeSet <>();

    @MessageMapping("/videoChat/{id}/newUser")
    public void newUser(@Payload JSONObject chatMessage, @DestinationVariable String id) {
        System.out.println((String) chatMessage.get("user"));
        users.add((String) chatMessage.get("user"));
        for (String i:
                users) {
            if(i.compareTo((String) chatMessage.get("user")) != 0) {
                messagingTemplate.convertAndSend("/user/" + i + "/socket/userArrived", chatMessage);
            }
        }
    }

    @MessageMapping("/videoChat/{id}/sendSignal")
    public void sendSignal(@Payload JSONObject chatMessage, @DestinationVariable String id) {
        System.out.println(chatMessage);
//        users.add((String) chatMessage.get("user"));
        for (String i:
                users) {
            if(i.compareTo((String) chatMessage.get("user")) != 0) {
                messagingTemplate.convertAndSend("/user/" + i + "/socket/sendSignal", chatMessage);
            }
        }
    }
}
