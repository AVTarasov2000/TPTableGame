package vsu.ru.tp_table_games.services.impl;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.models.enums.PrivacyStatus;
import vsu.ru.tp_table_games.models.enums.SessionStatus;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.Arrays;
import java.util.List;
@Service
public class GamesInProgressServiceImpl implements GamesInProgressService {
    @Override
    public List <SessionDto> activeRooms(GameDto gameDto) {
        return Arrays.asList(new SessionDto(1L, 1L, "room1", "room1", "/room", PrivacyStatus.PUBLIC, SessionStatus.COMPLETED),
                new SessionDto(2L, 1L, "room2", "room2", "/room", PrivacyStatus.PUBLIC, SessionStatus.PREPARING),
                new SessionDto(3L, 1L, "room3", "room3", "/room", PrivacyStatus.PUBLIC, SessionStatus.STARTED),
                new SessionDto(4L, 1L, "room4", "room4", "/room", PrivacyStatus.PUBLIC, SessionStatus.COMPLETED));
    }
}
