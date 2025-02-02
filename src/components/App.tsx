import React, {useState} from 'react';
import './App.scss';
export const App = () => {
    const [count, setCount] = useState<number>(0);

    const handleCounterclick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <div>Hello world!</div>
            <button  onClick={handleCounterclick}>Click me button</button>
            <div>You pressed: {count} time(s)</div>
        </>
    )
}