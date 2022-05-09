import Head from 'next/head';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <Head>
        {' '}
        <meta charSet='utf-8' />
      </Head>
      <header className='ms-header'>
        <nav className='ms-nav'>
          <div className='ms-logo'>
            <Link href='/'>
              <a data-type='page-transition'>
                <div className='logo-dark current'>
                  <img src='/logo-dark.png' alt='logo image' />
                </div>
                <div className='logo-light '>
                  <img src='/logo-light.png' alt='logo image' />
                </div>
              </a>
            </Link>
          </div>
          <button className='hamburger' type='button' data-toggle='navigation'>
            <span className='hamburger-box'>
              <span className='hamburger-label'>menu</span>
              <span className='hamburger-inner'></span>
            </span>
          </button>
          <div className='height-full-viewport'>
            <ul className='ms-navbar'>
              <li className='nav-item'>
                <Link href='/'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>home</span>
                    <span className='nav-item__label'>Back to main</span>
                  </a>
                </Link>
              </li>

              <li className='nav-item'>
                <Link href='/gallery'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>gallery</span>
                    <span className='nav-item__label'>
                      Discover fascinating stories
                    </span>
                  </a>
                </Link>
              </li>

              <li className='nav-item'>
                <Link href='/album'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>albums</span>
                    <span className='nav-item__label'>View all work</span>
                  </a>
                </Link>
              </li>

              <li className='nav-item'>
                <Link href='/about'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>about</span>
                    <span className='nav-item__label'>Know Photobucket</span>
                  </a>
                </Link>
              </li>

              <li className='nav-item'>
                <Link href='/services'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>services</span>
                    <span className='nav-item__label'>What we Offer</span>
                  </a>
                </Link>
              </li>

              <li className='nav-item'>
                <Link href='/blog/blog-home'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>Blogs</span>
                    <span className='nav-item__label'>
                      Latest blogs about photography
                    </span>
                  </a>
                </Link>
              </li>

              <li className='nav-item'>
                <Link href='/contact'>
                  <a data-type='page-transition'>
                    <span className='ms-btn'>contact</span>
                    <span className='nav-item__label'>
                      Get in touch with us
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
