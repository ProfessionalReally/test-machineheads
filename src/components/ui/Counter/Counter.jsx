import styles from './Counter.module.scss';
import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(4);

    const decrement = () => {
        if (count > 0) setCount(prev => prev - 1);
    };

    const increment = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div className={styles.counter}>
            <button
                className={styles['counter__btn']}
                onClick={decrement}
            >
                −
            </button>
            <span className={styles['counter__value']}>{count}</span>
            <button
                className={styles['counter__btn']}
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}

