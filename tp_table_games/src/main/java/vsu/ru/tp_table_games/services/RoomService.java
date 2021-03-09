package vsu.ru.tp_table_games.services;

import java.util.List;

public interface RoomService {
    List<Integer> getUsersInRoom(Integer roomId);
}
