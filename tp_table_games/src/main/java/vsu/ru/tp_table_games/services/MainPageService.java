package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.andreysDTOs.GameDTO;

import java.util.List;

public interface MainPageService {
    List <GameDTO> getAllGames();
}
