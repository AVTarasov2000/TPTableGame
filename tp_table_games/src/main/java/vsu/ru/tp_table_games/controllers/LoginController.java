package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dto.UserDto;
import vsu.ru.tp_table_games.services.LoginService;
import vsu.ru.tp_table_games.services.LoginServiceImpl;

@Controller
@RequestMapping("/app")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login/check")
    @ResponseBody
    public UserDto checkLogin(@RequestBody UserDto userDto){
        UserDto resUser = loginService.provide(userDto);
        return resUser;
    }

}
