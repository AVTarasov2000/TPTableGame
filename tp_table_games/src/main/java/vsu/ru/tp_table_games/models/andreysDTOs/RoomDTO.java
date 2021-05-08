package vsu.ru.tp_table_games.models.andreysDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomDTO {
    Integer id;
    String name;
    String password;
    String ref;
}
