package com.tablo.tablo.controller;

import com.tablo.tablo.dto.ProjectDto;
import com.tablo.tablo.entity.ProjectEntity;
import com.tablo.tablo.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping
    public ResponseEntity<ProjectEntity> createProject(@RequestBody ProjectDto dto) {
        ProjectEntity project = projectService.createProject(dto);
        return ResponseEntity.status(201).body(project);
    }
}
