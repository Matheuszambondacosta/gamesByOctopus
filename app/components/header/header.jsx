'use client'

import styles from './header.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { BiSolidGroup } from 'react-icons/bi';
import { BiSolidHome } from 'react-icons/bi';
import { GiRetroController } from 'react-icons/gi';
import { SiLinktree } from 'react-icons/si';
import Link from 'next/link';




function Header({ Prince }) {

const meuLink = "https://linktr.ee/joao.senai"

    return (
        <div>
            <header className={styles.mainContainer}>
                <div className={styles.cont1}>
                    <Link href="/">
                        <Image className={styles.logoOctopus} src={'/LOGO-octopusBlack.png'} alt="Logo da empresa" width={50} height={50}></Image>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <div className={styles.navigation}>
                        <ul>
                            <li>
                                <Link className={styles.a} href="/">
                                    <span className={styles.icon}>
                                        <BiSolidHome className={styles.fa} />
                                    </span>
                                    <span className={styles.title}>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/sobrenos">
                                    <span className={styles.icon}>
                                        <BiSolidGroup className={styles.fa} />
                                    </span>
                                    <span className={styles.title}>Sobre Nós</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={Prince}
                                className={styles.a} >
                                    <span className={styles.icon2}>
                                        <GiRetroController className={styles.fa} />
                                    </span>

                                </button>
                            </li>
                            <li>
                                <Link className={styles.a} href={meuLink} target='_blank'>
                                    <span className={styles.icon}>
                                        <SiLinktree className={styles.fa} />
                                    </span>
                                    <span className={styles.title}>LinkTree</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;