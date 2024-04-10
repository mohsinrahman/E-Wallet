import Top from "./components/Top";
import Card from "./components/Card";
import CardStack from "./components/CardStack";
import './Home.scss';
import {useLoaderData} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { change } from './../reducers/changeReducer'


function Home() {
    const dispatch = useDispatch();

  function handleClick() {
    dispatch(change({cardNumber:"3333 3333 3333 3333"}));
  }

    const  AppData= useLoaderData();
   console.log(AppData.Cards);
    return (
    <>
    <Top/>
    <Card />
    <CardStack cardData = {AppData.Cards}/>
    <button className="addCard" onClick={ handleClick }>ADD A NEW CARD</button>
    </>
    
    )
}

export default Home; 