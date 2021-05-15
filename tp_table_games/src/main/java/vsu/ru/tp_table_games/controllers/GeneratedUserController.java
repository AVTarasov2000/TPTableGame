package vsu.ru.tp_table_games.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.services.GeneratedUserService;
import vsu.ru.tp_table_games.services.LoginService;

@Controller
@RequestMapping("/app/generate")
public class GeneratedUserController {

    @Autowired
    private GeneratedUserService generatedUserService;

    @PostMapping("/user")
    @ResponseBody
    public UserDto checkLogin(@RequestBody LoginUserDto userDto){
        return generatedUserService.generateUnregisteredUser(userDto.getLogin());
    }


}
