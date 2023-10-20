'use client'

import styles from './header.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { GrGroup } from 'react-icons/gr';
import { BiSolidHome } from 'react-icons/bi';
import { GiRetroController } from 'react-icons/gi';



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
                    <BiSolidHome className={styles.icon1} />
                    <GrGroup className={styles.icon2} />
                    <GiRetroController className={styles.icon3} />

                </div>


            </header>
        </div>
    );
}

export default Header;