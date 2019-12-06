import React, { Component } from 'react';
import "./tour.scss";

export default class tour extends Component {
    state={
        showinfo:false
    };
    handleinfo=()=>{
        this.setState({
            showinfo:!this.state.showinfo
        });
    };
    render() {
        const{id,city,img,name,info} = this.props.tour;
        const{removetour}=this.props;
        return (
             <article className="tour">
        <div className="img-container">
            <img 
            src={img}
            alt="" />
            <span className="close-btn" onClick={()=>{removetour(id);}}>
                <i className="fas fa-window-close" />
            </span>
            </div> 
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info{" "}
                <span onClick={this.handleinfo}>
                    <i className="fas fa-caret-square-down" /></span></h5>
                {this.state.showinfo && <p>{info}</p>}
                
            </div>

        </article>
        );
    }
}
