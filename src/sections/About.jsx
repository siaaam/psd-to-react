import React from 'react';
import styled from 'styled-components';
import SectionWrapper from './styles/SectionIntro';

const Wrapper = styled(SectionWrapper)`
  a {
    border: 1px solid#00e0d0;
    color: #00e0d0;
    padding: 16px 30px;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
    &:hover {
      background: red;
      color: white;
    }
  }
  @media screen and (max-width: 992px) {
    img {
      display: none;
    }
  }
`;

const About = () => {
  return (
    <Wrapper id="about-part" name="about-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-img text-center">
              <img
                src="img/big-logo.png"
                alt="image not found"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-text">
              <h2>
                OUR STORY <span>hi</span>
              </h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus
              </p>
              <p>
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. className aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
