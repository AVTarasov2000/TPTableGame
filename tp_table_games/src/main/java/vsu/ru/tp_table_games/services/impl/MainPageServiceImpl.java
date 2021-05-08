package vsu.ru.tp_table_games.services.impl;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.services.MainPageService;

import java.util.Arrays;
import java.util.List;

@Service
public class MainPageServiceImpl implements MainPageService {
    @Override
    public List<GameDto> getAllGames() {
        return Arrays.asList(new GameDto(0L, 6L, "test1", "the rules for test1", "information1", " "),
                new GameDto(1L, 6L, "test2", "the rules for test2", "information2", " "),
                new GameDto(2L, 6L,"test3", "the rules for test3", "information3", ""),
                new GameDto(3L, 6L, "test4", "the rules for test4", "information4", ""));
    }
}
