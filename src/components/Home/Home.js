import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import "./home.css";
import page from "../images/page.gif"
import logo from "../images/logo_annote.png"


export default function Home() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm static-top">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="..." height="70"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" style={{textDecoration:'none', color:'black'}} href="#" >Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{textDecoration:'none', color:'black'}} href="/Login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" style={{textDecoration:'none', color:'black'}} href="#" >Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="box">
                <div className="box-wrapper1">
                    <div className="Logo1"><img src={page} alt="..." height="200" ></img></div>
                    <div className="Text1"><h1>About Annote</h1><p>Annote is a note-taking tool as well as a place to organise, manage and store notes. </p></div>
                </div>
                <div className="box-wrapper2">
                    <div className="t1"><h2>How to use Annote</h2> <p>Slash Commands</p></div>
                    <div className="t2"></div>
                </div>
            </div>
        </div>
    )
}
