package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.models.enums.PrivacyStatus;
import vsu.ru.tp_table_games.models.enums.SessionStatus;
import vsu.ru.tp_table_games.models.mappers.SessionsMapper;
import vsu.ru.tp_table_games.models.repositoty.SessionRepository;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class GamesInProgressServiceImpl implements GamesInProgressService {
    @Autowired
    private SessionRepository sessionRepository;

    @Override
    public List<SessionDto> activeRooms() {
        return SessionsMapper.INSTANCE.sessionToDto(sessionRepository.findAllBySessionStatus(SessionStatus.STARTED));
    }

    @Override
    public List<SessionDto> activeRoomsById(Long id) {
        List<SessionDto>  result = new ArrayList<>();
        List<SessionDto>  sessionDtos = SessionsMapper.INSTANCE.sessionToDto(sessionRepository.findAllByGameId(id));
        sessionDtos.forEach(element -> {
            if (element != null && element.getSessionStatus() == SessionStatus.STARTED) {
                result.add(element);
            }
        });
        return result;
    }
}
