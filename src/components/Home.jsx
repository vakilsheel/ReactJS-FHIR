import React, { useRef } from "react"
import { Link, withRouter } from "react-router-dom"

function BoxNav(props){
    return(
      <div className="navBox">
        <div className="box-nav-wrap">
          <a href="#" class="button">{props.txt}</a>
        </div>
      </div>
    );
}

export function Title(props){
    return(
        <div className="title-wrap">
            <h1 className="topic-title">
                {props.subject}
            </h1>
        </div>
    );
}

export function Content(props){
    return(
        <div className="content-wrap">
            <p2 className="topic-content">
                {props.txt}
            </p2>
        </div>
    );
}

export function Page(props){
    return(
        <div className="total-wrapper-dsktp">
            <Title subject={props.subject}/>
            <Content txt={props.content}/>
            <BoxNav txt={props.buttonMessage}/>
        </div>
    );
}
function Home(props) {
    return(
        <div className="cards">
            <Page buttonMessage="Send/View Messages" content="Update: New Message from Mariana Acuna!" subject="Provider Messages"/>
            <Page buttonMessage=" See Lab Reports" content="Reports for Mariana Acuna available" subject="Lab Reports"/>
             <Page buttonMessage="Search Patients" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam lacus tellus, semper et nulla quis, pharetra cursus metus. Fusce tincidunt mattis diam." subject="Patient Search"/>
            <Page buttonMessage="See Resources" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam lacus tellus, semper et nulla quis, pharetra cursus metus. Fusce tincidunt mattis diam." subject="Resources"/>
        </div>
    );
}

export default withRouter(Home);