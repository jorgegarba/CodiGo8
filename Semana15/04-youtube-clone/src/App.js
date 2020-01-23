import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";

//1. crear la funcion de componente
let App = () => {
  //2. crear las variables y funciones que necesito en el useState
  let [videos, setVideos] = useState([]);
  let [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm){
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAMIXgt_LqwDp2YlS17ccVNG0kVvK37nsw",
        q: searchTerm
      }
    });
    console.log(response)
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  }

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

//-----------------------------------------
// class App extends React.Component {
//   state = {
//     videos: [],
//     selectedVideo: null
//   };

//   handleSubmit = async searchTerm => {
//     const response = await youtube.get("search", {
//       params: {
//         part: "snippet",
//         maxResults: 5,
//         key: "AIzaSyAMIXgt_LqwDp2YlS17ccVNG0kVvK37nsw",
//         q: searchTerm
//       }
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//     });
//   };

//   onVideoSelect = video => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     const { selectedVideo, videos } = this.state;

//     return (
//       <Grid style={{ justifyContent: "center" }} container spacing={10}>
//         <Grid item xs={11}>
//           <Grid container spacing={10}>
//             <Grid item xs={12}>
//               <SearchBar onFormSubmit={this.handleSubmit} />
//             </Grid>
//             <Grid item xs={8}>
//               <VideoDetail video={selectedVideo} />
//             </Grid>
//             <Grid item xs={4}>
//               <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }

// export default App;
