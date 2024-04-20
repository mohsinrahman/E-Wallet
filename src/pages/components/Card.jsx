import './Card.scss';
import chipdark from '../../assets/chip-dark.svg';
import vendorbitcoin from '../../assets/vendor-bitcoin.svg';
import { useSelector } from "react-redux";
function Card() {

    const change = useSelector((state) => { return state.change })


  console.log(change)


const cardActive = change.Cards.map((Card)=>

    {
        if(Card.cardActive === 1)  
        {
            console.log(Card);

        return (
        <div className="card" style={{background:Card.cardColor}}>
        <div className='cardTop'>
            <img className='chipdark' src={chipdark} alt="" />
            <img  className='vendorbitcoin' src={`/src/assets/${Card.card}.svg`} alt="" />
        </div>
        <div className='cardMiddel'>
            <p>{Card.cardNumber}</p>
        </div>
        <div className='cardBottom cardTopBottom'>
            <span>CARDHOLDER NAME</span>
            <span>VALID THRU</span>
        </div>
        <div className='cardBottom cardLastBottom'>
        <span>{Card.cardHolder}</span>
            <span>{Card.dateExpiry}</span>
        </div>
    </div>
        )
        
      }

    

    }).filter(notUndefined => notUndefined !== undefined);


                  

//  );


   
    return (
        <>
   {cardActive}
        </>
    ) 
    console.log(cardActive)
}

export default Card;