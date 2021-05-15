package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.services.LoginService;

@Controller
@RequestMapping("/app")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login/check")
    @ResponseBody
    public UserDto checkLogin(@RequestBody LoginUserDto userDto){
        return loginService.provide(userDto);
    }

}
