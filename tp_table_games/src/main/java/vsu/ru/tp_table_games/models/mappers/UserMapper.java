package vsu.ru.tp_table_games.models.mappers;

import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto userToDto(User user);
    List<UserDto> userToDto(Iterable<User> users);

    User dtoToUser(UserDto dto);
    List<User> dtoToUser(Iterable<UserDto> dtoIterable);
}
