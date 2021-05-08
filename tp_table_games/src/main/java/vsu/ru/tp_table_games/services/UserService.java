package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dtos.UserDto;

public interface UserService {
    UserDto getUser(String login);
    UserDto getUser(Long id);
    void saveUser(UserDto dto);
}
