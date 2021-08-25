import '../App.css'
import Title from './Title'
import Image from './Image'
import Description from './Description'
import { Component } from 'react'

class SimpleCard extends Component {

    render() {

        return (
            <div>

                <div className = 'card-body'>
                    <div className = 'img-box'>
                        <Image Url = "./image/Gyakie.jpg" style = {{width: '100%'}}/>
                    </div>
                    <div className = 'title-box'>
                        <Title title = "A Title"/>
                    </div>
                    <div className = 'des-box'>
                        <Description description = 'A description' />
                    </div>
                </div>

                
                
                
            </div>
        )
    }
}

export default SimpleCard;