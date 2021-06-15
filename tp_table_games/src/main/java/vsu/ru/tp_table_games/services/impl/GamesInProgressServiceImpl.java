package vsu.ru.tp_table_games.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vsu.ru.tp_table_games.models.dtos.LoginUserDto;
import vsu.ru.tp_table_games.models.dtos.SessionDto;
import vsu.ru.tp_table_games.models.dtos.UserDto;
import vsu.ru.tp_table_games.models.entities.Session;
import vsu.ru.tp_table_games.models.entities.User;
import vsu.ru.tp_table_games.models.enums.SessionStatus;
import vsu.ru.tp_table_games.models.mappers.LoginUserMapper;
import vsu.ru.tp_table_games.models.mappers.SessionsMapper;
import vsu.ru.tp_table_games.models.mappers.UserMapper;
import vsu.ru.tp_table_games.models.repositoty.SessionRepository;
import vsu.ru.tp_table_games.models.repositoty.UserRepository;
import vsu.ru.tp_table_games.services.GamesInProgressService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class GamesInProgressServiceImpl implements GamesInProgressService {
    @Autowired
    private SessionRepository sessionRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<SessionDto> activeRooms() {
        return SessionsMapper.INSTANCE.sessionToDto(sessionRepository.findAllBySessionStatus(SessionStatus.STARTED));
    }

    @Override
    public List<SessionDto> activeRoomsById(Long id) {
        List<SessionDto> result = new ArrayList<>();
        List<SessionDto> sessionDtos = SessionsMapper.INSTANCE.sessionToDto(sessionRepository.findAllByGameId(id));
        sessionDtos.forEach(element -> {
            if (element != null && element.getSessionStatus() == SessionStatus.STARTED) {
                result.add(element);
            }
        });
        return result;
    }

    @Override
    public List<SessionDto> getSessionHistoryByLogin(String login) {
        User user = userRepository.findByLogin(login).orElse(null);

        if (user != null) {
            List<SessionDto> tmp = new ArrayList <>();
            tmp.addAll(SessionsMapper.INSTANCE.sessionToDto(user.getAttendedSessions()));
            tmp.addAll(SessionsMapper.INSTANCE.sessionToDto(user.getCreatedSessions()));
            return tmp;
        }
        return new ArrayList<>();
    }

    public List<UserDto> addUserById(String login, Long id) {
        Session targetSession = sessionRepository.findById(id).orElse(null);
        User addedUser = userRepository.findByLogin(login).orElse(null);
        List<User> users = new ArrayList<>();
        if (targetSession != null && addedUser != null) {
            users = targetSession.getParticipants();
            users.add(addedUser);
            targetSession.setParticipants(users);
            sessionRepository.save(targetSession);
        }
        return UserMapper.INSTANCE.userToDto(users);
    }
}
