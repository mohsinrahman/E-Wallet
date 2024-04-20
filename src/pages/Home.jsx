import Top from "./components/Top";
import Card from "./components/Card";
import CardStack from "./components/CardStack";
import './Home.scss';
import {useLoaderData} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

 


    const change = useSelector((state) => { return state.change })


  //console.log(change.Top[0].TopHome)


   /*  const  AppData= useLoaderData();
    console.log(AppData.Cards) */
   /*  window.localStorage.setItem("App Data", JSON.stringify(change.Cards));
    let newObject = window.localStorage.getItem("App Data");
        let Data = JSON.parse(newObject);
        console.log(Data) */
   //console.log(AppData.Top[0].TopHome);
    console.log(change.Cards)
    return (
    <>
    <Top />
    <Card cardData = {change.Cards}/>
    <div className="cardStackGrid">
      <CardStack cardData = {change.Cards}/>
    </div>
    
   {/* <button className="addCard" >ADD A NEW CARD</button> */} 
    <Link to="/addcard">
    <button className="addCard" >ADD A NEW CARD</button> 
      </Link>
    </>
    
    )
}

export default Home; 