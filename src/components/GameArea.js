import React,{useState} from 'react'
import Snake from './Snake'
import Food from './Food'
function getRandomCoordinates(){
    const min = 1
    const max = 98
    const coordX =Math.floor((Math.random()*(max-min-1)*min)/2)*2
    const coordY =Math.floor((Math.random()*(max-min-1)*min)/2)*2
    return [coordX,coordY]
}

const GameArea = () =>{
    const [snakeDot,setSnakeDot] = useState([[0,0],[2,0]])
    const [foodDot,setFoodDot] = useState(getRandomCoordinates())
    return(
        <>
        <h2 className="scoreBoard">Pontos:<strong>{snakeDot.length -2}</strong></h2>
        <div className="game-area">
            <Snake 
            setFoodDot={setFoodDot} 
            food={foodDot} 
            getRandomCoordinates={getRandomCoordinates}
            snakeDot={snakeDot}
            setSnakeDot={setSnakeDot}
            />
            <Food dot={foodDot}/>
        </div>
      </>
    )
}

export default GameArea