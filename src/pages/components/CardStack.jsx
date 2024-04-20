import './Card.scss';
import './CardStack.scss'
import chipdark from '../../assets/chip-dark.svg';
import { useDispatch } from 'react-redux'
import { change } from './../../reducers/changeReducer'


function CardStack(props) {
    console.log(props)
    const dispatch = useDispatch();
    const handleClick = (id/* ,card,cardNumber,cardHolder,dateExpiry,ccv,cardColor */) => {
        console.log(id)
         dispatch(change({  
            cardID: id,
            //card: card,
            //cardNumber:cardNumber,
            //cardHolder: cardHolder,
            //dateExpiry: dateExpiry,
            //ccv: ccv,
            cardActive: 1
            //cardColor: cardColor
    })); 
       
      }

    const cards = props.cardData;
    console.log(cards);
    const cardItems = cards.map((item)=>
    //className={item.cardActive != 1 ? `card card${item.cardID}` : "card"}
    {if(item.cardActive != 1){
        return ( /*  className={`card card${item.cardID}`} */
            <div className="card cardStack"
            style={{background:item.cardColor}}  onClick={() => { handleClick(item.cardID/* ,item.card,item.cardNumber,item.cardHolder,item.dateExpiry,item.ccv,item.cardColor */);}} >
            <div className='cardTop'>
                <img className='chipdark' src={chipdark} alt="" />
                <img  className='vendorbitcoin' src={`/src/assets/${item.card}.svg`} alt="" />
            </div>
            <div className='cardMiddel'>
                <p>{item.cardNumber}</p>
            </div>
            <div className='cardBottom cardTopBottom'>
                <span>CARDHOLDER NAME</span>
                <span>VALID THRU</span>
            </div>
            <div className='cardBottom cardLastBottom'>
            <span>{item.cardHolder}</span>
                <span>{item.dateExpiry}</span>
            </div>
        </div>
      )}}
                  

  );
    return (
        <>
        {cardItems}
        </>
    )
}

export default CardStack;

