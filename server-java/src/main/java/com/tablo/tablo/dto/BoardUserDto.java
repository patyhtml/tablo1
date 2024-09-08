package com.tablo.tablo.dto;

import com.tablo.tablo.type.BoardRoleEnum;

public class BoardUserDto { //Tworzymy DTO dla szczegółów użytkowników przypisanych do tablicy
    Long userId;
    String name;
    String email;
    BoardRoleEnum role;
}
