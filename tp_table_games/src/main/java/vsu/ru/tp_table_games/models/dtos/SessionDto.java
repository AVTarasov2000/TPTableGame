package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.entities.Game;
import vsu.ru.tp_table_games.models.enums.PrivacyStatus;
import vsu.ru.tp_table_games.models.enums.SessionStatus;

import javax.persistence.Column;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SessionDto {
    private Long id;
    private String title;
    private String ref;
    private String password;
    private PrivacyStatus privacy;
    private SessionStatus sessionStatus;

    private UserDto ownerDto;
    private List<UserDto> participants;
    private GameDto game;
}
