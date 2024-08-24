package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "public.board_columns")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class BoardColumnEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long boardId;
    private String name;

    @OneToMany(mappedBy = "board_columnId")
    private List<BoardColumnEntity> boards;
    @OneToMany(mappedBy = "board_columnId")
    private List<BoardColumnEntity> tasks;
}
