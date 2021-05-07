package vsu.ru.tp_table_games.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "games", schema = "public")
@NoArgsConstructor
@AllArgsConstructor

public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "capacity")
    private Long capacity;
    @Column(name = "rules")
    private String rules;
    @Column(name = "title")
    private String title;
    @Column(name = "information")
    private String information;
    @Column(name = "images")
    private String images;

}
