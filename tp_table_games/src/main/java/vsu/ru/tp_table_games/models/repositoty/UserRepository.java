package vsu.ru.tp_table_games.models.repositoty;

import vsu.ru.tp_table_games.models.entities.User;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface UserRepository extends PagingAndSortingRepository<User, Long> {
}