import React, {useState} from 'react';
import * as styles from './App.module.scss';
export const App = () => {
    const [count, setCount] = useState<number>(0);

    const handleCounterclick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h3 className={styles.header}>Hello world!</h3>
            <button className={styles.button} onClick={handleCounterclick}>Click me button</button>
            <div>You pressed: {count} time(s)</div>
        </>
    )
}