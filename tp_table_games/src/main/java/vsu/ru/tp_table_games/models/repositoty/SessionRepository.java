package vsu.ru.tp_table_games.models.repositoty;

import org.springframework.data.repository.PagingAndSortingRepository;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.entities.Session;
import vsu.ru.tp_table_games.models.entities.User;
import vsu.ru.tp_table_games.models.enums.SessionStatus;

import java.util.List;
import java.util.Optional;

public interface SessionRepository extends PagingAndSortingRepository<Session, Long> {
    Optional<Session> findById(Long id);
    List<Session> findAllBySessionStatus(SessionStatus status);
    List<Session> findAllByGame(GameDto gameDto);
    List<Session> findAllByGameId(Long id);
    List<Session> findAllByParticipants(Long id);
}
