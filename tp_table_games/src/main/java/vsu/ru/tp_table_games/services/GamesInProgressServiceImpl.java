package vsu.ru.tp_table_games.services;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.andreysDTOs.GameDTO;
import vsu.ru.tp_table_games.models.andreysDTOs.RoomDTO;

import java.util.Arrays;
import java.util.List;
@Service
public class GamesInProgressServiceImpl implements GamesInProgressService {
    @Override
    public List <RoomDTO> activeRooms(GameDTO gameDTO) {
        return Arrays.asList(new RoomDTO(1,"room1", "room1", "/room"),
                new RoomDTO(2,"room2", "room2", "/room"),
                new RoomDTO(3,"room3", "room3", "/room"),
                new RoomDTO(4,"room4", "room4", "/room"));
    }
}
