package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dto.GameDTO;
import vsu.ru.tp_table_games.models.dto.UserDto;
import vsu.ru.tp_table_games.services.MainPageService;

import java.util.List;

@Controller
@RequestMapping("/app")
public class MainPageController {

    @Autowired
    private MainPageService mainPageService;

    @GetMapping("/games")
    @ResponseBody
    public List <GameDTO> checkLogin(){
        return mainPageService.getAllGames();
    }

}
