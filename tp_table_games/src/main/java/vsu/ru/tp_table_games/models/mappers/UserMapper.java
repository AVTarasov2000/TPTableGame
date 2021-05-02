package vsu.ru.tp_table_games.models.mappers;

import vsu.ru.tp_table_games.models.dto.UserDto;
import vsu.ru.tp_table_games.models.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto gameToDto(User user);
    List<UserDto> itemToDto(Iterable<User> users);

    User dtoToItems(UserDto dto);
    List<User> dtoToItems(Iterable<UserDto> dtoIterable);
}
