import React from 'react';
import './MainBody.css';
import './CardComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function CardComponent(props) {
    let imageSrc = "http://image.tmdb.org/t/p/w92//" + props.posterpath
    
    return (
       
        <div class="container">
        <div class="row">
            <div class="col-12 mt-3">
                <div class="card">
                    <div class="card-horizontal">
                        <div class="img-square-wrapper">
                            <img class="" src={imageSrc} alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{props.title}</h4>
                            <p class="card-text">Rating: {props.rating}/10</p>
                            <p class="card-text">Release Date: {props.origDate}</p>
                            <p class="card-text">Summary: {props.summary}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
        //    <div class = "container">
    //         <div class="card flex-row flex-wrap">
    //         <div class="card-header border-0">
    //             <img src={imageSrc} alt=""/>
    //         </div>
    //         <div class="card-block px-2">
    //             <h4 class="card-title">Title: {props.title}</h4>
    //             <p class="card-text">Rating: {props.rating}/10</p>
    //             <p class="card-text">Summary: {props.summary}</p>
    //         </div>
    //         <div class="w-100"></div>
    //     </div>
    //     </div>
           
           
           
           
           
           
        //    <div className="card flex-row flex-wrap" border = 'secondary '>
        //    <Card border = 'secondary' className = "card-style" style={{flex: 1}}>
        //         <Card.Img className = "card-img" variant="left" src={imageSrc} border-0 />
        //         <Card.Body>
        //         <Card.Title>Title: {props.title}</Card.Title>
        //         <Card.Text>
        //             Rating: {props.rating}/10
        //         </Card.Text>
        //         <Card.Text>
        //             Summary: {props.summary}
        //         </Card.Text>
        //         </Card.Body>
                
        //      </div>
        //     </Card>

       
    )
}

export default CardComponent