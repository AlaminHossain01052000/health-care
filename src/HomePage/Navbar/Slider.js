// import React from 'react';

// const Slider = () => {
//     return (
//         <div id="carouselExampleDark" class="carousel carousel-dark slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="10000">
//       <img src="/assets/images/chair.jpg" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//       <img src="/assets/images/chair.jpg" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="/assets/images/chair.jpg" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     );
// };

// export default Slider;
import React from 'react';
import './Slider.css'
const Slider = () => {
  return (
    <div className='container d-flex my-5'>
      <div className='my-5'></div>
      <div className='row'>
        <div className='col-6'>
          <video width="600" height="400" controls>

            <source src="/assets/home-video.mp4" type="video/mp4" />

          </video>
        </div>
        <div className='col-6 mt-5 slider-bg-image-container'>
          <h1>Our Vision</h1>
          <h6 style={{textAlign:'justify',lineHeight:1.5}} className='mt-4'>
            At Prime Health Care, our vision is to be a beacon of health and wellness, fostering a community where every individual experiences personalized and compassionate care. We aspire to create a space where preventive healthcare is not just a service but a way of life. Our commitment extends beyond treating illnesses; we aim to empower individuals to lead healthy lives through comprehensive and accessible healthcare services. Together, we envision a future where everyone enjoys a high quality of life, supported by a dedicated team of medical professionals.
          </h6>
        </div>


      </div>

    </div>
  );
};

export default Slider;