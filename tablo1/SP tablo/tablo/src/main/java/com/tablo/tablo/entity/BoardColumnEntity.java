package com.tablo.tablo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

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

}
