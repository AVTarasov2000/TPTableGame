package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.SessionDto;

import java.util.List;

public interface GamesInProgressService {
    List<SessionDto> activeRooms();
    List<SessionDto> activeRoomsById(Long id);
}
