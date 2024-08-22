package com.tablo.tablo.service;

import com.tablo.tablo.dto.ProjectDto;
import com.tablo.tablo.entity.ProjectEntity;
import com.tablo.tablo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository createProjectRepository;

    @Autowired
    public ProjectService(ProjectRepository createProjectRepository) {
        this.createProjectRepository = createProjectRepository;
    }

    public ProjectEntity createProject(ProjectDto dto) {
        ProjectEntity project = new ProjectEntity();
        project.setName(dto.getName());
        project.setDescription(dto.getDescription());
        project.setEmail(dto.getEmail());
        project.setTag(dto.getTag());
        project.setPriority(dto.getPriority());
        project.setStartDate(dto.getStartDate());
        project.setEndDate(dto.getEndDate());
        project.setAttachment(dto.getAttachment());
        return createProjectRepository.save(project);
    }
}
