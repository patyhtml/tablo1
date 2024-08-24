package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "public.tasks_files")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskFileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fileId;
    @OneToMany(mappedBy = "filId")
    private List<PointEntity> task;
    @OneToMany(mappedBy = "filId")
    private List<PointEntity> files;
}
