package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.mappers.LoginUserMapper;
import vsu.ru.tp_table_games.models.repositoty.UserRepository;
import vsu.ru.tp_table_games.services.GeneratedUserService;
import java.util.Date;

@Service
public class GeneratedUserServiceImpl implements GeneratedUserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto generateUnregisteredUser(String login){
        Date date = new Date();
        String name = "User:" + login + String.valueOf(date.hashCode());
        LoginUserDto newUser = new LoginUserDto( name, name, name);
        userRepository.save(LoginUserMapper.INSTANCE.dtoToUser(newUser));
        return  LoginUserMapper.INSTANCE.loginToDto(newUser);
    }
}
