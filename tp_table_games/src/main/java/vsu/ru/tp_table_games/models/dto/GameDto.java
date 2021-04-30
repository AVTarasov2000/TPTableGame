package vsu.ru.tp_table_games.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameDto {
    private long id;
    private long capacity;
    private String rules;
}
