import styles from './Rating.module.scss';

export const Rating = ({rating, totalStars = 5}) => {
    return (
        <div className={styles['star-rating']}>
            {Array.from({length: totalStars}, (_, i) => {
                const isFilled = rating > i;
                const starClass = isFilled ? styles['star-rating__star-filled'] : '';
                return (
                    <div
                        key={i}
                        className={`${styles['star-rating__star']} ${starClass}`}
                    >
                        ★
                    </div>
                )
            })}
        </div>
    )
}

