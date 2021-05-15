package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.services.GameService;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.List;

@Controller
@RequestMapping("/app")
public class GamesController {

    @Autowired
    private GamesInProgressService gamesInProgressService;
    @Autowired
    private GameService gameService;

    @GetMapping("/activeSessions/{id}")
    @ResponseBody
    public List <SessionDto> activeGamesById(@PathVariable Long id){
        return gamesInProgressService.activeRoomsById(id);
    }

    @GetMapping("/activeSessions")
    @ResponseBody
    public List <SessionDto> activeGames(){
        return gamesInProgressService.activeRooms();
    }

    @GetMapping("/sessions/{login}")
    @ResponseBody
    public List <SessionDto> sessionsByLogin(@PathVariable String login){
        return gamesInProgressService.getSessionHistoryByLogin(login);
    }

    @GetMapping("/games")
    @ResponseBody
    public List <GameDto> games(){
        return gameService.getAllGames();
    }
}
