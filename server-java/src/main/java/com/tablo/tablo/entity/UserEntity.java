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
    private Long avatarId;
    private String email;
    private String password;
    private String name;

    @OneToMany(mappedBy = "userId")
    private List<UserBoardEntity> userBoards;
    @OneToMany(mappedBy = "userId")
    private List<UserPlanEntity> userPlans;

}
