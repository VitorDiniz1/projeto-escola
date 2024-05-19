import './about.css'

import aboutImg from '../../assets/about.png'


function About(){
    return(
        <div className="about">
            <div className='about-left'>
                <img src={aboutImg} className='about-img' />

            </div>
            <div className='about-rigth'>
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem LoremLoremLorem</p>
                <p>LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem LoremLoremLorem</p>
            </div>
        </div>
    )
}

export default About