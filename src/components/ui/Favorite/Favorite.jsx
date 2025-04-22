import styles from './Favorite.module.scss';
import {useState} from "react";
import HeartIcon from '../../../assets/icons/IconHeart.svg?react';

export const Favorite = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    return (
        <button
            type="button"
            className={
                isFavorited
                    ? `${styles['favorite-heart']} ${styles['favorite-heart--active']}`
                    : styles['favorite-heart']
            }
            onClick={() => setIsFavorited(!isFavorited)}
            aria-pressed={isFavorited}
            aria-label={isFavorited ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
            <HeartIcon className={styles['favorite-heart__icon']}/>
        </button>
    )
}

