package vsu.ru.tp_table_games.services;

import vsu.ru.tp_table_games.models.entities.User;

public interface UserService {
    User getUser(String login);
}
