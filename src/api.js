import axios from'axios';
const searchImages=async (term) =>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID MDDKosU2NUtP_o9U9877VkEw1C2xtiGltbx2PrjRjkA'
      },
      params: {
        query:term
      }
    })
    return response.data.results;
      }
      export default searchImages;