package vsu.ru.tp_table_games.models.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LoginUserMapper {
    LoginUserMapper INSTANCE = Mappers.getMapper(LoginUserMapper.class);

    LoginUserDto userToDto(User user);
    List<LoginUserDto> userToDto(Iterable<User> users);

    User dtoToUser(LoginUserDto dto);
    List<User> dtoToUser(Iterable<LoginUserDto> dtoIterable);
}
