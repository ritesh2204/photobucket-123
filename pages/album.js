import Head from 'next/head';
import Link from 'next/link';

export default function Album() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - Album</title>
      </Head>
      <main className='ms-container'>
        {/* page title  -------------------*/}
        <div className='ms-section__block'>
          <div className='ms-page-title'>
            <h2 className='page-header'>THE PORTFOLIO</h2>
            <p className='page-desc'>
              Assertively synthesize state of the art testing procedures via
              sticky niches.
            </p>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className='ms-section__block'>
          <div id='album'>
            <div className='row'>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='2'>
                <Link href='/album/shubham-veer'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Shubham <span>&</span> Veer
                      </h5>
                    </div>
                    <div className='album-item__img1'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='2'>
                <Link href='/album/sagar-aditi'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Sagar <span>&</span> Aditi
                      </h5>
                    </div>
                    <div className='album-item__img2'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='3'>
                <Link href='/album/akash-sonal'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Akash <span>&</span>Sonal
                      </h5>
                    </div>
                    <div className='album-item__img3'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/abhishek-vasavi'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Abhishek<span>&</span>Vasavi
                      </h5>
                    </div>
                    <div className='album-item__img4'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/abhinay-akansha'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Abhinay<span>&</span>Akansha
                      </h5>
                    </div>
                    <div className='album-item__img5'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/mohit-kajol'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Mohit<span>&</span>Kajol
                      </h5>
                    </div>
                    <div className='album-item__img6'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/un-known'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        un<span>&</span>Known
                      </h5>
                    </div>
                    <div className='album-item__img7'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/aashish-alison'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Aashish<span>&</span>Alison
                      </h5>
                    </div>
                    <div className='album-item__img8'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/aashish'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>Aashish</h5>
                    </div>
                    <div className='album-item__img9'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/abhishek-preeti'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Abhishek<span>&</span>Preeti
                      </h5>
                    </div>
                    <div className='album-item__img10'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/arpit-aditi'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Arpit<span>&</span>Aditi
                      </h5>
                    </div>
                    <div className='album-item__img11'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/sidharth-anubha'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Sidharth<span>&</span>Anubha
                      </h5>
                    </div>
                    <div className='album-item__img12'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/akash-akriti'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Akash<span>&</span>Akriti
                      </h5>
                    </div>
                    <div className='album-item__img13'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/rajdip-dipti'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Rajdip<span>&</span>Dipti
                      </h5>
                    </div>
                    <div className='album-item__img14'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/karan-kritika'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Karan<span>&</span>Kritika
                      </h5>
                    </div>
                    <div className='album-item__img15'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/nilesh-kshiti'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Nilesh<span>&</span>Kshiti
                      </h5>
                    </div>
                    <div className='album-item__img16'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/moksh'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>Moksh</h5>
                    </div>
                    <div className='album-item__img17'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/neeraj'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>Neeraj</h5>
                    </div>
                    <div className='album-item__img18'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/shrinivas-shweta'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Shrinivas<span>&</span>Shweta
                      </h5>
                    </div>
                    <div className='album-item__img19'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/sonaal'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>Sonaal</h5>
                    </div>
                    <div className='album-item__img20'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/sourabh-sushmita'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Sourabh<span>&</span>Sushmita
                      </h5>
                    </div>
                    <div className='album-item__img21'></div>
                  </a>
                </Link>
              </div>
              {/* <!-- Album item --> */}
              <div className='album-item col-md-4 filtr-item' data-category='4'>
                <Link href='/album/saurabh-srishti'>
                  <a data-type='page-transition'>
                    <div className='album-item__overlay'>
                      <span className='album-item__cover'></span>
                      <h5>
                        Saurabh<span>&</span>Srishti
                      </h5>
                    </div>
                    <div className='album-item__img22'></div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>
        {`
    .img1{
      background-image:url("/images/2a.jpg);
    }
     .img2{
      background-image:url("/images/1a.jpg);
    }
    .img3{
      background-image:url("/images/3a.jpg);
    }
    .img4{
      background-image:url("/images/3a.jpg);
    }
    .img5{
      background-image:url("/images/5a.jpg);
    }
    .img6{
      background-image:url("/images/6a.jpg);
    }
    .img7{
      background-image:url("/images/7a.jpg);
    }
    .img8{
      background-image:url("/images/8a.jpg);
    }  
    .img9{
      background-image:url("/images/9a.jpg);
    }
    `}
      </style>
    </>
  );
}
