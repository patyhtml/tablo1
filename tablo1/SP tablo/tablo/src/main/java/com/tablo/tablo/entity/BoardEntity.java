package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "public.boards")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "board_id")
    private List<BoardColumnEntity> columns;
}
