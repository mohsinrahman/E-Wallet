import Top from "./components/Top";
import Card from "./components/Card";
import CardForm from "./components/CardForm";

function AddCard() {
    return (
    <>
    <Top/>
    <Card/>
    <CardForm/>
    <button className="addCard" style={{backgroundColor:"#000000", color:"#ffffff"}}>ADD CARD</button>
    </>
    
    )
}

export default AddCard; 