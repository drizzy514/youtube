import "./SiteHeader.scss";
import { Link } from "react-router-dom";

// icons

import YoutubeLogo from "../Lib/Svg/YoutubeLogo";
import VideoIcon from "../Lib/Svg/VideoIcon";
import MenuLink from "../Lib/Svg/MenuLink";
import Notification from "../Lib/Svg/Notification";
import MenuIcon from "../Lib/Png/menu_24px.png";
import SearchIcon from "../Lib/Svg/SearchIcon";
import UserIcon from "../Lib/Png/Userpic.png";


function SiteHeader (){
    return (
        <>
            <div className="site-header">
            
                
               <Link to="/" className="menu-link">
                    <img src={MenuIcon} alt="menu-icon" />
               </Link>
              
             
               
                 <Link to="/" className="site-logo" >
                   <YoutubeLogo />
                 </Link>
                 <div className="search">
                    <input type="text" className="search-input" placeholder="Search" />
                  <span className="search-icon">  <SearchIcon  /></span>

                 </div>
                 <div className="site-icons">

                    <span className="icon">
                     <VideoIcon />

                    </span>
                    <span className="icon">
                     <MenuLink />

                    </span>
                    <span className="icon">
                     <Notification />

                    </span>
                    <span className="icon">
                    <Link to="/channel" >
                    <img src={UserIcon} alt="user-icon"/>
                    </Link>

                    </span>
                 </div>
            </div>   
        </>
    )
}
export default SiteHeader