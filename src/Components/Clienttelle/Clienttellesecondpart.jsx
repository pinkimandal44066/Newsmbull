import { useEffect } from "react";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const HeroSection = () => {

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: false,     // Trigger animation every time section comes into view
      offset: 200,     // Offset when the animation triggers (adjust as needed)
    });
  }, []);

  return (
    <section  className="bg-gradient-to-br 
   
    from-[#a6c465] 
    via-[#ffb74d] 
    via-[#ffd54f] 
     
    
    to-black    text-white flex flex-col md:flex-row p-10"
    data-aos="zoom-in">
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-10">
        
        {/* Left side content (text with zoom-in-up effect) */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8"
          data-aos="zoom-in-up"  // AOS zoom-in-up animation for text
          data-aos-duration="1000" // Duration for the zoom effect
          data-aos-once="false"    // Animation triggers every time when scrolled into view
        >
          <h2 className="text-4xl font-bold mb-4">Revolutionize Your Business</h2>
          <p className="text-lg mb-6">
            Empower your business with cutting-edge digital solutions that
            guarantee enhanced productivity and efficiency.
          </p>

          <div className="container mx-auto p-4 text-center">
            <p className="lg:text-lg sm:text-md text-sm mb-6">
              Experience the transformative results achieved by our esteemed
              clientele, who have harnessed the power of influencer marketing to
              elevate their brands. Whether you're aiming for increased
              visibility, authentic engagement, or market expansion, our clients
              are testament to what's possible with the right strategy.
            </p>
            <ul className="list-disc text-left mx-auto lg:w-2/3 md:w-3/4 sm:w-full text-md">
              <li className="mb-2">
                <span className="font-bold">Diverse Industries:</span> Our
                clientele spans fashion, tech, lifestyle, and more—each benefiting
                from campaigns tailored to their unique audiences.
              </li>
              <li className="mb-2">
                <span className="font-bold">Global Reach:</span> We've helped both
                emerging brands and industry leaders connect with millions
                worldwide, amplifying their message beyond expectations.
              </li>
              <li className="mb-2">
                <span className="font-bold">Proven Success:</span> Through our
                collaborations, clients have seen remarkable growth in brand
                loyalty and engagement, consistently surpassing their goals.
              </li>
            </ul>
          </div>
        </div>

        {/* Right side image with zoom-in-up effect */}
        <div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          data-aos="zoom-in-up"  // AOS zoom-in-up animation for image
          data-aos-duration="1000" // Duration for zoom effect
          data-aos-once="false"    // Animation triggers every time when scrolled into view
        >
          <img
            src="https://img.freepik.com/free-photo/business-people-working-together_23-2148889161.jpg?size=626&ext=jpg"
            alt="Product"
            className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
