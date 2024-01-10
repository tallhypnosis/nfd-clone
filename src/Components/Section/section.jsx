import React from "react";
import './section.css'
import teddy from '../../assets/teddy.svg'
import block from '../../assets/block.svg'
import lock from '../../assets/lock.svg'
import settings from '../../assets/settings.svg'
import rec from '../../assets/curve-rec.svg'
import apple from '../../assets/apple.svg'
import windows from '../../assets/windows.svg'

const section = () => {
    return(
        <div>
        <div className="left-right-container">
        <div className="left">
            <img src={teddy} alt="" className="ted"/>
            <span className="platform">NFD platform</span>
            <span className="gg">"NFD.gg"</span>
            <div className="text">
            "An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information."
        </div>
        <div className="boxes">
        <div className="box box1">
            <img src={block} alt="" className="block"/>
            <div className="box1-cont">Info in one place</div>
        </div>
        <div className="box box2">
            <img src={lock} alt="" className="lock"/>
            <div className="box2-cont">Private Tools</div>
        </div>
        <div className="box box3">
            <img src={settings} alt="" className="settings"/>
            <div className="box3-cont">Wide functionality</div>
        </div>
          </div>
          <div className="buttons">
            <button className="butt button1">
                <div className="button1-sty"></div>
                <span></span>
                <div className="button1-1-text">Try Plaform</div>
                <div className="button2-sty"></div>
            </button>
            <button className="butt button2">How it works?</button>
        </div>
        </div>
        
        <div className="right">
        <img src={rec} alt="" className="cr"/>
        <div className="soft-comb">
            <span className="software">NFD software</span>
            <span className="combin">"Combine"</span>
        </div>
        <div className="text-b">
        Handle your crypto-wallets, farm activities and retrodrops on a single app.
        </div>
        <div className="win-app">
            <div className="wa app">
                <img src={apple} alt="" className="Aphoto"/>
                <div className="appTxt">macOs</div>
            </div>
            <div className="wa win">
                <img src={windows} alt="" className="Winphoto"/>
                <div className="winTxt">Windows</div>
            </div>
        </div>

        </div>
        </div>
        
        </div>
       

    )
}

export default section