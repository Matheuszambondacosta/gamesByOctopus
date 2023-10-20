'use client'

import styles from './header.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { GrGroup } from 'react-icons/gr';
import { BiSolidHome } from 'react-icons/bi';
import { GiRetroController } from 'react-icons/gi';
import { SiLinktree } from 'react-icons/si';
import Link from 'next/link';




function Header() {


    const [type, setType] = useState('');


    function teste() {
        if (type === '') {
            setType(true);
        } else {
            setType('');
        }
    }


    return (
        <div>
            <header className={styles.mainContainer}>
                <nav className={styles.nav}>

                    <div onClick={teste} className={styles.menu}>
                        <div className={styles.menu1}>
                            <Image className={styles.logoOctopus} src={'/LOGO-octopusBlack.png'} alt="akfadfa" width={120} height={120}></Image>
                        </div>
                    </div>

                </nav>
                <div className={styles.icons}>
                    <Link className={styles.home} href="/">
                        <BiSolidHome className={styles.icon1} />
                        <p className={styles.textHome}>Home</p>
                    </Link>
                    <Link className={styles.sobrenos} href="/sobrenos">
                        <GrGroup className={styles.icon2} />
                        <p className={styles.textSobreNos}>SobreNós</p>
                    </Link>

                    <GiRetroController className={styles.icon3} />

                    <div className={styles.icons1}>
                        <SiLinktree className={styles.icon4} />
                    </div>

                </div>




            </header>
        </div>
    );
}

export default Header;