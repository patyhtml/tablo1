package com.tablo.tablo.repository;

import com.tablo.tablo.entity.UserPlanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPlanRepository extends JpaRepository<UserPlanEntity, Long> {
}
