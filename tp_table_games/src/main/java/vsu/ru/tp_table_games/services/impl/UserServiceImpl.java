package vsu.ru.tp_table_games.services.impl;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.User;
import vsu.ru.tp_table_games.models.mappers.UserMapper;
import vsu.ru.tp_table_games.models.repositoty.UserRepository;
import vsu.ru.tp_table_games.services.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto getUser(String login) {
        return UserMapper.INSTANCE.userToDto(userRepository.findByLogin(login).orElse(null));
    }

    @Override
    public UserDto getUser(Long id) {
        return UserMapper.INSTANCE.userToDto(userRepository.findById(id).orElse(null));
    }

    @Override
    public void saveUser(UserDto dto) {
        userRepository.save(UserMapper.INSTANCE.dtoToUser(dto));
    }

    @Override
    public void updateUser(LoginUserDto dto) {
        User registeredUser = userRepository.findByLogin(dto.getLogin()).orElse(null);
        String script = passwordEncoder.encode(dto.getPassword());
        if (registeredUser!=null && registeredUser.getPassword().equals(script)){
            registeredUser.setName(dto.getName());
        }
    }

}