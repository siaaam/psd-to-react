import React, { useEffect } from 'react';
import Venobox from 'venobox';
import { Fade } from 'react-reveal';

const Promo = () => {
  useEffect(() => {
    new Venobox({
      autoPlay: false,
      spinner: 'wave',
    });
  }, []);
  return (
    <Fade>
      <section id="video-part" name="video-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 m-auto">
              <div className="video-icon text-center">
                <a
                  className="venobox"
                  data-vbtype="video"
                  href="https://youtu.be/9KqUlIY2Aew"
                >
                  <i className="fab fa-youtube video-i"></i>
                </a>

                <h3>WATCH OUR STORY</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Promo;
