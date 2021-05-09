package vsu.ru.tp_table_games.services;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.andreysDTOs.UserDto;

@Service
public class LoginServiceImpl implements LoginService {
    private int tmpId = 0;
    @Override
    public UserDto provide(UserDto userDto) {
        userDto.setLogin(String.valueOf(tmpId));
        tmpId+=1;
        return userDto; //todo
    }
}
