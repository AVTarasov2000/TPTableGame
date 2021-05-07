package vsu.ru.tp_table_games.models.enums;

public enum SessionStatus {
    COMPLETED("COMPLETED"),
    STARTED("STARTED"),
    PREPARING("PREPARING");

    private final String status;

    SessionStatus(String status){
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
