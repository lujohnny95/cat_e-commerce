import './App.css';
import {useState} from "react"
​
​
const App = ( ) => {
    const [basket , SetBasket] = useState([0])
    const [basketItem, setBasketItem] = useState("")

    const addHandler1 = () =>{
      let addToBasket = [...basket]
      addToBasket.push(basket[basket.length -1] +1)
      SetBasket(addToBasket)
   }
​
    const addHandler2 = () => {
      let subBasket = [...basket]
      subBasket.push(basket[basket.length - 1] - 1)
      SetBasket(subBasket)
    }
​
    const removeHandler = ( index) =>{
       if (basket.length -1 === 0){
         SetBasket(basket[0])
       }
       else {
      let revItem= [...basket]
      revItem.splice(index, 1)
      SetBasket(revItem)
       }
    }
​
  return(
      <div className ="App-header ">
          {basket.map( (tod, index) => {
            return (  
             <div> <p>  {tod} item in basket </p> 
              <button onClick = { ( ) =>removeHandler (index)}> remove item </button> 
              <button onClick = { ( ) => addHandler1 (index)} > add item </button> 
             
              </div>
            )
          })}

          <button onClick = {addHandler2}>  delete last  list </button>
      </div>
  )
}
​
export default App;