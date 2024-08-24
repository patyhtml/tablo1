package com.tablo.tablo.dto;

import lombok.Data;
import java.util.List;

@Data
public class BoardDto {
    private Long id;
    private String name;
    private List<BoardColumnDto> boardColumns;  // Jeśli potrzebujesz zagnieżdżonych DTO
    private List<UserBoardDto> userBoards;      // Jeśli potrzebujesz zagnieżdżonych DTO
}
