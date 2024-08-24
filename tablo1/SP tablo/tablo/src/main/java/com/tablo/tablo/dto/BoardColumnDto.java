package com.tablo.tablo.dto;

import lombok.Data;

@Data
public class BoardColumnDto {
    private Long id;
    private String name;
    private Long boardId;  // Może być potrzebny, jeśli chcesz mieć referencję do tablicy
    private List<TaskDto> tasks;  // Jeśli potrzebujesz zagnieżdżonych DTO
}
