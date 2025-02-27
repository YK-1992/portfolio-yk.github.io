import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { forwardRef } from "react";
import "./projects.css";

const Projects = forwardRef((props, ref) => {
  
  return (
    <section ref={ref} className="section_block">
      <div className="projects-container">
        <div className="proj-title-section">
          <h1 className="gradient-text text-fonts">Portfolio</h1>
          <p>More recent work</p>
        </div>

        <Swiper 
         slidesPerView={1}
         spaceBetween={25}
         loop={true}

         pagination={{
           clickable: true,
         }}
         navigation={true}

        
         modules={[Pagination, Navigation]}
     
         className="mySwiper"
       
        >
          <SwiperSlide>
            {/* Project1 */}
            <div className="project__block project1">
              <div className="img-title">
                <img src="./logo-yks-ervice.png" alt="" className="icon-style" />
                <div className="overlay">
                  <div className="overlay-tex">
                    <h2>YK Services</h2>
                    <div className="create-lang">
                      <p>React </p>
                      <p>Scss</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project__info-block">
                <h3 className="text-st">YK Services</h3>
                <p className="text-st-p">
                  {" "}
                  Welcome to YK Services – your go-to solution 
                  for all home service needs! From professional cleaning
                  and pet care to small repairs and moving support!
                </p>

                <div className="projects-demo">
                  <a href="https://github.com/YK-1992/My-Portfolio/tree/project-Cleaning/Project-Cleaning">
                    {" "}
                    <span>Code</span>{" "}
                    <img src="./github.png" alt="github" className="logo" />{" "}
                  </a>
                  <a href="https://yk-poject-clean.netlify.app/">
                    {" "}
                    <span>Demo</span>{" "}
                    <img src="./link.png" alt="github" className="logo" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Project2 */}

            <div className="project__block project1">
              <div className="img-title">
                <img src="./sushi-app.png" alt="" className="icon-style" />
                <div className="overlay">
                  <div className="overlay-tex">
                    <h2>Sushi-app</h2>
                    <div className="create-lang">
                      <p>React</p>
                      <p>Redux Toolkit</p>
                      <p>MUI</p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="project__info-block">
                <h3 className="text-st">Sushi-app</h3>
                <p className="text-st-p">
                A responsive e-commerce web application for ordering sushi, built with React and Redux Toolkit. The project features a user-friendly interface, a dynamic shopping cart, and seamless state management with Redux Toolkit. Implemented adaptive design for a smooth experience across devices. The app includes product filtering, category selection, 
                and a visually appealing layout. Secure online payments are integrated for a smooth and reliable checkout experience.
                </p>

                <div className="projects-demo">
                  <a href="https://github.com/YK-1992/Sushi-app">
                    {" "}
                    <span>Code</span>{" "}
                    <img src="./github.png" alt="github" className="logo" />{" "}
                  </a>
                  <a href="https://shushi-app.netlify.app/">
                    {" "}
                    <span>Demo</span>{" "}
                    <img src="./link.png" alt="github" className="logo" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Project3 */}

            <div className="project__block project1">
              <div className="img-title">
                <img src="./img3.jpg" alt="" className="icon-style" />
                <div className="overlay">
                  <div className="overlay-tex">
                    <h2>Project 1</h2>
                    <div className="create-lang">
                      <span>React</span>
                      <span>Scss</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project__info-block">
                <h3 className="text-st">Name Project1</h3>
                <p className="text-st-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  eveniet sequi rerum quaerat est similique officia magnam hic
                  exercitationem molestiae accusantium quod architecto delectus
                  necessitatibus illum, recusandae voluptas. Harum, delectus!
                </p>

                <div className="projects-demo">
                  <a href="https://github.com/YK-1992/projectDemo">
                    {" "}
                    <span>Code</span>{" "}
                    <img src="./github.png" alt="github" className="logo" />{" "}
                  </a>
                  <a href="https://github.com/YK-1992/projectDemo">
                    {" "}
                    <span>Demo</span>{" "}
                    <img src="./link.png" alt="github" className="logo" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Project4 */}
            <div className="project__block project1">
              <div className="img-title">
                <img src="./img4.jpg" alt="" className="icon-style" />
                <div className="overlay">
                  <div className="overlay-tex">
                    <h2>Project 1</h2>
                    <div className="create-lang">
                      <p>React</p>
                      <p>Scss</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project__info-block">
                <h3 className="text-st">Name Project1</h3>
                <p className="text-st-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  eveniet sequi rerum quaerat est similique officia magnam hic
                  exercitationem molestiae accusantium quod architecto delectus
                  necessitatibus illum, recusandae voluptas. Harum, delectus!
                </p>

                <div className="projects-demo">
                  <a href="https://github.com/YK-1992/projectDemo">
                    {" "}
                    <span>Code</span>{" "}
                    <img src="./github.png" alt="github" className="logo" />{" "}
                  </a>
                  <a href="https://github.com/YK-1992/projectDemo">
                    {" "}
                    <span>Demo</span>{" "}
                    <img src="./link.png" alt="github" className="logo" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
