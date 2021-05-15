package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.List;

@Controller
@RequestMapping("/app/game")
public class GamesInProgressController {

    @Autowired
    private GamesInProgressService gamesInProgressService;

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
}
