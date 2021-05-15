package vsu.ru.tp_table_games.services;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.andreysDTOs.UserDto;

@Service
public class LoginServiceImpl implements LoginService {
    @Override
    public UserDto provide(UserDto userDto) {
        return userDto; //todo
    }
}
