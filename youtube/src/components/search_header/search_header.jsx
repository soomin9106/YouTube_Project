import React from 'react';
import styles from './search_header.module.css';
import LogoImg from 'C:/Front-End/YouTube_Project/youtube/src/components/images/logo.png';
import searchImg from 'C:/Front-End/YouTube_Project/youtube/src/components/images/search.png'

const Search_header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} alt="logo" src={LogoImg} />
                <h1 className={styles.title}>YouTube</h1>
            </div>
            <input className={styles.input} type="search" placeholder="Search..."/>
            <button className={styles.btn} type="submit"><img className={styles.btnImg} alt="search" src={searchImg}/></button>
        </header>
    );
}

export default Search_header;