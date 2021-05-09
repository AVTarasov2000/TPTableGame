package vsu.ru.tp_table_games.services.impl;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.User;
import vsu.ru.tp_table_games.models.mappers.UserMapper;
import vsu.ru.tp_table_games.models.repositoty.UserRepository;
import vsu.ru.tp_table_games.services.UserService;

import java.util.Optional;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

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

}