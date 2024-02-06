import REact from "react";
import "./common-file-css/Somthingwent.css";
import { Link } from "react-router-dom";

export const Somthingwent = () =>{
    return<>
        <div className="container">
        <div className="Menu">
            <img src="/images/logo.svg" alt="" />
        <button><Link to="/login">Login</Link></button>
        </div>
        <div className="somethingwent">
            <img src="/images/meditation.png" alt="" />
            <h1>Something Went Wrong</h1>
            <p>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL.</p>
        </div>
        </div>
    </>
}