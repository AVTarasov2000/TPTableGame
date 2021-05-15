package vsu.ru.tp_table_games.services;
import vsu.ru.tp_table_games.models.dtos.GameDto;

import java.util.List;

public interface MainPageService {
    List<GameDto> getAllGames();
}
