package vsu.ru.tp_table_games.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.enums.UserStatus;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginUserDto {
    private String login;
    private String password;
    private String name;
}
