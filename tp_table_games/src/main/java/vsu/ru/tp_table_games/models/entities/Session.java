package vsu.ru.tp_table_games.models.entities;

//import vsu.ru.tp_table_games.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "sessions", schema = "public")
@NoArgsConstructor
@AllArgsConstructor

public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "owner_id")
    private Long ownerId;
    @Column(name = "title")
    private String title;
    @Column(name = "password")
    private String password;
}
