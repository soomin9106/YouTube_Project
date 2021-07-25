import React,{useState,useEffect,useCallback} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';


function App({ youtube }) {
  const [videos,setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] =useState(null);
  let [themeMode, setThemeMode]=useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(query => {
    setSelectedVideo(null);
 
    youtube
    .search(query)
    .then(videos => 
     setVideos(videos));
   },[youtube]);


  const darkMode = () => {
    themeMode = styles.dark;
    setThemeMode(themeMode);
  }

  const ligthMode = () => {
    themeMode = styles.light;
    setThemeMode(themeMode);
  }
  
  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[youtube]);

  return (
    <Router>
      <Switch>
       <Route path='/' exact>
        <div className={`${styles.app} ${themeMode}`}>
          <SearchHeader onSearch={search} onDark={darkMode} onLight={ligthMode} /> 
          <section className={styles.content}>
            <div className={styles.list}><VideoList videos={videos} onVideoClick={selectVideo} display={'grid'}/></div>
          </section>
        </div>
       </Route>
       <Route path="/detail">
        <div className={`${styles.app} ${themeMode}`}>
          <SearchHeader onSearch={search} onDark={darkMode} onLight={ligthMode} /> 
          <section className={styles.content}>
            {selectedVideo && <div className={styles.detail}>{<VideoDetail video={selectedVideo}/>}</div>}
            <div className={styles.list}><VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list':'grid'}/></div>
          </section>
        </div>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
