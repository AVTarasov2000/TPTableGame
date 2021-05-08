package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.services.RegisterService;

@Controller
@RequestMapping("/app")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    @ResponseBody
    public UserDto Register(@RequestBody UserDto userDto){
        return registerService.provide(userDto);
    }
}