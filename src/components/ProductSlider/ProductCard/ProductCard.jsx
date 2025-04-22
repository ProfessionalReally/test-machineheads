import styles from './ProductCard.module.scss';
import {Rating} from "../../ui/Rating/Rating.jsx";
import IconMedal from '../../../assets/icons/IconMedal.svg';
import IconShield from '../../../assets/icons/IconShield.svg';
import IconSale from '../../../assets/icons/IconSale.svg';
import IconGift from '../../../assets/icons/IconGift.svg';
import IconLike from '../../../assets/icons/IconLike.svg';
import IconWinterTires from '../../../assets/icons/IconWinterTires.svg';
import IconStuddedTires from '../../../assets/icons/IconStuddedTires.svg';
import IconMudTires from '../../../assets/icons/IconMudTires.svg';
import {Favorite} from "../../ui/Favorite/Favorite.jsx";
import {Counter} from "../../ui/Counter/Counter.jsx";

export const ProductCard = ({product}) => {
    return (
        <article className={styles['product-card']}>
            <div className={styles['product-card__images']}>
                <ul
                    className={styles['product-card__icons']}
                    role="group"
                    aria-label="Дополнительные свойства товара">
                    <li className={styles['product-card__icon']}>
                        <img src={IconMedal} alt="Топовый товар"/>
                    </li>
                    <li className={styles['product-card__icon']}>
                        <img src={IconShield} alt="Гарантия"/>
                    </li>
                    <li className={styles['product-card__icon']}>
                        <img src={IconSale} alt="Скидка"/>
                    </li>
                    <li className={styles['product-card__icon']}>
                        <img src={IconGift} alt="Подарок"/>
                    </li>
                    <li className={styles['product-card__icon']}>
                        <img src={IconLike} alt="Хит"/>
                    </li>
                </ul>
                <div className={styles['product-card__image-wrapper']}>
                    <img
                        className={styles['product-card__image']}
                        src={product.imgSrc}
                        alt={product.title}
                    />
                </div>
            </div>
            <section className={styles['product-card__content']}>
                <h3 className={styles['product-card__title']}>
                    {product.title}
                </h3>
                <div className={styles['product-card__review']}>
                    <Rating rating={product.rating}></Rating>
                    <p className={styles['product-card__comments']}>
                        {product.comments} отзывов
                    </p>
                </div>
                <div className={styles['product-card__features']}>
                    <div className={styles['product-card__feature']}>
                        <img src={IconWinterTires} alt="Зимняя резина"/>
                        <p>Зимняя</p>
                    </div>
                    <div className={styles['product-card__feature']}>
                        <img src={IconStuddedTires} alt="Шипованная резина"/>
                        <p>Шипованная</p>
                    </div>
                    <div className={styles['product-card__feature']}>
                        <img src={IconMudTires} alt="Грязевая резина"/>
                        <p>Грязевая</p>
                    </div>
                </div>
                <div className={styles['product-card__price']}>
                    <p className={styles['product-card__price-old']}>
                        {product.oldPrice} ₽
                    </p>
                    <p className={styles['product-card__price-new']}>
                        {product.price} ₽
                    </p>
                </div>
                <div className={styles['product-card__actions']}>
                    <div className={styles['product-card__primary-actions']}>
                        <Counter/>
                        <button className={styles['product-card__button']}>
                            В корзину
                        </button>
                        <Favorite/>
                    </div>
                    <button className={styles['product-card__button--neutral']}>
                        Купить в 1 клик
                    </button>
                </div>
            </section>
        </article>
    )
}

