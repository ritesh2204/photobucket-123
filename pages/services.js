import React, { useState } from 'react';
import Head from 'next/head';
import ServicesBox from '../components/ServicesBox';
import { Container, Row, Col } from 'react-grid';
import ContactForm from '../components/ContactForm';
import client from '../utils/client';

const serviceData = [
  {
    id: 1,
    imgPath:
      'https://ld-wp73.template-help.com/wordpress/prod_437/v2/wp-content/uploads/elementor/thumbs/services02-orjbdsrg280cbd0o7akrr5jn6yp01tntmbt3oqvsgk.jpg',
    label: 'Wedding Photography',
    description:
      'Obviously, as for a wedding photographer, this type of events is my major specialization..',
    route: 'services/wedding',
  },
  {
    id: 2,
    imgPath:
      'https://ld-wp73.template-help.com/wordpress/prod_437/v2/wp-content/uploads/elementor/thumbs/ladyinmiror-orjbdsrg280cbd0o7akrr5jn6yp01tntmbt3oqvsgk.jpg',
    label: 'Pre Wedding',
    description:
      'Capture the magic of any pre-nuptial or engagement dinner’s occasion, using my argus-eyed camera!',
    route: 'services/pre-wedding',
  },
  {
    id: 3,
    imgPath:
      'https://ld-wp73.template-help.com/wordpress/prod_437/v2/wp-content/uploads/elementor/thumbs/services04-orjbdsrg280cbd0o7akrr5jn6yp01tntmbt3oqvsgk.jpg',
    label: 'Destination',
    description:
      'There’s nothing nicer than having a lot of beautiful, elegant and tasteful portaits of yourself, instantly printed!',
    route: 'services/destination',
  },
];

export async function getServerSideProps() {
  const res = await client.getEntries({
    content_type: 'services',
  });

  return {
    props: {
      services: res.items,
    },
  };
}

export default function Services({ services }) {
  console.log('This is the services >>>>', services);
  return (
    <>
      <Head>
        <title>Akshay Mehta Services</title>
      </Head>
      <main>
        {/* <!-- Page Title --> */}
        <div className='ms-section__block'>
          <div className='ms-page-title'>
            <h2 className='page-header'>Services</h2>
            {/* <p className="page-desc">
              {" "}
              If you have created your blog to promote your business, you’ll
              want to make sure that there’s a page that details the goods and
              services that you sell. Alternatively, if you already have a
              website for your business, you can provide a link to it in your
              menu. A blog is a low-cost, low-risk way to invite readers into
              your world and begin a conversation with your company. 68% of
              consumers are likely to spend time reading content produced by a
              company they are interested in.
            </p> */}
          </div>
        </div>
        {/* <!-- Page Content --> */}
        <Container>
          <Row style={{ paddingBottom: 60 }}>
            <Col md={6}>
              <h2>Photography for any occasion</h2>
              <p>
                …the sweetest memories captured on film! Besides doing
                straightforward wedding photography, we also offer a number of
                additional services, such as: – Engagements photography – Beauty
                portraits – Family portraits – Love Stories – Baby Showers
              </p>
              <p>
                So feel free to choose whatever your current occasion is and
                please book my services in advance
              </p>
            </Col>
            <Col md={6}>
              <img
                src='https://ld-wp73.template-help.com/wordpress/prod_437/v2/wp-content/uploads/2020/02/services01-1.jpg'
                alt='wedding'
              />
            </Col>
          </Row>

          <Row>
            {/* <Col md={4}>hello</Col>
            <Col md={4}>world</Col>
            <Col md={4}>ajaklkafla</Col> */}
            {services?.map((service, i) => {
              return <ServicesBox data={service} key={i} />;
            })}
          </Row>
        </Container>

        {/* Service booking form  */}
        <div style={{ backgroundColor: '#FBF8EE', padding: '20px 40px' }}>
          <Container>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p style={{ textAlign: 'center', fontSize: '2.4rem' }}>
                Check available booking dates
              </p>

              <img
                src='https://ld-wp73.template-help.com/wordpress/prod_437/v2/wp-content/uploads/2020/02/home20.png'
                alt='floral'
                style={{
                  width: '30%',
                  margin: '0 auto',
                }}
              />
            </div>
            <Row>
              <Col md={6}>
                <p>
                  <strong>
                    As I am the only photographer working in the studio, I have
                    to evaluate all my ordeals beforehand.
                  </strong>
                </p>

                <p>
                  I will appreciate as many details about your particular
                  wedding venue, dates, theme and other aspects, as you’d be
                  willing to share. As soon as I review the booking information,
                  I will be giving you my feedback immediately!
                </p>
              </Col>

              <Col md={6}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </div>
        {/* end  */}
        {/* service bloclk end  */}

        <div className='ms-section__block'></div>
      </main>
    </>
  );
}

// const serviceStyles = {
//   dFlex: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // alignItems: "center",
//     flexWrap: 'wrap',
//   },

//   serviceImg: {
//     width: '30%',
//   },
// };
