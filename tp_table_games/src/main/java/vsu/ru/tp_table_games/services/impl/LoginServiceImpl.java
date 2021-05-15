package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.User;
import vsu.ru.tp_table_games.models.mappers.UserMapper;
import vsu.ru.tp_table_games.models.repositoty.UserRepository;
import vsu.ru.tp_table_games.services.LoginService;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto provide(LoginUserDto userDto) {
//        TODO PASSWORD Authentication
        User registeredUser = userRepository.findByLogin(userDto.getLogin()).orElse(null);
        if(registeredUser.getPassword().equals(userDto.getPassword())){
            UserDto registeredUserDto = UserMapper.INSTANCE.userToDto(registeredUser);
            return registeredUserDto;
        }
        return null;
    }
}
