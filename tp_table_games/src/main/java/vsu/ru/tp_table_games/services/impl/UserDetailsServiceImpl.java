//package vsu.ru.tp_table_games.services.impl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import vsu.ru.tp_table_games.models.entities.User;
//import vsu.ru.tp_table_games.services.UserService;
//
//import java.util.HashSet;
//import java.util.Set;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    @Autowired
//    private UserService userService;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = userService.getUser("name");
//        UserDetails userDetails =
//                new org.springframework.security.core.userdetails.User(user.getLogin(),
//                        user.getPassword(),
//                        roles);
//
//        return userDetails;
//    }
//
//}