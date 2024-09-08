package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity(name = "public.task")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long board_columnId;
    private Long userId;
    private String name;
    private String description;
    private String priority;
    private LocalDateTime start;
    private LocalDateTime due;

    @ManyToOne
    @JoinColumn(name = "board_column_id")
    private BoardColumnEntity boardColumn;

    public BoardColumnEntity[] getBoardColumns() {
    }

    public void setFiles(List<FileEntity> files) {
    }
}
