package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vsu.ru.tp_table_games.models.dtos.GameDto;
import vsu.ru.tp_table_games.models.dtos.RoomDto;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.List;

@Controller
@RequestMapping("/app")
public class GamesInProgressController {

    @Autowired
    private GamesInProgressService gamesInProgressService;

    @PostMapping("/activeGames")
    @ResponseBody
    public List <RoomDto> activeGames(GameDto gameDto){
        return gamesInProgressService.activeRooms(gameDto);
    }
}
