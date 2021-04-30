package vsu.ru.tp_table_games.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.*;


@Data
//@Entity
//@Table(name = "users", schema = "public")
@NoArgsConstructor
@AllArgsConstructor

public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    @Column(name = "login")
    private String login;
//    @Column(name = "user_name")
    private String userName;
//    @Column(name = "password")
    private String password;
}
