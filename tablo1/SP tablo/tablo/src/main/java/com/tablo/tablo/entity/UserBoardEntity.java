package com.tablo.tablo.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity(name = "public.users_boards")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserBoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;


    @ManyToOne
    @JoinColumn(name = "board_id")
    private BoardEntity board;
    private boolean isOwner;
    private boolean isInvited;

}


