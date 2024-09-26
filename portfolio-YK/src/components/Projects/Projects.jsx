import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { forwardRef } from 'react';
import './projects.css'


const Projects = forwardRef ((props, ref) => {
        return(
            <section ref={ref} className="section_block" >
                <div className="projects-container">
                    <div className="proj-title-section">
    <h1 className='gradient-text text-fonts'>Portfolio</h1>
    <p >More recent work</p>
                    </div>

                       
                        <Swiper pagination={true} modules={[Pagination]} >

     <SwiperSlide>
   {/* Project1 */}
   <div className="project__block project1">
                        <div className="img-title">
                            <img src="./img1.jpg" alt=""  className='icon-style'/>
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
                            <h3 className='text-st' >Name Project1</h3>
                            <p className='text-st-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Magni eveniet sequi rerum quaerat est similique officia magnam
                                  hic exercitationem molestiae accusantium quod architecto delectus 
                                  necessitatibus  illum, recusandae voluptas. Harum, delectus!
                            </p>

                            <div className="projects-demo">
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Code</span> <img src="./github.png" alt="github" className='logo' />  </a>
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Demo</span> <img src="./link.png" alt="github" className='logo' />  </a>
                            </div>
                        </div>   
                    </div>
     </SwiperSlide>
    

    <SwiperSlide>
          {/* Project2 */}
                       
          <div className="project__block project1">
                        <div className="img-title">
                            <img src="./img2.jpg" alt=""  className='icon-style'/>
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
                            <h3 className='text-st' >Name Project1</h3>
                            <p className='text-st-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Magni eveniet sequi rerum quaerat est similique officia magnam
                                  hic exercitationem molestiae accusantium quod architecto delectus 
                                  necessitatibus  illum, recusandae voluptas. Harum, delectus!
                            </p>

                            <div className="projects-demo">
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Code</span> <img src="./github.png" alt="github" className='logo' />  </a>
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Demo</span> <img src="./link.png" alt="github" className='logo' />  </a>
                            </div>
                        </div>   
                    </div>
    </SwiperSlide>
   
    <SwiperSlide>
  {/* Project3 */}

  <div className="project__block project1">
                        <div className="img-title">
                            <img src="./img3.jpg" alt=""  className='icon-style'/>
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
                            <h3 className='text-st' >Name Project1</h3>
                            <p className='text-st-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Magni eveniet sequi rerum quaerat est similique officia magnam
                                  hic exercitationem molestiae accusantium quod architecto delectus 
                                  necessitatibus  illum, recusandae voluptas. Harum, delectus!
                            </p>

                            <div className="projects-demo">
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Code</span> <img src="./github.png" alt="github" className='logo' />  </a>
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Demo</span> <img src="./link.png" alt="github" className='logo' />  </a>
                            </div>
                        </div>   
                    </div>
    </SwiperSlide>
   
    <SwiperSlide>
 {/* Project4 */}
 <div className="project__block project1">
                        <div className="img-title">
                            <img src="./img4.jpg" alt=""  className='icon-style'/>
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
                            <h3 className='text-st' >Name Project1</h3>
                            <p className='text-st-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Magni eveniet sequi rerum quaerat est similique officia magnam
                                  hic exercitationem molestiae accusantium quod architecto delectus 
                                  necessitatibus  illum, recusandae voluptas. Harum, delectus!
                            </p>

                            <div className="projects-demo">
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Code</span> <img src="./github.png" alt="github" className='logo' />  </a>
                            <a href="https://github.com/YK-1992/projectDemo"> <span>Demo</span> <img src="./link.png" alt="github" className='logo' />  </a>
                            </div>
                        </div>   
                    </div>
    </SwiperSlide>
                   
                      
                       

                        </Swiper>
                      
                      
                  

                </div>
            </section>
        )

    }); 


Projects.displayName= "Projects"

export default Projects;