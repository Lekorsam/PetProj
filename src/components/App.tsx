import React, {useState} from 'react';
import * as styles from './App.module.scss';
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const handleCounterclick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h3 className={styles.header}>Hello world!</h3>
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