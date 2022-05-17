import React from 'react';
import Slider from 'react-slick';
import Typed from 'react-typed';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const typedString = [
    'Complete Graphics Designer',
    'Complete Front End Developer',
    'Complete Back End Developer',
    'Complete javascript Developer',
  ];

  const options = {
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 500,
    // backspacing speed
    backSpeed: 50,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 100,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: '|',
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  };
  return (
    <section id="banner-part" name="banner-part">
      <div className="container">
        <div className="row banner-slider">
          <Slider {...settings}>
            <div className="col-lg-10 m-auto">
              <div className="banner-text text-center">
                <h2>
                  We Are{' '}
                  <span className="typed">
                    <Typed strings={typedString} {...options} />
                  </span>
                </h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="#">LEARN MORE</a>
              </div>
            </div>
            <div className="col-lg-10 m-auto">
              <div className="banner-text text-center">
                <h2>Complete Front End development</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="#">LEARN MORE</a>
              </div>
            </div>
            <div className="col-lg-10 m-auto">
              <div className="banner-text text-center">
                <h2>Complete back End development</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="#">LEARN MORE</a>
              </div>
            </div>
            <div className="col-lg-10 m-auto">
              <div className="banner-text text-center">
                <h2>Complete Ghraphics Design</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="#">LEARN MORE</a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Home;
