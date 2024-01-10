import React from "react";
import './Section1.css'
import apple from '../../assets/logo.svg'

const Section1 = () =>{
    return (
        <div>
            <div className="overall">
            <div className="text-vid">
            <div className="handp">
                <h2 className="webh2">The first web3 crypto platform</h2>
                <h3 className="prob">Problem</h3>
                <p className="someText">"Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing."</p>
            </div>
            <div className="vid">
                <img src={apple} alt="" className="apple"/>
            </div>
            </div>
            </div>
            <div className="nostick">
                <div className="textpara">
                    <h2 className="thih2">We work to make your life easier</h2>
                    <h3 className="thih3">Solution</h3>
                </div>
            </div>
        </div>

    )
}

export default Section1