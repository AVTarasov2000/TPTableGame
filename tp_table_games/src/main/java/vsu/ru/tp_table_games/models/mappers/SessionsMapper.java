package vsu.ru.tp_table_games.models.mappers;
import vsu.ru.tp_table_games.models.dto.SessionDto;
import vsu.ru.tp_table_games.models.entities.Session;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;


import java.util.List;

@Mapper(componentModel = "spring")
public interface SessionsMapper {
    SessionsMapper INSTANCE = Mappers.getMapper(SessionsMapper.class);

    SessionDto gameToDto(Session session);
    List<SessionDto> itemToDto(Iterable<Session> sessions);

    Session dtoToItems(SessionDto dto);
    List<Session> dtoToItems(Iterable<SessionDto> dtoIterable);
}
