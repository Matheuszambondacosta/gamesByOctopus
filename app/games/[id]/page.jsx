"use client";
import { fetchApiDetails } from '@/data/apiconsumer';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const gameDescription = ({ params }) => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const dados = await fetchApiDetails(params.id);
                setGames(dados);
            } catch (error) {
                throw error;
            }
        };

        gamesFetch();
    }, []);

    return (
        <div className={styles.container}>
            <h1>{games.name}</h1>
            <img className={styles.gameThumb} src={games.background_image} alt={games.name} />
            <p className={styles.rating}>{games.rating}</p>
            <p className={styles.released}>{games.released}</p>
            <p className={styles.description}>{games.description_raw}</p>
            {
                games.genres ? (
                    games.genres.map((genre) => {
                        return (
                            <p className={styles.genres}>{genre.name}</p>
                        )
                    })
                ) : (
                    null
                )
            }
            {
                games.parent_platforms ? (
                    games.parent_platforms.map((platform) => {
                        return (
                            <p className={styles.platforms}>{platform.platform.name}</p>
                        )
                    })
                ) : (
                    null
                )
            }
        </div>
    );
};

export default gameDescription;