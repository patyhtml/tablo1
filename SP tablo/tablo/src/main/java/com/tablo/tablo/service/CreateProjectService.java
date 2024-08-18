package com.tablo.tablo.service;

import com.tablo.tablo.dto.CreateProjectDto;
import com.tablo.tablo.entity.CreateProjectEntity;
import com.tablo.tablo.repository.CreateProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateProjectService {

    private final CreateProjectRepository createProjectRepository;

    @Autowired
    public CreateProjectService(CreateProjectRepository createProjectRepository) {
        this.createProjectRepository = createProjectRepository;
    }

    public CreateProjectEntity createProject(CreateProjectDto dto) {
        CreateProjectEntity project = new CreateProjectEntity();
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
