package com.tablo.tablo.dto;

import com.tablo.tablo.type.BoardRoleEnum;
import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class BoardDto { // samo w sobie BoardEntity nie zawiera informacji o uprawnieniach użytkownika co do konkretnej tablicy, ale BoardDto już powinno, zadba o to logika w serwisie, która powiąże informacje z UserBoardEntity
    private Long id;
    private String name;
    private List<BoardColumnDto> boardColumns;
    //    private List<TaskDto> tasks; //taski tutaj są zbędne, bo taski są elementami boardColumn
    private BoardRoleEnum role; //dodamy do DTO informacje o rolach
    private List<BoardUserDto> boardUsers; //dodajmy też informację o użytkownikach przypisanych do tablicy
}
