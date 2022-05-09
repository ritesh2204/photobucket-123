import Head from 'next/head';
import { Container } from 'react-grid';

export default function Wedding() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - Wedding</title>
      </Head>
      <main className='ms-container'>
        {/* <!-- Page Title --> */}
        <div className='ms-section__block'>
          <div className='ms-page-title'>
            <h2 className='page-header'>Wedding</h2>
            <p className='page-desc'>
              `` Conveniently fashion global intellectual capital whereas
              front-end strategic theme areas.
            </p>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className='ms-section__block'></div>
        <div className=''>
          <Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src='https://cdn0.weddingwire.in/articles/images/9/0/8/6/img_16809/t30_creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpg'
                style={{ width: '70%' }}
              />
            </div>
            <div>
              <p>Before any wedding, there’s a love story to be told…</p>
              <p>
                Use this unique service as an opportunity to capture your youth,
                passion and love’s beauty on film…
              </p>
              <p>
                The photos that get out of a “love story” photoshoots are
                usually touching, funny and very charming…
              </p>
              <p>
                I can tell, as throughout my experience as a wedding
                photographer, I’ve done hundreds of those. What I always saw, is
                that each single couple is absolutely unique.
              </p>
              <p>
                This makes it even more special and meaningful to capture both
                of yours uniqueness on camera!
              </p>
              <p>
                Also, as the “love story” photo shoot is usually followed by a
                priorly planned wedding, it can serve as an amazing romantic
                stepping stone before that big day comes…
              </p>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
