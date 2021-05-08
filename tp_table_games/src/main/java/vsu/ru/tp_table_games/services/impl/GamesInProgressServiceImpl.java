package vsu.ru.tp_table_games.services.impl;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.RoomDto;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.Arrays;
import java.util.List;
@Service
public class GamesInProgressServiceImpl implements GamesInProgressService {
    @Override
    public List <RoomDto> activeRooms(GameDto gameDto) {
        return Arrays.asList(new RoomDto(1,"room1", "room1", "/room"),
                new RoomDto(2,"room2", "room2", "/room"),
                new RoomDto(3,"room3", "room3", "/room"),
                new RoomDto(4,"room4", "room4", "/room"));
    }
}
