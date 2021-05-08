package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;


public interface LoginService {
    UserDto provide(LoginUserDto userDto);
}
