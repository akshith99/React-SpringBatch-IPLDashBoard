import { React, useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { useParams } from "react-router-dom";
import './MatchPage.scss';
import { YearSelector } from "../components/YearSelector";

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);

    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();
    }, [teamName, year])

    console.log(matches.length);

    if (matches.length === 0) {
        return (
            <>
                <div className="no-data">
                    <div className="year-selector">
                        <h3>Select Year</h3>
                        <YearSelector teamName={teamName} />
                    </div>
                    <div>
                        <h1 className="page-heading">{teamName} matches in {year}</h1>
                        <div className="display-message">
                            <h2>
                                {teamName} haven't played fot the year {year}
                            </h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='MatchPage'>
                <div className="year-selector">
                    <h3>Select Year</h3>
                    <YearSelector teamName={teamName} />
                </div>
                <div>
                    <h1 className="page-heading">{teamName} matches in {year}</h1>
                    {
                        matches.map(match => <MatchDetailCard
                            key={match.id}
                            teamName={teamName}
                            match={match}
                        />
                        )
                    }
                </div>
            </div>
        </>
    );
}

//http://localhost:8080/team/Chennai%20Super%20Kings/matches/2019