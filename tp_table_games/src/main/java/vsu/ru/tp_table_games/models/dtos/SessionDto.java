package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.enums.PrivacyStatus;
import vsu.ru.tp_table_games.models.enums.SessionStatus;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SessionDto {
    private Long id;
    private Long ownerId;
    private String title;
    private String password;
    private PrivacyStatus privacy;
    private SessionStatus sessionStatus;
}
