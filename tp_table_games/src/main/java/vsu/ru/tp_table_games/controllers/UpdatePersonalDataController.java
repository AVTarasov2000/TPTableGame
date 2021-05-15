package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.services.UserService;

@Controller
@RequestMapping("/app/update")
public class UpdatePersonalDataController {
    @Autowired
    private UserService userService;

    @PostMapping("/name")
    @ResponseBody
    public UserDto UpdateName(@RequestBody LoginUserDto userDto) {
        return userService.updateUserName(userDto);
    }

    @PostMapping("/password")
    @ResponseBody
    public UserDto UpdatePassword(@RequestBody LoginUserDto userDto, @RequestParam String newPassword) {
        return userService.updateUserPassword(userDto, newPassword);
    }

}
