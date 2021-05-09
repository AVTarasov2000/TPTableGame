package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.GameStep;
import vsu.ru.tp_table_games.models.entities.ServerStepResponse;
import vsu.ru.tp_table_games.services.GameStepProcessable;
import vsu.ru.tp_table_games.services.RoomService;

import java.util.List;

public class WebSocketController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    @Autowired
    private GameStepProcessable stepSaver;
    @Autowired
    private RoomService roomService;

    @MessageMapping("/stepProcessor/room/{roomId}")
    public void processMessage(@Payload GameStep gameStep, @DestinationVariable Long roomId) {
        ServerStepResponse response = stepSaver.processStep(gameStep);

        List <UserDto> userIds = roomService.getUsersInRoom(roomId);

        for (UserDto user :
                userIds) {
            messagingTemplate.convertAndSend(
                    "/"+user.getId()+"/queue/step",
                    response);
        }
    }
}
