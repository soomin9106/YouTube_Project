import React, {memo, useRef} from 'react';
import styles from './search_header.module.css';
import LogoImg from 'C:/Front-End/YouTube_Project/youtube/src/components/images/logo.png';
import searchImg from 'C:/Front-End/YouTube_Project/youtube/src/components/images/search.png'

const SearchHeader = memo(({onSearch,onDark,onLight}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch();
    };

    const onKeyPress= (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    };

    const dark = () => {
        onDark();
    };

    const light = () => {
        onLight();
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <button><img className={styles.img} alt="logo" src={LogoImg} /></button>
                <h1 className={styles.title}>YouTube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
            <button className={styles.btn} type="submit" onClick={onClick}><img className={styles.btnImg} alt="search" src={searchImg}/></button>
            <button className={styles.toggleBtn} onClick={dark}><i className="fas fa-moon"></i></button>
            <button className={styles.toggleBtn} onClick={light}><i className="fas fa-sun"></i></button>
        </header>
    );
});

export default SearchHeader;