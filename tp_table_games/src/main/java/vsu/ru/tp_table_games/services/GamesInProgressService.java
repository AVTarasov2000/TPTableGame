package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.andreysDTOs.GameDTO;
import vsu.ru.tp_table_games.models.andreysDTOs.RoomDTO;

import java.util.List;

public interface GamesInProgressService {
    List<RoomDTO> activeRooms(GameDTO gameDTO);
}
