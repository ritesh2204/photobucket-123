import React from 'react';
import Link from 'next/link';
import { Col } from 'react-grid';

const Services = ({ data }) => {
  const img_url = 'https:' + data.fields.servicesImg.fields.file.url;
  return (
    <Col md={4} style={{ padding: 10 }}>
      {/* <a href={`${route}`} style={{ color: '#000' }}> */}
      <img
        src={img_url}
        alt='wedding_img'
        style={serviceStyle.servicesImg}
        // onClick={onClick}
      />
      <p style={serviceStyle.label}>{data.fields.title}</p>
      <span style={serviceStyle.desc}>
        {data.fields.servicesImg.fields.description}
      </span>
      {/* </a> */}
    </Col>
  );
};

const serviceStyle = {
  label: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  servicesImg: {
    width: '95%',
    borderRadius: 5,
  },
  desc: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: 'grey',
  },
};

export default Services;
