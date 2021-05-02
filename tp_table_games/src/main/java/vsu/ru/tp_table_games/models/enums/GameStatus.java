package vsu.ru.tp_table_games.models.enums;

public enum GameStatus {
    COMPLETED("COMPLETED"),
    STARTED("STARTED"),
    PREPARING("PREPARING");

    private final String status;

    GameStatus(String status){
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
