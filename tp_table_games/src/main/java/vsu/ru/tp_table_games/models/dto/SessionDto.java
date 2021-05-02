package vsu.ru.tp_table_games.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SessionDto {
    private Long id;
    private Long ownerId;
    private String title;
    private String password;
}
