package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "public.users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long avatar_id;
    private String email;
    private String password;
    private String name;

    @OneToMany(mappedBy = "userId")
    private List<BoardEntity> users_boards;
    @OneToMany(mappedBy = "userId")
    private List<BoardEntity> users_plans;
    @OneToMany(mappedBy = "userId")
    private List<BoardEntity> files;
    @OneToMany(mappedBy = "userId")
    private List<BoardEntity> points;
    @OneToMany(mappedBy = "userId")
    private List<BoardEntity> tasks;
}
