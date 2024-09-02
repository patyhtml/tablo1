package com.tablo.tablo.repository;

import com.tablo.tablo.entity.UserBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserBoardRepository extends JpaRepository<UserBoardEntity, Long> {
    public List<UserBoardEntity> findAllByUserId(Long userId); //dopisujemy metodę do interfejsu repostiory, która dzięki JPA pozwoli nam pobrać wszystkie skojarzenia tablic z userami dla danego id usera
}
