package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dtos.UserDto;

import java.util.List;

public interface RoomService {
    List<UserDto> getUsersInRoom(Long roomId);
}
