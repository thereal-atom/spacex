import React from 'react';
import styles from './Card.module.css'

function Card({ name, succesful, description, image, wiki }){
    return(
        <a href={wiki} className={styles.link}>
            <div className={styles.card__container}>
                <div className={styles.card}>
                    <img src={image} alt="No image found"/>
                    <h1 className={styles.title}>{name}</h1>
                </div>
                <p>{description ? description : "No description found."}</p>
                <h1 className={styles.succesful}>Succecful? {succesful}</h1>
            </div>
        </a>
    )
}

export default Card;