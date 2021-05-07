package vsu.ru.tp_table_games.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.enums.UserStatus;

import javax.persistence.*;


@Data
@Entity
@Table(name = "users", schema = "public")
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "login")
    private String login;
    @Column(name = "name")
    private String name;
    @Column(name = "password")
    private String password;
    @Column(name = "is_registered")
    private UserStatus isRegistered;
}
