import "./UserVideo.scss";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";



// icons 
import UserImg from "../Lib/Png/user.png";
import Left from "../Lib/Svg/LeftArrowIcon";
import Right from "../Lib/Svg/RightArrowIcon";

function UserVideo (){
        const [ videos, setVideos ] = useState([]);
        useEffect(() =>{
            fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json() )
            .then((data) => setVideos(data)
            );
        },[])
    return (
        <>
            <div className="user-videos">
                <div className="user-videos__header">
                    <img src={UserImg} alt="user-img"/>
                    <Link to="/channel" >
                         <h1 className="user-name">Dollie Blair</h1>
                    </Link>
              
                       <div className="arrows">
                                <span className="arrow-left">
                                    <Left />
                                </span>
                        
                            <span className="arrow-right">
                                <Right />
                            </span>

                       </div>

                </div>

              {videos.length > 0 &&
                ( <ul className="videos-list">
                  {
                      videos.map((video) =>(
                          
                         ( <li className="videos-item" key={video.id}>
                             <Link to="/video" className="video-link">
                                    <img src={video.url} alt="video"  width="250" height="150"/> 
                                    </Link>
                                    <h3 className="video-title">{video.title}</h3>  
                                    
                                 <p>
                                     <span className="video-view">80k views  ·  3 days ago</span>
                                     <span className="video-autor">Dollie Blair</span>
                                 </p>
                            

                          </li>)
                      ))
                    }

                  </ul>)}

                 
            </div>
        </>
    )
}
export default UserVideo