import React,{useState,useEffect,useRef} from 'react'
import '../styles/snake.css'
const directions={
    ArrowUp:[0,-2],
    ArrowDown:[0,2],
    ArrowLeft:[-2,0],
    ArrowRight:[2,0],
}
const initialPosition = [[0,0],[2,0]]
const initialDirection = 'ArrowRight'
const initialSpeed = 500
const Snake = ({setFoodDot,food,getRandomCoordinates,snakeDot,setSnakeDot}) => {
    const [onDirection,setOnDirection] = useState(initialDirection)
    const [speed,setSpeed] = useState(initialSpeed)
    function checkDirection(e){
      const { key } = e;
        const existKey = directions[key]
        if(existKey){
          setOnDirection(key)
        }
      }
    function gameOver(){
        alert(`Game Over, voce conseguiu ${snakeDot.length -2} pontos`)
            setOnDirection(initialDirection)
            setSnakeDot(initialPosition)
            setFoodDot(getRandomCoordinates)
            setSpeed(initialSpeed)
    }
      document.addEventListener("keydown", checkDirection);
    useEffect(() => {
        if(snakeDot[snakeDot.length-1][0]>=100 || 
            snakeDot[snakeDot.length -1][0] < 0 ||
            snakeDot[snakeDot.length -1][1] < 0|| 
            snakeDot[snakeDot.length -1][1] >= 100){
            gameOver()
            
        }
    })
    useEffect(() =>{
        function checkEatSelf(){
            const snake = [...snakeDot]
            const head = snakeDot[snakeDot.length -1]
            snake.pop()
            snake.forEach(snake => {
                if(head[0] === snake[0] && head[1] === snake[1]){
                    gameOver()
                }
            });
        }
        checkEatSelf()
        
    })
    function moveSnake(){
        let snake = [...snakeDot]
        
        let newSnake = snake[snake.length -1];
        newSnake =[newSnake[0]+directions[onDirection][0],newSnake[1]+directions[onDirection][1]]
        snake.push(newSnake)
        if(snake[0][0] !== food[0] || snake[0][1] !== food[1]){
            snake.shift()
        }else{
            if(speed > 1){
                setSpeed(speed -1)
            }
            setFoodDot(getRandomCoordinates())
        }
        setSnakeDot(snake)
    }  
    useInterval(moveSnake, speed);
      
    function useInterval(callback, delay) {
      const savedCallback = useRef();
  
      // Remember the latest callback.
      useEffect(() => {
      savedCallback.current = callback;
      }, [callback]);
  
      // Set up the interval.
      useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
      }, [delay]);
  }
    
    return (
        <div>
            {snakeDot.map((dot,i) =>{
                const style = {
                    position:"absolute",
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className="snake-dot" key={i} style={style}></div>
                )
            })}
        </div>
    )
}

export default Snake