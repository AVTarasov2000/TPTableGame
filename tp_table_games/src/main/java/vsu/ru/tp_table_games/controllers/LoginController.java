package vsu.ru.tp_table_games.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.User;

@Controller
public class LoginController {


    @PostMapping("/login/check")
    @ResponseBody
    public User checkLogin(@RequestBody User user){
        System.out.println("test is done");
        System.out.println(user);
        return user;
    }

}
