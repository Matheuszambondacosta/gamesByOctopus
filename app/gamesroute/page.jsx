"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { fetchApi } from '@/data/apiconsumer';

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
    return (
        <div>
            <h1>Game Page</h1>
        </div>
    );
}

export default gamePage;