package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.enums.UserStatus;

import javax.persistence.Column;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String login;
    private UserStatus isRegistered;
}
