package vsu.ru.tp_table_games.models.mappers;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.entities.Game;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GameMapper {
    GameMapper INSTANCE = Mappers.getMapper(GameMapper.class);

    GameDto gameToDto(Game game);
    List<GameDto> gameToDto(Iterable<Game> games);

    Game dtoToGame(GameDto dto);
    List<Game> dtoToGame(Iterable<GameDto> dtoIterable);
}
