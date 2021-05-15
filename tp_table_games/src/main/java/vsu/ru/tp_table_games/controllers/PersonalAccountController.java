package vsu.ru.tp_table_games.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import vsu.ru.tp_table_games.models.dtos.UserDto;

@Controller
public class PersonalAccountController {

    @PostMapping("/personal_account")
    @ResponseBody
    public UserDto checkLogin(@RequestBody UserDto userDto){
        System.out.println("test is done");
        System.out.println(userDto);
        return userDto;
    }
}
