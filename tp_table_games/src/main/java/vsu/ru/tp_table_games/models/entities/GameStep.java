package vsu.ru.tp_table_games.models.entities;

import lombok.Data;

import java.sql.Date;

@Data
public abstract class GameStep {

    String game;
    String type;
    String senderId;
    String roomId;
    Date date;

}
