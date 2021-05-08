package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.enums.UserStatus;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String name;
    private String login;
    private String password;
    private UserStatus isRegistered;
}
