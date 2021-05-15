package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;

import java.util.List;

public interface GamesInProgressService {
    List<SessionDto> activeRooms();
    List<SessionDto> activeRoomsById(Long id);
    List<SessionDto> getSessionHistoryByLogin(String login);
    List<UserDto> addUserById(String login, Long id);
}
