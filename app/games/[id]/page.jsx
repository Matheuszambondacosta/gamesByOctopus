"use client";
import { fetchApiDetails } from '@/data/apiconsumer';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '@/app/components/header/header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
            <Header />
            <div className={styles.maincontainer}>
            <h1>{games.name}</h1>
            <img className={styles.gameThumb} src={games.background_image} alt={games.name} />
            <p className={styles.rating}>{games.rating}</p>
            <p className={styles.released}>{games.released}</p>
            <p className={styles.description}>{games.description_raw}</p>
            <div className={styles.tabs}>
            <Tabs>
    <TabList>
      <Tab>Plataformas</Tab>
      <Tab>Gêneros</Tab>
    </TabList>

    <TabPanel>
      <h2>{
                games.parent_platforms ? (
                    games.parent_platforms.map((platform) => {
                        return (
                            <p className={styles.platforms}>{platform.platform.name}</p>
                        )
                    })
                ) : (
                    null
                )
            }</h2>
    </TabPanel>
    <TabPanel>
      <h2>{
                games.genres ? (
                    games.genres.map((genre) => {
                        return (
                            <p className={styles.genres}>{genre.name}</p>
                        )
                    })
                ) : (
                    null
                )
            }</h2>
    </TabPanel>
  </Tabs>
            </div>
            
            </div>
        </div>
    );
};

export default gameDescription;