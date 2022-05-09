import Head from 'next/head'
import Link from 'next/link'

export default function BLog() {
  return (<>
    <Head>
      <title>Akshay Mehta - Blog</title>
    </Head>
    <main className="ms-container">
      {/* <!-- Page Title --> */}
      <div className="ms-section__block">
        <div className="ms-page-title">
          <h2 className="page-header">Discover fascinating stories</h2>
          <p className="page-desc">Progressively create resource maximizing convergence and functional alignments. </p>
        </div>
      </div>
      {/* <!-- Page Content --> */}
      <div className="ms-section__block">
        <div id="blog" className="row">
          {/* <!-- Post Item --> */}
          <div className="post-item col-lg-6 col-md-12">
            <Link href="/blog/blog-single-page"><a data-type="page-transition">
              <div className="post-item__img">
                <img src="\images\10b.jpg" alt="img" />
              </div>
              <div className="post-item__info">
                <h5 className="post-item__title">Cinematic New York</h5>
                <div className="post-item__date">11/11/2017</div>
                <div className="post-item__link">read more</div>
              </div>
            </a>
            </Link>
          </div>
          {/* <!-- Post Item --> */}
          <div className="post-item col-lg-6 col-md-12">
            <Link href="/blog/blog2"><a data-type="page-transition">
              <div className="post-item__img">
                <img src="\images\13b.jpg" alt="img" />
              </div>
              <div className="post-item__info">
                <h5 className="post-item__title">Tōkyō desu</h5>
                <div className="post-item__date">11/11/2017</div>
                <div className="post-item__link">read more</div>
              </div>
            </a>
            </Link>
          </div>
          {/* <!-- Post Item --> */}
          <div className="post-item col-lg-6 col-md-12">
            <Link href="/blog/blog3"><a data-type="page-transition">
              <div className="post-item__img">
                <img src="\images\12b.jpg" alt="img" />
              </div>
              <div className="post-item__info">
                <h5 className="post-item__title">Under Armour | Bryce Harper</h5>
                <div className="post-item__date">11/11/2017</div>
                <div className="post-item__link">read more</div>
              </div>
            </a>
            </Link>
          </div>
          {/* <!-- Post Item --> */}
          <div className="post-item col-lg-6 col-md-12">
            <Link href="/blog/blog4"><a data-type="page-transition">
              <div className="post-item__img">
                <img src="\images\11b.jpg" alt="img" />
              </div>
              <div className="post-item__info">
                <h5 className="post-item__title">Soldiers of Somalia</h5>
                <div className="post-item__date">11/11/2017</div>
                <div className="post-item__link">read more</div>
              </div>
            </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="ms-section__block center-block">
        <a href="#" className="ms-button" data-title="load more" data-type="page-transition">load more</a>
      </div>
    </main>
  </>)
}