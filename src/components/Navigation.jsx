import React, { useRef } from "react"
import { Link, withRouter } from "react-router-dom"

function Navigation(props){
    // Functions shows the menu for mobile devices
    function showMenu(){
        const btnHamburger = document.querySelector('#btnHamburger');
        const header = document.querySelector('.header');
        const overlay = document.querySelector('.overlay');
        const fadeElems = document.querySelectorAll('.has-fade');
        const body = document.querySelector('body');
        if(header.classList.contains('open')){
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }else{
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
    }

    return(
        <header class="header">
            <div className="overlay has-fade">

            </div>
            <nav class="container flex flex-jc-sb flex-ai-c">
                <a href="/" class="header__logo">GeneEngage</a>
                <a  id="btnHamburger" href="#"class="header__toggle hide-for-desktop" onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div class="header__links hide-for-mobile">
                    <a href="/Home">Home</a>
                    <a href="/pcp_messages">Messages</a>
                    <a href="/lab_reports">Lab Results</a>
                    <a href="/patient_search">Patients</a>
                    <a href="/resources">Resources</a>
                    <a href="/logout">Logout</a>
                </div>
            </nav>
        </header>
    );
}

export default withRouter(Navigation);