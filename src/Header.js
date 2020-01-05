import React from 'react';
import './Header.css'
class Header extends React.Component {
    
    constructor() {
        super()
      
        this.state = {
          offset: 0
        };
      }
    
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
      }
      parallaxShift = () => {
        this.setState({
          offset: window.pageYOffset
        });
      };

    render(){
        const myStyle = {
            textAlign : "center",
            fontSize : 60
        }
        return (
            <header 
                className='header-background'
                style={{ backgroundPositionY: this.state.offset}}
            >
                <section
                className='info-container'
                style={{ bottom: this.state.offset / 2 }}
                >
                <h1 className  = "headerText">Film Search</h1>
                <h3 className  = "headerText">Find the Best Movies</h3>
                </section>
            </header>
            
        )
    }
}

export default Header