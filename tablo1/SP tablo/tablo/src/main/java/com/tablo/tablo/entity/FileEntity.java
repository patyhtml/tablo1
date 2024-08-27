package com.tablo.tablo.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "public.files")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String fileName;
    private String path;
    @OneToMany(mappedBy = "filId")
    private List<PointEntity> points;
}
