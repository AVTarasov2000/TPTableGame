package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.mappers.GameMapper;
import vsu.ru.tp_table_games.models.repositoty.GameRepository;
import vsu.ru.tp_table_games.services.MainPageService;

import java.util.Arrays;
import java.util.List;

@Service
public class MainPageServiceImpl implements MainPageService {

    @Autowired
    private GameRepository gameRepository;

    @Override
    public List<GameDto> getAllGames() {
        return GameMapper.INSTANCE.gameToDto(gameRepository.findAll());
    }
}
