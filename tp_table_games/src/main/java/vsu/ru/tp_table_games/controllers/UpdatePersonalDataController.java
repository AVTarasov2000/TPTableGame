package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.services.UserService;

@Controller
@RequestMapping("/app")
public class UpdatePersonalDataController {
    @Autowired
    private UserService userService;

    @PostMapping("/update_name")
    @ResponseBody
    public UserDto Register(@RequestBody LoginUserDto userDto){
//        UserDto newUser = registerService.provide(userDto);
//        if(newUser == null) {
//            //TODO this login is already exist
//        }
//        return newUser;
        return null;
    }
}
