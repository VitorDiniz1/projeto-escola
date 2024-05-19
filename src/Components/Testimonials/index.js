import './testimonials.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef } from 'react'

function Testimonials(){
    const slider = useRef()
    let tx = 0 

    const slideForward = () =>{ 

        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`


    }
    const slideBackward = () =>{
        if(tx <0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }


    return(
        <div className='testimonials'>
            <img src={nextIcon} className='next-btn' onClick={slideForward} />
            <img src={backIcon} className='back-btn' onClick={slideBackward}/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>dxnxdsi xnsiwhxw wxuwxnn xixiwxniw jxiwjdxwoix jxwiojxw xniwjwx ijxwijdx jdxiejxdidxjxek jxiejxewo0 ediehdi nxeiwchxucenxecdeo jdi03jd03 eidjxiedj dieudxcejc djddhdud dh9wu3d</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user2} />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>dxnxdsi xnsiwhxw wxuwxnn xixiwxniw jxiwjdxwoix jxwiojxw xniwjwx ijxwijdx jdxiejxdidxjxek jxiejxewo0 ediehdi nxeiwchxucenxecdeo jdi03jd03 eidjxiedj dieudxcejc djddhdud dh9wu3d</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user3} />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>dxnxdsi xnsiwhxw wxuwxnn xixiwxniw jxiwjdxwoix jxwiojxw xniwjwx ijxwijdx jdxiejxdidxjxek jxiejxewo0 ediehdi nxeiwchxucenxecdeo jdi03jd03 eidjxiedj dieudxcejc djddhdud dh9wu3d</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user4} />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>dxnxdsi xnsiwhxw wxuwxnn xixiwxniw jxiwjdxwoix jxwiojxw xniwjwx ijxwijdx jdxiejxdidxjxek jxiejxewo0 ediehdi nxeiwchxucenxecdeo jdi03jd03 eidjxiedj dieudxcejc djddhdud dh9wu3d</p>
                        </div>
                    </li>

                 
                </ul>

            </div>
        </div>
    )
}

export default Testimonials