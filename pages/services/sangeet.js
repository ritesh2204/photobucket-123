import Head from 'next/head'
import Link from 'next/link'

export default function Sangeet() {
  return (<>
  <Head>
    <title>Akshay Mehta - Sangeet</title> 
  </Head>
  <body>
      <main className="ms-container">
        {/* <!-- Page Title --> */}
        <div className="ms-section__block">
          <div className="ms-page-title">
            <h2 className="page-header">With Charleen</h2>
            <p className="page-desc">Conveniently fashion global intellectual capital whereas front-end strategic theme areas.</p>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className="ms-section__block">
          <div id="gallery">
            <img alt="image 2" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/bcabe753001729.59248241d5973.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/bcabe753001729.59248241d5973.jpg" data-description="image placeholder"/>
            <img alt="image 6" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2c27c153001729.59248241d41dc.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2c27c153001729.59248241d41dc.jpg" data-description="image placeholder"/>
            <img alt="image 2" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e38eaa53001729.59248241d525e.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e38eaa53001729.59248241d525e.jpg" data-description="image placeholder"/>
            <img alt="image 3" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9cb5b453001729.59248241d6716.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9cb5b453001729.59248241d6716.jpg" data-description="image placeholder"/>
            <img alt="image 4" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2f27f953001729.59248241d457b.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2f27f953001729.59248241d457b.jpg" data-description="image placeholder"/>
            <img alt="image 5" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d479cc53001729.59248241d5d18.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d479cc53001729.59248241d5d18.jpg" data-description="image placeholder"/>
            <img alt="image 7" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c5274053001729.59248241d603d.jpg" data-image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c5274053001729.59248241d603d.jpg" data-description="image placeholder"/>
          </div>
        </div>
        <div className="ms-section__block center-block">
          <a href="#" className="ms-button" data-title="load more" data-type="page-transition">load more</a>
        </div>
      </main>
      </body>
</>)
};