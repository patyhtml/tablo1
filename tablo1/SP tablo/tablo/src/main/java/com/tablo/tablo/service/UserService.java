package com.tablo.tablo.service;

import com.tablo.tablo.dto.UserDto;
import com.tablo.tablo.entity.UserEntity;
import com.tablo.tablo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public UserDto getUser(Long id) { // zmiana nazwy "getUser" wystarczy w zupełności
        Optional<UserEntity> user = userRepository.findById(id);
        if(user.isPresent()) {
            return UserDto.builder()
                    .name(user.get().getName())
                    .email(user.get().getEmail())
                    .build();
        } else {
            return null;
        }
    }

    public void createUser(UserDto user) { //nie musimy zwracać encji, normalnie moglibyśmy zwrócić URI, ale po prostu tutaj nie zwrócimy nic, powinniśmy też obsługiwać wyjątki i błędy
        UserEntity entity = UserEntity.builder()
                .name(user.getName())
                .password(user.getPassword())
                .email(user.getEmail())
                .build();
        userRepository.saveAndFlush(entity);
    }

    public void updateUser(Long id, UserEntity userDetails) { //drobna poprawka związana ze zmianą typu metody na void (nic nie zwracamy)
        Optional<UserEntity> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            UserEntity updatedUser = existingUser.get();
            updatedUser.setEmail(userDetails.getEmail());
            updatedUser.setPassword(userDetails.getPassword());
            updatedUser.setName(userDetails.getName());
            userRepository.saveAndFlush(updatedUser);
        } //generalnie poprawnie, natomiast można by dodać obsługę przypadków kiedy frontend nie wysyła wszystkich danych do zaktualizowania
        // na przykład ktoś zmienia tylko maila, wtedy front musi pytać też o hasło, żeby się nie zmieniło
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
