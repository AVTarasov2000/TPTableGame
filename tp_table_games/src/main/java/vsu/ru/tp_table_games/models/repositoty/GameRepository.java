package vsu.ru.tp_table_games.models.repositoty;

import vsu.ru.tp_table_games.models.entities.Game;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;


public interface GameRepository extends PagingAndSortingRepository<Game, Long>{
    Optional<Game> findById(Long id);
}
