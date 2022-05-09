import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - Contact</title>
      </Head>
      <main className='ms-container'>
        {/* <!-- Page Title --> */}
        <div className='ms-section__block'>
          <div className='ms-page-title'>
            <h2 className='page-header'>Let's work together</h2>
            <p className='page-desc'>
              Assertively synthesize state of the art testing procedures via
              sticky niches.
            </p>
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <div className='ms-section__block'>
          <div id='contact' className='row'>
            <div className='col-md-6'>
              <p
                style={{
                  color: '#151515',
                  lineHeight: 1.5,
                  textAlign: 'left',
                  marginTop: 0,
                  marginBottom: 50,
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <div className='row'>
                <div className='col-md-6'>
                  <h6>the office</h6>
                  <p>25 Parker St. London WC2B 5PJ UK</p>
                </div>
                <div className='col-md-6'>
                  <h6>telephone</h6>
                  <p>+44 (0)20 7830 1387</p>
                </div>
                <div className='col-md-6'>
                  <h6>email</h6>
                  <p>test@mail.com</p>
                </div>
                <div className='col-md-6 cont-soc'>
                  <h6>social</h6>
                  <p className='social'>
                    <a
                      href='https://www.google.com'
                      className='socicon-facebook'
                      target='_blank'
                    >
                      <Image
                        src='/images/social/facebook.png'
                        alt='facebook'
                        width={20}
                        height={20}
                      />
                    </a>
                    <a
                      href='https://www.google.com'
                      className='socicon-twitter'
                      target='_blank'
                    >
                      <Image
                        src='/images/social/linkedin.png'
                        alt='linkedin'
                        width={20}
                        height={20}
                      />
                    </a>
                    <a
                      href='https://www.google.com'
                      className='socicon-instagram'
                      target='_blank'
                    >
                      <Image
                        src='/images/social/instagram.png'
                        alt='instagram'
                        width={20}
                        height={20}
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6' style={{ margin: 'auto' }}>
              <h6>Get in touch</h6>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
