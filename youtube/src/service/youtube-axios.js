import axios from 'axios';

class Youtube {
    constructor(keys) {
        this.youtube=axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params:{key: keys},
        });
    }

    async mostPopular() {
        const response = await this.youtube.get('videos',{
            params: {
                part : 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;
       
    }

    async search(query) {
        const response = await this.youtube.get('search',{
            params: {
                part : 'snippet',
                maxResults: 25,
                type:'video',
                q: query,
            },
        });
        return response.data.items;
    }
}

export default Youtube;