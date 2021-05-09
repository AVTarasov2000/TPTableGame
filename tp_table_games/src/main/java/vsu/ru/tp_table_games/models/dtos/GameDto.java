package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.entities.Session;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameDto {
    private Long capacity;
    private String title;
    private String rules;
    private String information;
    private String images;

    private List<SessionDto> sessions;
}
