import Head from 'next/head';
import ImageContainer from '../components/ImageContainer';
import client from '../utils/client';

export async function getServerSideProps() {
  const res = await client.getEntries({
    content_type: 'gallery',
  });

  return {
    props: {
      gallerys: res.items,
    },
  };
}

export default function Gallery({ gallerys }) {
  console.log('This is the gallery >>>>>', gallerys);
  return (
    <>
      <Head>
        <title>Akshay Mehta - Gallery</title>
      </Head>
      <main className='ms-container'>
        {/* <!-- Page Title --> */}
        <div className='ms-section__block'>
          <div className='ms-page-title'>
            <h2 className='page-header'>Gallery</h2>
            <p className='page-desc'>
              Conveniently fashion global intellectual capital whereas front-end
              strategic theme areas.
            </p>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className='ms-section__block'>
          <div>
            <div className='row'>
              <ImageContainer
                gallerys={gallerys}
                images={[
                  '/images/dummy-images/dm1.JPG',
                  '/images/portfolio/abhinayAkansha/a7.JPG',
                  '/images/portfolio/abhishekVasavi/av4.JPG',
                  '/images/portfolio/sagarAditi/sa22.JPG',
                  '/images/portfolio/abhinayAkansha/a8.JPG',
                  '/images/portfolio/akashSonal/as1.JPG',
                  '/images/portfolio/sagarAditi/sa7.JPG',
                  '/images/portfolio/shubhamMeer/sm3.JPG',
                  '/images/dummy-images/dm3.jpg',
                  '/images/dummy-images/dm4.jpg',
                  '/images/dummy-images/dm5.JPG',
                ]}
              />
            </div>
          </div>
        </div>
        {/* <div className="ms-section__block center-block">
          <a
            href="#"
            className="ms-button"
            data-title="load more"
            data-type="page-transition"
          >
            load more
          </a>
        </div> */}
      </main>
    </>
  );
}
