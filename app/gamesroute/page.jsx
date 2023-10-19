"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import fetchApi from '@/data/apiconsumer';
import GameCard from '../components/gameDetails/GameCard';

function gamePage() {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedRating, setSelectedRating] = useState("all");

    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const dados = await fetchApi();
                setGames(dados);
            } catch (error) {
                throw error;
            }
        };

        gamesFetch();
    }, []);

    const filterGames = games.filter((game) => {
        const platformName = game.platforms.map((platform) => platform.platform.name);
        const gameGenres = game.genres.map((genre) => genre.name);
        const platformFilter = selectedPlatform == "all" || platformName.includes(selectedPlatform);
        const genreFilter = selectedGenre == "all" || gameGenres.includes(selectedGenre);
        const ratingFilter = selectedRating == "all" || game.rating == selectedRating;
        return platformFilter && genreFilter && ratingFilter;
    });

    return (
        <main className={styles.main}>
            <h1>Game Page</h1>
            <h2>Filtre pela plataforma:</h2>
            <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
            >
                <option value="all">Todas</option>
                {
                    games.map((game) => game.platforms.map((platform) => <option value={platform.platform.name}>{platform.platform.name}</option>))
                }
            </select>
            <div className={styles.container}>
                <GameCard games={filterGames} />
                </div>
        </main>
    );
}

export default gamePage;