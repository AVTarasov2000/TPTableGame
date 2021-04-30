package vsu.ru.tp_table_games.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.*;

@Data
//@Entity
//@Table(name = "games", schema = "public")
@NoArgsConstructor
@AllArgsConstructor

public class Game {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
//    @Column(name = "capacity")
    private long capacity;
//    @Column(name = "rules")
    private String rules;
}
