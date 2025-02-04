import React, {useState} from 'react';
import * as styles from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import icon3 from '@/assets/icon3.jpg';
import icon2 from '@/assets/icon2.png';
import Cloud from '@/assets/icon1.svg'

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const handleCounterclick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h3 className={styles.header}>Hello world!</h3>
            <img src={icon2} height={50} alt={'woo-hoo!'}/>
            <img src={icon3} height={50} alt={'Lion!'}/>
            <Cloud color={'blue'} width={50} height={50}/>
            <div>
                <Link className={styles.link} to={'/about'}>About</Link>
                <Link className={styles.link} to={'/contact'}>Contacts</Link>
            </div>
            <button className={styles.button} onClick={handleCounterclick}>Click me button</button>
            <div>You pressed: {count} time(s)</div>
            <Outlet/>
        </>
    )
}