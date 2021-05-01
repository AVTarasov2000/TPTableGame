package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dto.GameDTO;
import vsu.ru.tp_table_games.models.dto.UserDto;

import java.util.List;

public interface MainPageService {
    List <GameDTO> getAllGames();
}
