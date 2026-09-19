package com.focusos.repository;

import com.focusos.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<Users> findByEmail(String email);
}