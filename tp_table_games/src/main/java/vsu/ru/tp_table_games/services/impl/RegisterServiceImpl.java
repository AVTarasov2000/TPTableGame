package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.User;
import vsu.ru.tp_table_games.models.mappers.LoginUserMapper;
import vsu.ru.tp_table_games.models.mappers.UserMapper;
import vsu.ru.tp_table_games.models.repositoty.UserRepository;
import vsu.ru.tp_table_games.services.RegisterService;

@Service
public class RegisterServiceImpl implements RegisterService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto provide(LoginUserDto userDto) {
        User registeredUser = userRepository.findByLogin(userDto.getLogin()).orElse(null);
        if(registeredUser==null){
            User newUser = LoginUserMapper.INSTANCE.dtoToUser(userDto);
            String script = newUser.getPassword();
            newUser.setPassword(script);
            userRepository.save(newUser);
            return UserMapper.INSTANCE.userToDto(newUser);
        }
       return null;
    }
}
