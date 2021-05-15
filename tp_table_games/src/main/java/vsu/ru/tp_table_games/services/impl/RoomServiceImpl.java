package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.Session;
import vsu.ru.tp_table_games.models.mappers.SessionsMapper;
import vsu.ru.tp_table_games.models.repositoty.SessionRepository;
import vsu.ru.tp_table_games.services.RoomService;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {
    @Autowired
    private SessionRepository sessionRepository;

    @Override
    public List<UserDto> getUsersInRoom(Long roomId) {
        Session session = sessionRepository.findById(roomId).orElse(null);
        return  SessionsMapper.INSTANCE.sessionToDto(session).getParticipants();
    }
}
