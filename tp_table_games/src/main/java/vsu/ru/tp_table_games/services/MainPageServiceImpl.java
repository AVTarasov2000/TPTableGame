package vsu.ru.tp_table_games.services;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dto.GameDTO;
import vsu.ru.tp_table_games.models.dto.UserDto;

import java.util.Arrays;
import java.util.List;

@Service
public class MainPageServiceImpl implements MainPageService {
    @Override
    public List <GameDTO> getAllGames() {
        return Arrays.asList(new GameDTO(0, "test1", "the rules for test1", "information1"),
                new GameDTO(1, "test2", "the rules for test2", "information2"),
                new GameDTO(2, "test3", "the rules for test3", "information3"),
                new GameDTO(3, "test4", "the rules for test4", "information4"));
    }
}
