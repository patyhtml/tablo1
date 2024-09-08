package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class TaskDto {
    private Long id;
    private String name;
    private String description;
    private String priority; // tutaj można by zastosować enum, lub coś jeszcze bardziej elastycznego, ale zostajemy przy Stringu
    private LocalDateTime start;
    private LocalDateTime due;
    //    private Long boardColumnId; //informacja zbędna
    private Long userId; //tutaj też można by było rozbudować to o rolę, ale powiedzmy, że chodzi o ownera
//    private List<FileDto> files; // na tym etapie nie będziemy pobierać plików, ta klasa dotyczy elementu listy jaką jest kolumna, a task jest jej elementem
//    private List<BoardColumnDto> boardColumns; // nie dołączamy kolumn do tasków, task należy do kolumny
//    private List<BoardDto> boards; // nie dołączamy boardów do poszczególnych tasków, task należy do kolumny, która należy boarda nie na odwrót


}
