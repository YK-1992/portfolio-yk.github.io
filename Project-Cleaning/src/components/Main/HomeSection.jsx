import HeaderBlock from '../Header/header-block'
import './homeStyle.scss'


const HomeSec =() => {
    return(
        <section className="home-section" id='home'>
                      <HeaderBlock/>
         <div className="home-container">
            
            <div className="icon-block">
                <img src="./my-logo.png" alt="" />
            </div>
            <div className="text-section">
                <h1>Professional care for your space</h1>
                <span></span>
            </div>
            
                    </div>
       
        </section>
    )
}

export default HomeSec;