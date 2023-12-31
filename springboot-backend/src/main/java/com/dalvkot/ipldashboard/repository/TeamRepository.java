package com.dalvkot.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.dalvkot.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
