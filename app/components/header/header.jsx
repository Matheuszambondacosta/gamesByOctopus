'use client'

import styles from './header.module.css';
import Image from 'next/image';
import { useState } from 'react';



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
        <header className={styles.mainContainer}>
            <nav className={styles.nav}>

                <div onClick={teste} className={styles.menu}>
                <Image className={styles.logoclash} src={'/controle.png'} alt="akfadfa" width={240} height={100}></Image>
                </div>
                
            </nav>

        </header>
    );
}




export default Header;