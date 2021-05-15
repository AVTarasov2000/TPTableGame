package vsu.ru.tp_table_games.models.enums;

public enum UserStatus {
    REGISTERED(true),
    GUEST(false);

    private final boolean status;

    UserStatus(boolean status){
        this.status = status;
    }

    public boolean isStatus() {
        return status;
    }
}
