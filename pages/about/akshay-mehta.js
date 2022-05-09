import Head from "next/head";
import Link from "next/link";

export default function AkshayMehtaBlog() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - About</title>
      </Head>
      <main className="ms-container">
        {/* <!-- Page Title --> */}
        <div className="ms-section__block">
          <div className="ms-page-title">
            <h2 className="page-header">who am i?</h2>
            <p className="page-desc">
              Assertively synthesize state of the art testing procedures via
              sticky niches.
            </p>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className="ms-section__block">
          <div id="about" className="row">
            <div className="about__img col-md-12">
              <p>
                <img src="/images/14about.jpg" alt="img" />
              </p>
            </div>
            <div className=" center-block">
              <div className="about__info col-md-8">
                <p>
                  Efficiently morph customer directed internal or "organic"
                  sources before multidisciplinary users. Credibly disseminate
                  resource maximizing human capital before revolutionary
                  e-services. Collaboratively parallel task resource-leveling
                  markets after professional data. Professionally streamline
                  user-centric benefits without scalable strategic theme areas.
                  Interactively develop backward-compatible expertise through
                  high-payoff supply chains.
                </p>
                <p>
                  Professionally exploit value-added methodologies with
                  bleeding-edge leadership. Professionally actualize
                  bleeding-edge partnerships rather than real-time testing
                  procedures. Continually maintain state of the art "outside the
                  box" thinking and sustainable services. Distinctively matrix
                  transparent resources for resource sucking technology.
                  Continually benchmark corporate "outside the box" thinking via
                  fully tested mindshare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
