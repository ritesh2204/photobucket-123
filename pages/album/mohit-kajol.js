import Head from "next/head";
import AlbumTitle from "../../components/AlbumTitle";
import ImageContainer from "../../components/ImageContainer";

export default function Albums() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - Albums</title>
      </Head>
      <main className="ms-container">
        {/* <!-- Page Title --> */}
        <AlbumTitle />
        <div className="ms-section__block">
          <div className="row">
            <ImageContainer
              images={[
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176003/Mohit%20X%20Kajol/A_2_yx4igb.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176003/Mohit%20X%20Kajol/A_1_kqyk67.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176003/Mohit%20X%20Kajol/A_4_pp08j1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176003/Mohit%20X%20Kajol/A_5_kswo2r.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176003/Mohit%20X%20Kajol/A_3_icka7p.jpg",
                // <Video 
                // source={{ uri:" https://www.w3schools.com/tags/movie.mp4"}}
                // style={styles.backgroundVideo}
                // rate={1} volume={1} muted={true}
                // repeat={true}
                // resizeMode='cover' key="video1" 
                // />
                
                //  <Video source={{URL:" https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_all"}} />
                 <video width="320" height="240" controls
                 source src="movie.mp4" type="video/mp4"
                 source src="movie.ogg" type="video/ogg">
                 Your browser does not support the video tag.
               </video>
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}