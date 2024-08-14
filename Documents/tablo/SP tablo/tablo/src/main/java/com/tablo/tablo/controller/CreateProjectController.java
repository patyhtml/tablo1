package com.tablo.tablo.controller;

import com.tablo.tablo.dto.CreateProjectDto;
import com.tablo.tablo.entity.CreateProjectEntity;
import com.tablo.tablo.service.CreateProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/projects")
public class CreateProjectController {

    private final CreateProjectService createProjectService;

    @Autowired
    public CreateProjectController(CreateProjectService createProjectService) {
        this.createProjectService = createProjectService;
    }

    @PostMapping
    public ResponseEntity<CreateProjectEntity> createProject(@RequestBody CreateProjectDto dto) {
        CreateProjectEntity project = createProjectService.createProject(dto);
        return ResponseEntity.status(201).body(project);
    }
}
