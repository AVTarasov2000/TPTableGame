package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomDto {
    Integer id;
    String name;
    String password;
    String ref;
}
