package vsu.ru.tp_table_games.models.mappers;
import vsu.ru.tp_table_games.models.dto.GameDto;
import vsu.ru.tp_table_games.models.entities.Game;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GameMapper {
    GameMapper INSTANCE = Mappers.getMapper(GameMapper.class);

    GameDto gameToDto(Game game);
    List<GameDto> itemToDto(Iterable<Game> games);

    Game dtoToItems(GameDto dto);
    List<Game> dtoToItems(Iterable<GameDto> dtoIterable);
}
