package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameDto {
    private Long id;
    private Long capacity;
    private String title;
    private String rules;
    private String information;
    private String images;
}
