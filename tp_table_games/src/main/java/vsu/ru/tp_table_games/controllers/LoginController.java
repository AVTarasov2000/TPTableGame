package vsu.ru.tp_table_games.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dto.UserDto;

@Controller
public class LoginController {


    @PostMapping("/login/check")
    @ResponseBody
    public UserDto checkLogin(@RequestBody UserDto userDto){
        System.out.println("test is done");
        System.out.println(userDto);
        return userDto;
    }

}
