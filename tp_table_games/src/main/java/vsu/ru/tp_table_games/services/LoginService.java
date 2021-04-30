package vsu.ru.tp_table_games.services;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dto.UserDto;


public interface LoginService {
    UserDto provide(UserDto userDto);
}
