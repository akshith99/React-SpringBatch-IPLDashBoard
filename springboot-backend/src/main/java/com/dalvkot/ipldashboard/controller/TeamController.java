package com.dalvkot.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dalvkot.ipldashboard.model.Match;
import com.dalvkot.ipldashboard.model.Team;
import com.dalvkot.ipldashboard.repository.MatchRepository;
import com.dalvkot.ipldashboard.repository.TeamRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/team")
    public Iterable<Team> getAllTeam() {
        return teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return matchRepository.findMatchesByTeamBetweenDates(
                teamName,
                startDate,
                endDate);
    }

}
