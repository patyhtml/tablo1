package com.tablo.tablo.entity;


import com.tablo.tablo.type.BoardRoleEnum;
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
    private Long boardId;
    private Long userId;
    private BoardRoleEnum role;

}


