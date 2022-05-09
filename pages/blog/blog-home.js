import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-grid';
// import blogPosts from '../../utils/blogPosts';
import client from '../../utils/client';

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: 'blogsPost',
  });

  return {
    props: {
      blogs: res.items,
    },
  };
}

const BlogHeader = () => {
  return (
    <div className='background_gradient' style={myStyles.blogHeaderStyle}>
      <h3 style={{ color: '#fff', fontSize: '3.2rem' }}>Photobucket Blog</h3>
    </div>
  );
};

const SinglePost = () => {
  return (
    <Container>
      <Row style={{ marginTop: 38 }}>
        <Col md={6}>
          <Link href='/blog/blog-details'>
            <img
              src='https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg'
              alt='blog'
              style={myStyles.border}
            />
          </Link>
        </Col>
        <Col md={6}>
          <Link href='/blog/blog-details'>
            <h3
              style={{
                fontWeight: 'bold',
                color: '#15171a',
                cursor: 'pointer',
              }}
            >
              Welcome to Photobucket
            </h3>
          </Link>
          <p style={myStyles.paraStyle}>
            The emergence and growth of blogs in the late 1990s coincided with
            the advent of web publishing tools that facilitated the posting of
            content by non-technical users who did not have much experience with
            HTML or computer programming.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

const MultiplePosts = ({ blogs }) => {
  console.log('blogs >>>>', blogs);

  return (
    <Container>
      <Row style={{ marginTop: 48 }}>
        {blogs?.map((blog, i) => {
          // console.log('data >>>>>', data);
          const img_url = 'https:' + blog.fields.postImg.fields.file.url;

          return (
            <Col md={4} key={i} style={{ marginBottom: 30 }}>
              <img src={img_url} alt='blog_post_img' style={myStyles.border} />
              <h5 style={myStyles.paraTitle}>{blog.fields.title}</h5>
              <p style={{ color: 'gray' }}>
                {blog.fields.postImg.fields.description.substring(0, 100)}
              </p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const BlogHome = ({ blogs }) => {
  return (
    <>
      <BlogHeader />
      <SinglePost />
      <hr style={myStyles.hrLine} />
      <MultiplePosts blogs={blogs} />
    </>
  );
};

const myStyles = {
  blogHeaderStyle: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    backgroundImage: 'linear-gradient(90deg, "Ghostwhite", #000)',
    height: '20vh',
    alignItems: 'center',
  },
  paraStyle: {
    color: 'grey',
    // border: '1px solid red',
  },
  border: {
    borderRadius: 6,
    cursor: 'pointer',
  },
  hrLine: {
    width: '60%',
    marginTop: 38,
    border: '1px solid #F4F4F6',
  },
  paraTitle: {
    marginTop: 10,
    color: '#15171a',
  },
};

export default BlogHome;
