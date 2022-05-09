import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

export default function BLog2() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - Blog</title>
      </Head>
      <main className="ms-container">
        {/* <!-- Page Title --> */}
        <div className="ms-section__block">
          <div className="ms-page-title">
            <h2 className="page-header">BLOG-2</h2>
            <div className="post-item__date">11/11/2017</div>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className="ms-section__block">
          <div id="ms-blog-post" className="row">
            <div className="col-md-8">
              <img src="/images/bsp.jpg" alt="img" />
              <br />
              <blockquote>
                “You don’t need to be a font savant, or be a Creative Cloud
                wizard, or even have a degree in design in order to be a highly
                effective product designer.”
              </blockquote>
              <p>
                Holisticly orchestrate extensible infrastructures without
                error-free{" "}
                <a href="#" title="link">
                  e-commerce
                </a>
                . Authoritatively streamline inexpensive bandwidth for timely
                convergence. Credibly foster superior imperatives without
                parallel opportunities. Assertively visualize real-time supply
                chains before technically sound metrics. Monotonectally
                architect collaborative resources and superior technology.
              </p>
              <p>
                Phosfluorescently facilitate alternative e-commerce rather than
                turnkey ideas. Collaboratively synergize superior best practices
                with scalable e-business. Uniquely disseminate{" "}
                <a href="#" title="link">
                  B2C
                </a>{" "}
                collaboration and idea-sharing without end-to-end ROI.
                Interactively synergize fully researched e-business vis-a-vis
                multifunctional "outside the box" thinking. Intrinsicly
                myocardinate corporate functionalities vis-a-vis efficient
                schemas.
              </p>
              <br />
              <div className="ms-section__block center-block align-center">
                <h6>Share</h6>
                <ul className="socials share-links">
                  <li>
                    <a href="#" className="socicon-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="socicon-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="socicon-instagram"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ms-right-sidebar col-md-4">
              <div className="col-md-12">
                <h5>latest posts</h5>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">
                    <h6 className="post-item__title">
                      9 Ridiculous Rules About photo
                    </h6>
                    <div className="post-item__date">11/11/2017</div>
                  </a>
                </Link>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">
                    <h6 className="post-item__title">
                      What Zombies Can Teach You About photo
                    </h6>
                    <div className="post-item__date">11/11/2017</div>
                  </a>
                </Link>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">
                    <h6 className="post-item__title">
                      Don't Just Sit There! Start experiment
                    </h6>
                    <div className="post-item__date">11/11/2017</div>
                  </a>
                </Link>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">
                    <h6 className="post-item__title">
                      What Can Instagramm Teach You About like
                    </h6>
                    <div className="post-item__date">11/11/2017</div>
                  </a>
                </Link>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">
                    <h6 className="post-item__title">
                      Find A Quick Way To love
                    </h6>
                    <div className="post-item__date">11/11/2017</div>
                  </a>
                </Link>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">
                    <h6 className="post-item__title">
                      The Lazy Man's Guide To like
                    </h6>
                    <div className="post-item__date">11/11/2017</div>
                  </a>
                </Link>
              </div>
              <div className="col-md-12">
                <Link href="/blog/blog-single-page">
                  <a data-type="page-transition">View All</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
