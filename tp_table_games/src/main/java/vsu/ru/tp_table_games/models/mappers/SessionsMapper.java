package vsu.ru.tp_table_games.models.mappers;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.models.entities.Session;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;


import java.util.List;

@Mapper(componentModel = "spring")
public interface SessionsMapper {
    SessionsMapper INSTANCE = Mappers.getMapper(SessionsMapper.class);

    SessionDto sessionToDto(Session session);
    List<SessionDto> sessionToDto(Iterable<Session> sessions);

    Session dtoToSession(SessionDto dto);
    List<Session> dtoToSession(Iterable<SessionDto> dtoIterable);
}
