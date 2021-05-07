package vsu.ru.tp_table_games.models.repositoty;

import org.springframework.data.repository.PagingAndSortingRepository;
import vsu.ru.tp_table_games.models.entities.Session;

import java.util.Optional;

public interface SessionRepository extends PagingAndSortingRepository<Session, Long> {
    Optional<Session> findById(Long id);
}
