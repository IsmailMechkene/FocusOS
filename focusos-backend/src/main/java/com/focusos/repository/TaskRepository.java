package com.focusos.focusosbackend.repository;

import com.focusos.focusosbackend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}