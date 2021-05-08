package vsu.ru.tp_table_games.models.andreysDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameDTO {
    private Integer id;
    private String name;
    private String rules;
    private String information;
}
