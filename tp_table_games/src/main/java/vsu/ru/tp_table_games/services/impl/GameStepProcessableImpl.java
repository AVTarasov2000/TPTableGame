package vsu.ru.tp_table_games.services.impl;

import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.entities.GameStep;
import vsu.ru.tp_table_games.models.entities.ServerStepResponse;
import vsu.ru.tp_table_games.services.GameStepProcessable;

@Service
public class GameStepProcessableImpl implements GameStepProcessable {
    @Override
    public ServerStepResponse processStep(GameStep gameStep) {
        return null;
    }
}
