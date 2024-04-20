import Top from "./components/Top";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import {useLoaderData} from 'react-router-dom';
import { useSelector } from "react-redux";


function AddCard() {

    const change = useSelector((state) => { return state.change })


    console.log(change)

    const  AppData= useLoaderData();
     console.log(AppData.Cards)

   
    /* let newObject = window.localStorage.getItem("App Data");
        let Data = JSON.parse(newObject);
        console.log(Data.Top[1].TopAddCard); */
    return (
    <>
    <Top Top = {AppData.Top[1].TopAddCard}/>
    <Card />
    <CardForm/>
    <button className="addCard" style={{backgroundColor:"#000000", color:"#ffffff"}}>ADD CARD</button>
    </>
    
    )
}

export default AddCard; 