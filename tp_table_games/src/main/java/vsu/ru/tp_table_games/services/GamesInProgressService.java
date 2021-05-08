package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.RoomDto;

import java.util.List;

public interface GamesInProgressService {
    List<RoomDto> activeRooms(GameDto gameDto);
}
