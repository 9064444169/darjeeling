import React, { Component } from 'react';
import "./tourlist.scss";
import Tour from '../tour/tour';
import {tourdata} from '../tourdata';

export default class tourlist extends Component {
    state={
        tours: tourdata
    };
    removetour=id=>{
        console.log(id);

        const {tours}=this.state;
        const sortedtours=tours.filter(tour=>tour.id !==id);
        this.setState({
            tours:sortedtours
        });
    };
    render() {
       const {tours}=this.state;
       
        return (
        <section className="tourlist">
         {tours.map(tour =>(
             <Tour key={tour.id} tour={tour} removetour={this.removetour}/>
    
        ))}
        </section>
        );
    }
}
