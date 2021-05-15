package vsu.ru.tp_table_games.services;

import org.springframework.stereotype.Controller;
import vsu.ru.tp_table_games.models.entities.GameStep;
import vsu.ru.tp_table_games.models.entities.ServerStepResponse;

public interface GameStepProcessable {
    public ServerStepResponse processStep(GameStep gameStep);
}
