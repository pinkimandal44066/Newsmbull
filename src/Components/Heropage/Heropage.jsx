// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import blog1 from "../../../public/Images//blog-1.jpg";
// import blog2 from "../../../public/Images//blog-2.jpg";
// import blog3 from "../../../public/Images//blog-3.jpg";
// import blog4 from "../../../public/Images//blog-4.jpg";
// import blog5 from "../../../public/Images//blog-5.jpg";
// import blog6 from "../../../public/Images//blog-6.jpg";
// import blog7 from "../../../public/Images//blog-7.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// export default function App() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {};


//   const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];

//   return (
//     <div className="relative w-full h-screen">
//       <Swiper
//         loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-auto object-cover"
//             />
//             {/* Particles */}
//             {init && (
//               <Particles
//                 id={`tsparticles-${index}`}
//                 particlesLoaded={particlesLoaded}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   zIndex: 10,
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 options={{
//                   fpsLimit: 120,
//                   interactivity: {
//                     events: {
//                       onClick: {
//                         enable: true,
//                         mode: "push",
//                       },
//                       onHover: {
//                         enable: true,
//                         mode: "repulse",
//                       },
//                       resize: true,
//                     },
//                     modes: {
//                       push: {
//                         quantity: 10,
//                       },
//                       repulse: {
//                         distance: 150,
//                         duration: 0.6,
//                       },
//                     },
//                   },
//                   particles: {
//                     color: {
//                       value: ["#ff0081", "#ff8c00", "#00bfff", "#a6c465"],
//                     },
//                     links: {
//                       color: "#ffffff",
//                       distance: 150,
//                       enable: true,
//                       opacity: 0.6,
//                       width: 1.5,
//                     },
//                     move: {
//                       direction: "none",
//                       enable: true,
//                       outModes: {
//                         default: "bounce",
//                       },
//                       random: true,
//                       speed: { min: 1, max: 3 },
//                       straight: false,
//                       bounce: true,
//                     },
//                     number: {
//                       density: {
//                         enable: true,
//                         area: 800,
//                       },
//                       value: 200,
//                     },
//                     opacity: {
//                       value: { min: 0.3, max: 0.7 },
//                       animation: {
//                         enable: true,
//                         speed: 1,
//                         minimumValue: 0.1,
//                       },
//                     },
//                     shape: {
//                       type: ["circle", "triangle"],
//                     },
//                     size: {
//                       value: { min: 3, max: 10 },
//                       animation: {
//                         enable: true,
//                         speed: 3,
//                         sync: false,
//                       },
//                     },
//                     trail: {
//                       enable: true,
//                       length: 10,
//                       width: 2,
//                       color: {
//                         value: "#ffffff",
//                       },
//                     },
//                   },
//                   detectRetina: true,
//                 }}
//               />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

















// done



// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";


// import blog1 from "../../../public/Images/1.jpg";
// import blog2 from "../../../public/Images/2.jpg";
// import blog3 from "../../../public/Images/3.jpg";
// import blog4 from "../../../public/Images/4.jpg";
// import blog5 from "../../../public/Images/5.jpg";
// import blog6 from "../../../public/Images/6.jpg";
// import blog7 from "../../../public/Images/7.jpg";

// export default function ResponsiveSlider() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {};

//   const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];

//   return (
//     <div className="relative w-full ">
//       <Swiper
//         loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover" // Ensuring full width and height on mobile
//             />
//             {/* Particles */}
//             {init && (
//               <Particles
//                 id={`tsparticles-${index}`}
//                 particlesLoaded={particlesLoaded}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   zIndex: 10,
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 options={{
//                   fpsLimit: 120,
//                   interactivity: {
//                     events: {
//                       onClick: {
//                         enable: true,
//                         mode: "push",
//                       },
//                       onHover: {
//                         enable: true,
//                         mode: "repulse",
//                       },
//                       resize: true,
//                     },
//                     modes: {
//                       push: {
//                         quantity: 10,
//                       },
//                       repulse: {
//                         distance: 150,
//                         duration: 0.6,
//                       },
//                     },
//                   },
//                   particles: {
//                     color: {
//                       value: ["#ff0081", "#ff8c00", "#00bfff", "#a6c465"],
//                     },
//                     links: {
//                       color: "#ffffff",
//                       distance: 150,
//                       enable: true,
//                       opacity: 0.6,
//                       width: 1.5,
//                     },
//                     move: {
//                       direction: "none",
//                       enable: true,
//                       outModes: {
//                         default: "bounce",
//                       },
//                       random: true,
//                       speed: { min: 1, max: 3 },
//                       straight: false,
//                       bounce: true,
//                     },
//                     number: {
//                       density: {
//                         enable: true,
//                         area: 800,
//                       },
//                       value: 200,
//                     },
//                     opacity: {
//                       value: { min: 0.3, max: 0.7 },
//                       animation: {
//                         enable: true,
//                         speed: 1,
//                         minimumValue: 0.1,
//                       },
//                     },
//                     shape: {
//                       type: ["circle", "triangle"],
//                     },
//                     size: {
//                       value: { min: 3, max: 10 },
//                       animation: {
//                         enable: true,
//                         speed: 3,
//                         sync: false,
//                       },
//                     },
//                     trail: {
//                       enable: true,
//                       length: 10,
//                       width: 2,
//                       color: {
//                         value: "#ffffff",
//                       },
//                     },
//                   },
//                   detectRetina: true,
//                 }}
//               />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }












// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// // Images
// import blog1 from "../../../public/Images/1.jpg";
// import blog2 from "../../../public/Images/2.jpg";
// import blog3 from "../../../public/Images/3.jpg";
// import blog4 from "../../../public/Images/4.jpg";
// import blog5 from "../../../public/Images/5.jpg";
// import blog6 from "../../../public/Images/6.jpg";
// import blog7 from "../../../public/Images/7.jpg";

// // Slide Content
// const slideContent = [
//   { title: "Slide 1", description: "Description for Slide 1" },
//   { title: "Slide 2", description: "Description for Slide 2" },
//   { title: "Slide 3", description: "Description for Slide 3" },
//   { title: "Slide 4", description: "Description for Slide 4" },
//   { title: "Slide 5", description: "Description for Slide 5" },
//   { title: "Slide 6", description: "Description for Slide 6" },
//   { title: "Slide 7", description: "Description for Slide 7" },
// ];

// export default function ResponsiveSlider() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {};

//   const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];

//   return (
//     <div className="relative w-full">
//       <Swiper
//         loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             {/* Background Image */}
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover"
//             />
//             {/* Transparent Background with Heading and Paragraph */}
//             <div
//               className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4 lg:p-12"
//               style={{ zIndex: 20 }}
//             >
//               <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
//                 {slideContent[index].title}
//               </h2>
//               <p className="text-lg lg:text-2xl">
//                 {slideContent[index].description}
//               </p>
//             </div>
//             {/* Particles */}
//             {init && (
//               <Particles
//                 id={`tsparticles-${index}`}
//                 particlesLoaded={particlesLoaded}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   zIndex: 10,
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 options={{
//                   fpsLimit: 120,
//                   interactivity: {
//                     events: {
//                       onClick: { enable: true, mode: "push" },
//                       onHover: { enable: true, mode: "repulse" },
//                       resize: true,
//                     },
//                     modes: {
//                       push: { quantity: 10 },
//                       repulse: { distance: 150, duration: 0.6 },
//                     },
//                   },
//                   particles: {
//                     color: { value: ["#ff0081", "#ff8c00", "#00bfff", "#a6c465"] },
//                     links: {
//                       color: "#ffffff",
//                       distance: 150,
//                       enable: true,
//                       opacity: 0.6,
//                       width: 1.5,
//                     },
//                     move: {
//                       direction: "none",
//                       enable: true,
//                       outModes: { default: "bounce" },
//                       random: true,
//                       speed: { min: 1, max: 3 },
//                       straight: false,
//                       bounce: true,
//                     },
//                     number: {
//                       density: { enable: true, area: 800 },
//                       value: 200,
//                     },
//                     opacity: {
//                       value: { min: 0.3, max: 0.7 },
//                       animation: {
//                         enable: true,
//                         speed: 1,
//                         minimumValue: 0.1,
//                       },
//                     },
//                     shape: { type: ["circle", "triangle"] },
//                     size: {
//                       value: { min: 3, max: 10 },
//                       animation: { enable: true, speed: 3, sync: false },
//                     },
//                     trail: {
//                       enable: true,
//                       length: 10,
//                       width: 2,
//                       color: { value: "#ffffff" },
//                     },
//                   },
//                   detectRetina: true,
//                 }}
//               />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }








// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// // Images
// import blog1 from "../../../public/Images/1.jpg";
// import blog2 from "../../../public/Images/2.jpg";
// import blog3 from "../../../public/Images/3.jpg";
// import blog4 from "../../../public/Images/4.jpg";
// import blog5 from "../../../public/Images/5.jpg";
// import blog6 from "../../../public/Images/6.jpg";
// import blog7 from "../../../public/Images/7.jpg";

// // Slide Content
// const slideContent = [
//   { title: "Slide 1", description: "Description for Slide 1" },
//   { title: "Slide 2", description: "Description for Slide 2" },
//   { title: "Slide 3", description: "Description for Slide 3" },
//   { title: "Slide 4", description: "Description for Slide 4" },
//   { title: "Slide 5", description: "Description for Slide 5" },
//   { title: "Slide 6", description: "Description for Slide 6" },
//   { title: "Slide 7", description: "Description for Slide 7" },
// ];

// // Different Text Position for Each Slide
// const textPositions = [
//   { top: "43%", left: "30%" },  
//   { top: "45%", left: "60%" },  
//   { top: "35%", left: "59%" },   // Slide 3
//   { top: "40%", left: "30%" },  // Slide 4
//   { top: "40%", left: "30%" },  // Slide 5
//   { top: "45%", left: "60%" },  // Slide 6
//   { top: "40%", left: "70%" },  // Slide 7
// ];

// export default function ResponsiveSlider() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {};

//   const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];

//   return (
//     <div className="relative w-full">
//       <Swiper
//         loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             {/* Background Image */}
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover"
//             />
//             {/* Transparent Background with Heading and Paragraph positioned according to the empty space */}
//             <div
//               className="absolute text-white flex flex-col justify-center items-start p-4 lg:p-12"
//               style={{
//                 zIndex: 20,
//                 top: textPositions[index].top,
//                 left: textPositions[index].left,
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
//                 {slideContent[index].title}
//               </h2>
//               <p className="text-lg lg:text-2xl">
//                 {slideContent[index].description}
//               </p>
//             </div>
//             {/* Particles */}
//             {init && (
//               <Particles
//                 id={`tsparticles-${index}`}
//                 particlesLoaded={particlesLoaded}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   zIndex: 10,
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 options={{
//                   fpsLimit: 120,
//                   interactivity: {
//                     events: {
//                       onClick: { enable: true, mode: "push" },
//                       onHover: { enable: true, mode: "repulse" },
//                       resize: true,
//                     },
//                     modes: {
//                       push: { quantity: 10 },
//                       repulse: { distance: 150, duration: 0.6 },
//                     },
//                   },
//                   particles: {
//                     color: { value: ["#ff0081", "#ff8c00", "#00bfff", "#a6c465"] },
//                     links: {
//                       color: "#ffffff",
//                       distance: 150,
//                       enable: true,
//                       opacity: 0.6,
//                       width: 1.5,
//                     },
//                     move: {
//                       direction: "none",
//                       enable: true,
//                       outModes: { default: "bounce" },
//                       random: true,
//                       speed: { min: 1, max: 3 },
//                       straight: false,
//                       bounce: true,
//                     },
//                     number: {
//                       density: { enable: true, area: 800 },
//                       value: 200,
//                     },
//                     opacity: {
//                       value: { min: 0.3, max: 0.7 },
//                       animation: {
//                         enable: true,
//                         speed: 1,
//                         minimumValue: 0.1,
//                       },
//                     },
//                     shape: { type: ["circle", "triangle"] },
//                     size: {
//                       value: { min: 3, max: 10 },
//                       animation: { enable: true, speed: 3, sync: false },
//                     },
//                     trail: {
//                       enable: true,
//                       length: 10,
//                       width: 2,
//                       color: { value: "#ffffff" },
//                     },
//                   },
//                   detectRetina: true,
//                 }}
//               />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }











import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Images
import blog1 from "../../../public/Images/1.jpg";
import blog2 from "../../../public/Images/2.jpg";
import blog3 from "../../../public/Images/3.jpg";
import blog4 from "../../../public/Images/4.jpg";
import blog5 from "../../../public/Images/5.jpg";
import blog6 from "../../../public/Images/6.jpg";
import blog7 from "../../../public/Images/7.jpg";

// Slide Content
const slideContent = [
  { title: "Slide 1", description: "Description for Slide 1" },
  { title: "Slide 2", description: "Description for Slide 2" },
  { title: "Slide 3", description: "Description for Slide 3" },
  { title: "Slide 4", description: "Description for Slide 4" },
  { title: "Slide 5", description: "Description for Slide 5" },
  { title: "Slide 6", description: "Description for Slide 6" },
  { title: "Slide 7", description: "Description for Slide 7" },
];

export default function ResponsiveSlider() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];

  return (
    <div className="relative w-full">
  <Swiper
    loop
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index} className="relative w-full h-full">
        {/* Background Image */}
        <img
          src={image}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover"
        />

        {/* Transparent Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/30 z-10"></div>

        {/* Text Content */}
        <div
          className={`slide-text text-white z-20`}
          style={{ position: "absolute" }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
            {slideContent[index].title}
          </h2>
          <p className="text-lg lg:text-2xl">
            {slideContent[index].description}
          </p>
        </div>

        {/* Particles */}
        {init && (
          <Particles
            id={`tsparticles-${index}`}
            particlesLoaded={particlesLoaded}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              width: "100%",
              height: "100%",
            }}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  push: { quantity: 10 },
                  repulse: { distance: 150, duration: 0.6 },
                },
              },
              particles: {
                color: { value: ["#ff0081", "#ff8c00", "#00bfff", "#a6c465"] },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.6,
                  width: 1.5,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: true,
                  speed: { min: 1, max: 3 },
                  straight: false,
                  bounce: true,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 200,
                },
                opacity: {
                  value: { min: 0.3, max: 0.7 },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                  },
                },
                shape: { type: ["circle", "triangle"] },
                size: {
                  value: { min: 3, max: 10 },
                  animation: { enable: true, speed: 3, sync: false },
                },
                trail: {
                  enable: true,
                  length: 10,
                  width: 2,
                  color: { value: "#ffffff" },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </SwiperSlide>
    ))}
  </Swiper>

  {/* CSS Media Queries for Responsive Positioning */}
  <style jsx>{`
    .slide-text {
      position: absolute;
      z-index: 20;
      padding: 1rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (min-width: 1024px) {
      .swiper-slide:nth-child(1) .slide-text {
        top: 43%;
        left: 20%;
      }
      .swiper-slide:nth-child(2) .slide-text {
        top: 45%;
        left: 70%;
      }
      .swiper-slide:nth-child(3) .slide-text {
        top: 35%;
        left: 59%;
      }
      .swiper-slide:nth-child(4) .slide-text {
        top: 40%;
        left: 25%;
      }
      .swiper-slide:nth-child(5) .slide-text {
        top: 40%;
        left: 20%;
      }
      .swiper-slide:nth-child(6) .slide-text {
        top: 45%;
        left: 70%;
      }
      .swiper-slide:nth-child(7) .slide-text {
        top: 40%;
        left: 70%;
      }
    }

    @media (max-width: 1024px) and (min-width: 768px) {
      .swiper-slide:nth-child(1) .slide-text {
        top: 40%;
        left: 25%;
      }
      .swiper-slide:nth-child(2) .slide-text {
        top: 43%;
        left: 50%;
      }
      .swiper-slide:nth-child(3) .slide-text {
        top: 37%;
        left: 60%;
      }
      .swiper-slide:nth-child(4) .slide-text {
        top: 45%;
        left: 25%;
      }
      .swiper-slide:nth-child(5) .slide-text {
        top: 40%;
        left: 55%;
      }
      .swiper-slide:nth-child(6) .slide-text {
        top: 45%;
        left: 40%;
      }
      .swiper-slide:nth-child(7) .slide-text {
        top: 43%;
        left: 75%;
      }
    }

    @media (max-width: 768px) {
      .slide-text {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `}</style>
</div>

  );
}