package vsu.ru.tp_table_games.models.repositoty;
import vsu.ru.tp_table_games.models.entities.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;


public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    Optional<User> findById(Long id);
    Optional<User> findByLogin(String login);
}