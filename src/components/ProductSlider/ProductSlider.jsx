import styles from './ProductSlider.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/scss';
import {useRef} from "react";
import {products} from "../../data/mockData.js";
import {ProductCard} from "./ProductCard/ProductCard.jsx";
import IconArrow from '../../assets/icons/IconArrow.svg';


export const ProductSlider = () => {
    const swiperRef = useRef();

    return (
        <section className={styles['product-slider']}>
            <h1 className={styles['product-slider__title']}>Хиты продаж</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    }
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className={styles['product-slider__swiper']}
            >
                {products.length > 0 ? (
                    products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))
                ) : null}
            </Swiper>
            <div className={styles['product-slider__controls-wrapper']}>
                <nav className={styles['product-slider__arrows']}>
                    <button
                        className={styles['product-slider__button-arrow']}
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        <img src={IconArrow} alt="Стрелка влево"/>
                    </button>
                    <button
                        className={`${styles['product-slider__button-arrow']} 
                        ${styles['product-slider__button-arrow--next']}`}
                        onClick={() => swiperRef.current.slideNext()}
                    >
                        <img
                            className={styles['product-slider__icon']}
                            src={IconArrow}
                            alt="Стрелка вправо"
                        />
                    </button>
                </nav>
                <button className={styles['product-slider__button']}>
                    Смотреть все
                </button>
            </div>
        </section>
    )
}

