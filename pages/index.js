import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import client from '../utils/client';

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: 'sliders',
  });

  return {
    props: {
      sliders: res.items,
    },
  };
}

export default function Home({ sliders }) {
  console.log('This is the sliders >>>', sliders);

  return (
    <>
      <Head>
        <title>Akshay Mehta</title>
      </Head>
      <main className='ms-container home-slider'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {/* first slide ------------------------------- */}

            {sliders?.map((slider) => {
              const img_url =
                'https:' + slider.fields.sliderImg.fields.file.url;
              return (
                <div
                  className='swiper-slide swiper-slide-active'
                  key={slider.sys.id}
                >
                  <div className='slide-inner' data-swiper-parallax='45%'>
                    <div className='overlay'></div>
                    <div
                      className='slide-inner--image img1 '
                      style={{
                        backgroundImage: `url(${img_url})`,
                      }}
                    />
                    {/* <videoFile/> */}

                    <div className='slide-inner--info'>
                      <h1
                        style={{
                          backgroundColor: '#151515',
                        }}
                      >
                        {slider.fields.sliderText}
                      </h1>
                      <Link href='/gallery'>
                        <a
                          data-type='page-transition'
                          className='ms-btn--slider'
                        >
                          take a look
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* swicth slide ------------------------------- */}

          <div className='swiper-nav-btn'>
            <div className='swiper-button-prev swiper-button-white'>prev</div>
            <div className='swiper-button-next swiper-button-white'>next</div>
          </div>
          <div className='expanded-timeline'>
            <div className='expanded-timeline__counter'>
              <span></span>
              <span></span>
            </div>
            <div className='swiper-pagination'></div>
            <div className='scroll-message'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16.5 15.98'
                className='scroll-svg'
              >
                <title>Asset 1</title>
                <g>
                  <g data-name='Layer 1'>
                    <polygon
                      fill='#fff'
                      points='0 4.64 0.71 5.34 3.85 2.2 3.85 15.98 4.85 15.98 4.85 2.2 8 5.34 8.71 4.64 4.35 0.29 0 4.64'
                    ></polygon>
                    <polygon
                      fill='#fff'
                      points='11.65 0 11.65 13.79 8.5 10.64 7.79 11.35 12.15 15.7 16.5 11.35 15.79 10.64 12.65 13.79 12.65 0 11.65 0'
                    ></polygon>
                  </g>
                </g>
              </svg>
              Scroll
            </div>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .img1 {
            background-image: url('https://res.cloudinary.com/akshaymehta/image/upload/v1637833224/Front%20page/hsp_8939_optimized_sqvhrn.jpg');
          }
          .img2 {
            background-image: url('https://res.cloudinary.com/akshaymehta/image/upload/v1637833223/Front%20page/sukriti-x-rahul-_optimized_csixel.jpg');
          }
          .img3 {
            background-image: url('https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_0100_kfgw95.jpg');
          }
          .img4 {
            background-image: url('https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/DSC_3261_zaoxzu.jpg');
          }
        `}
      </style>
    </>
  );
}
