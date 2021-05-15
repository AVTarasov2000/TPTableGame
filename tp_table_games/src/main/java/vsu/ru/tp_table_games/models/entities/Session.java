package vsu.ru.tp_table_games.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vsu.ru.tp_table_games.models.enums.PrivacyStatus;
import vsu.ru.tp_table_games.models.enums.SessionStatus;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "sessions", schema = "public")
@NoArgsConstructor
@AllArgsConstructor

public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "password")
    private String password;
    @Column(name = "privacy")
    private PrivacyStatus privacy;
    @Column(name = "session_status")
    private SessionStatus sessionStatus;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "users_id")
    private User owner;

    @ManyToMany(mappedBy = "attendedSessions", fetch = FetchType.LAZY)
    private List<User> participants;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "games_id")
    private Game game;

}
