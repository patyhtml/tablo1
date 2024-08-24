package com.tablo.tablo.entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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
    private Long taskId;
    private Long userId;
    private Long cordX;
    private Long cordY;
    private String name;
    private LocalDateTime createdAt;
    private Long fileId;

    @OneToMany(mappedBy = "pointId")
    private List<BoardColumnEntity> tasks;
    @OneToMany(mappedBy = "pointId")
    private List<BoardColumnEntity> users;
    @OneToMany(mappedBy = "pointId")
    private List<BoardColumnEntity> points_files;

}
