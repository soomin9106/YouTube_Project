import React,{useState,useEffect} from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Search_header from './components/search_header/search_header';

function App() {
  const [videos,setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos/?key=\nAIzaSyCn6zHwluvRmlGmdiyyM-xSHclyeO2CEZ4\n&part=snippet&chart=mostPopular&maxResults=25&key=\nAIzaSyCn6zHwluvRmlGmdiyyM-xSHclyeO2CEZ4\n", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return (
    <div className={styles.app}>
      <Search_header /> 
      <VideoList videos={videos}/>  
    </div>
  );
}

export default App;
