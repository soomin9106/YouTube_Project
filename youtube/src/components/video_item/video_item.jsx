import React, {memo} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './video_item.module.css';


const VideoItem = memo(({video, video : {snippet}, onVideoClick,display}) => {
    const history =useHistory();
    const displayType =display === 'list' ? styles.list : styles.grid;
    return (
   <li className={`${styles.container} ${displayType}`} onClick={() =>onVideoClick(video)}>
       <div onClick={() => {
            history.push('/detail');}} className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnails" />
        <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            <p className={styles.publishedAt}>{snippet.publishedAt}</p>
        </div>
       </div>
   </li>

 )}
);

export default VideoItem;