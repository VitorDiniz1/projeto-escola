
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero(){
    return(
        <div className='hero container'>
            <div className='hero-text'>
                <h1>We Ensure better for a better world</h1>
                <p>Our cutting-edge curruculum is designed to empower students with the knowledge,skills,and experiences need to excel in the dynamic field of education
                </p>
                <button className='btn'>Explore more<img src={dark_arrow}  /></button>

            </div>

        </div>
    )
}

export default Hero