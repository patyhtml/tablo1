package com.tablo.tablo.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "public.points_files")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PointFileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pointId;
    private Long fileId;

    @OneToMany(mappedBy = "point_fileId")
    private List<BoardEntity> points;
    @OneToMany(mappedBy = "plans")
    private List<BoardEntity> files;

}
