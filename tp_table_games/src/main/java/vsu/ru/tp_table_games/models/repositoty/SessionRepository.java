package vsu.ru.tp_table_games.models.repositoty;

import org.springframework.data.repository.PagingAndSortingRepository;
import vsu.ru.tp_table_games.models.entities.Session;

public interface SessionRepository extends PagingAndSortingRepository<Session, Long> {
}
