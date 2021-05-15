package vsu.ru.tp_table_games.controllers;

import org.json.simple.JSONObject;
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
    public UserDto UpdatePassword(@RequestBody JSONObject jsonObject) {
        LoginUserDto userDto = new LoginUserDto(
        jsonObject.get("name").toString(),
        jsonObject.get("login").toString(),
        jsonObject.get("password").toString());
        return userService.updateUserPassword(userDto, jsonObject.get("newPassword").toString());
    }

}
