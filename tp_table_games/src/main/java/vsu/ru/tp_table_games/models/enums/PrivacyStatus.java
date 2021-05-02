package vsu.ru.tp_table_games.models.enums;

public enum PrivacyStatus {
    PUBLIC("PUBLIC"),
    PRIVATE("PRIVATE");

    private  final String status;

    PrivacyStatus(String status){
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
