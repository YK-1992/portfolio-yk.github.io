import './expstile.css'
import { forwardRef} from 'react';
import ImgAnimate from './ImgAnimate';

const Experience = forwardRef ((porops, ref) => {




    return (
        <section ref={ref} className='expeir__section'>
           <div className="expeir__container">
           <h1 className='gradient-text text-fonts'>Experience</h1>    
           <p>My technical level</p> 
           </div>

            <div className="experience-nav">
          
            {/* <div className="expeir__inform">
          
            <div className=" exp_box">

                <div className="exp_data">
                    <div className='img-block'>
                                              <img src="./accept.png" alt="check" className='logo'/>

                    </div>
                    <div className="text-href">
               
                    <h3>HTML</h3>
                    </div>
      
                </div>
                <div className="exp_data">
                      <img src="./accept.png" alt="check" className='logo'/>
        <h3>CSS</h3>
                </div>
                <div className="exp_data">
                      <img src="./accept.png" alt="check" className='logo'/>
        <h3>SCSS</h3>
                </div>
                <div className="exp_data">
                    <div></div>  <img src="./accept.png" alt="check" className='logo'/>
        <h3>GIT</h3>
                </div>
                <div className="exp_data">
                      <img src="./accept.png" alt="check" className='logo'/>
        <h3>React</h3>
                </div>
                <div className="exp_data">
                      <img src="./accept.png" alt="check" className='logo'/>
        <h3>Java Script</h3>
                </div>
          
            </div>

           </div> */}


             <div className="inform-block">
             <h2>Frontend Developer</h2>

             <div className="skills-block-section">
             <div className="skills-block">
                <img src="./accept.png" alt="check" className='logo'/>
                <p>HTML</p>
                </div>
                <div className="skills-block">
                <img src="./accept.png" alt="check" className='logo'/>
                <p>CSS</p>
                </div>
                <div className="skills-block">
                <img src="./accept.png" alt="check" className='logo'/>
                <p>SCSS</p>
                </div>
                <div className="skills-block">
                <img src="./accept.png" alt="check" className='logo'/>
                <p>GIT</p>
                </div>
                <div className="skills-block">
                <img src="./accept.png" alt="check" className='logo'/>
                <p>React</p>
                </div>
                <div className="skills-block">
                <img src="./accept.png" alt="check" className='logo'/>
                <p>Java Script</p>
                </div>

             </div>
               
                
                </div>   
            
<ImgAnimate/>


                
                </div>               
           
        </section>
    );
});

Experience.displayName= "Experience"
 export default Experience;
