package vsu.ru.tp_table_games.models.repositoty;

import vsu.ru.tp_table_games.models.entities.Game;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface GameRepository extends PagingAndSortingRepository<Game, Long>{
}
