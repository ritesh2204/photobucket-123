import React from 'react';
import { Container } from 'react-grid';

const BlogDetails = () => {
  return (
    <Container style={{ paddingTop: 100 }}>
      <h2 style={{ width: '15em' }}>
        Customizing your brand and design settings
      </h2>
      <img
        src='https://static.ghost.org/v4.0.0/images/publishing-options.png'
        style={{ height: '60vh' }}
      />
      <p style={myStyles.paraStyles}>
        As discussed in the introduction post, one of the best things about
        Ghost is just how much you can customize to turn your site into
        something unique. Everything about your layout and design can be
        changed, so you're not stuck with yet another clone of a social network
        profile.
      </p>
      <p style={myStyles.paraStyles}>
        How far you want to go with customization is completely up to you,
        there's no right or wrong approach! The majority of people use one of
        Ghost's built-in themes to get started, and then progress to something
        more bespoke later on as their site grows.
      </p>

      <p style={myStyles.paraStyles}>
        The best way to get started is with Ghost's branding settings, where you
        can set up colors, images and logos to fit with your brand.
      </p>
    </Container>
  );
};

const myStyles = {
  paraStyles: {
    fontSize: '1.5rem',
  },
};

export default BlogDetails;
