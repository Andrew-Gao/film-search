import React from 'react';
import CardComponent from './CardComponent';
import CardDeck from 'react-bootstrap/CardGroup'
import './MainBody.css';


class MainBody extends React.Component {
    
    constructor(){
        super()
        this.state = {
            keyword : "Action",
            minRating : 5,
            minYear : "2017-01-01",
            maxYear : "2019-01-01",
            movieTitles: [],
            movieIDs : [],
            movieGenres: [],
            genreDictionary : {

            },
            movieCards : []

            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
      
      componentDidMount(){
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b57ae47a740d49183aeba24b334c69eb&language=en-US`)
        .then(response => response.json())
        .then(data => {
            let tempIDs = []
            let tempGenres = []
            let tempDictionary = {}
            let i = 0
            tempIDs = data.genres.map(entry => {
                return entry.id
            })
            tempGenres = data.genres.map(item => {
                return item.name
            })
            for (i = 0; i < tempIDs.length;i++){
                let IDentry = tempIDs[i]
                let IDgenre = tempGenres[i]
                tempDictionary[IDgenre] = IDentry
            }
            this.setState({
                genreDictionary : tempDictionary
            })
        })
      }

    handleChange(event) {
        this.setState({

            [event.target.name] : event.target.value
        })
        if(event.target.name === "minYear" || event.target.name === "maxYear"){
            this.setState({
                [event.target.name] : event.target.value + "-01-01"
            })
        }

    }
    
    handleClick(event) {
        
        event.preventDefault()
        
        let currGenre = this.state.keyword
        let genreNumber = this.state.genreDictionary[currGenre]
        fetch(`http://api.themoviedb.org/3/discover/movie?with_genres=${genreNumber}&primary_release_date.gte=${this.state.minYear}&primary_release_date.lte=${this.state.maxYear}&vote_average.gte=${this.state.minRating}&api_key=b57ae47a740d49183aeba24b334c69eb`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                movieCards : data.results.map(movie => 
                    <CardComponent 
                        posterpath = {movie.poster_path}
                        title = {movie.title} 
                        rating = {movie.vote_average}
                        summary = {movie.overview}
                        origDate = {movie.release_date}
                    />
                )
            })
            
            
        })
        
    }
    


    render(){
        const myStyle = {
            fontSize: 25,
            backgroundColor : "#27292c",
            color:"white",
           
        }

        const style2 = {
             
            textAlign: "center"
        }
        return (
            <div style = {style2}>
                <form style = {myStyle} className = "mainForm">
                    Show me movies about 
                    
                    <br></br>
                    
                    <select 
                        value = {this.state.keyword}
                        name = "keyword"
                        onChange = {this.handleChange}
                    >    
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Animation</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                        <option>Documentary</option>
                        <option>Drama</option>
                        <option>Family</option>
                        <option>Fantasy</option>
                        <option>History</option>
                        <option>Horror</option>
                        <option>Music</option>
                        <option>Mystery</option>
                        <option>Romance</option>
                        <option>Science Fiction</option>
                        <option>TV Movie</option>
                        <option>Thriller</option>
                        <option>War</option>
                        <option>Western</option>
                         
                    </select>
                    
                    <br></br>

                    with ratings of at least

                    <br></br>

                    <select 
                        value = {this.state.minRating}
                        name = "minRating"
                        onChange = {this.handleChange}
                    >    
                        <option>9</option>
                        <option>8</option>
                        <option>7</option>
                        <option>6</option>
                        <option>5</option>
                        <option>4</option> 
                        <option>3</option>  
                        <option>2</option>  
                        <option>1</option>  
                        
                    </select>/10    
                    
                    <br></br>

                    that were made between 

                    <br></br>
                    
                    <input 
                        type = "text"
                        name = "minYear" 
                        placeholder = "low"
                        onChange = {this.handleChange} 
                        style = {{marginRight: 20}}
                    /> 

                    and

                    <input 
                        type = "text"
                        name = "maxYear" 
                        placeholder = "high"
                        onChange = {this.handleChange} 
                        style = {{marginLeft: 20}}
                    /> 
                    <br></br>
                    
                    <button onClick = {this.handleClick}>Get Movies</button>
                    
                </form>
                
               

                {/* // From here on down is where the cards are with movie descriptions */}
            
                {/* this is how to get the image from the poster path http://image.tmdb.org/t/p/w250//y31QB9kn3XSudA15tV7UWQ9XLuW.jpg  */}
                
                
                
                
                
                <CardDeck style={{display: 'flex', flexDirection: 'row', backgroundColor: "#27292c"}}>
                {this.state.movieCards}
                </CardDeck>
                
            </div>
        )
    }
}

export default MainBody