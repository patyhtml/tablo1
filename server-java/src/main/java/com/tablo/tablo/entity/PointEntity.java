package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PointEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Long cordX;
    private Long cordY;
    private String name;
    private LocalDateTime createdAt;


    @ManyToOne
    @JoinColumn(name = "task_id", nullable = false)
    private TaskEntity task;


    @ManyToOne
    @JoinColumn(name = "file_id", nullable = false)
    private FileEntity file;

}
