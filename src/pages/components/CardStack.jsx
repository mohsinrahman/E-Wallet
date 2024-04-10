import './Card.scss';
import './CardStack.scss'
import chipdark from '../../assets/chip-dark.svg';
import vendorevil from '../../assets/vendor-evil.svg';
import vendorninja from '../../assets/vendor-ninja.svg';
import vendorblockchain from '../../assets/vendor-blockchain.svg';
function CardStack(props) {

    const cards = props.cardData;
    
    const cardItems = cards.map((item)=>

    {if(item.cardActive != 1){
        return (
            <div className={`card card${item.cardID}`} >
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

/*
<div className="card card1" >
            <div className='cardTop'>
                <img className='chipdark' src={chipdark} alt="" />
                <img  className='vendorbitcoin' src={vendorninja} alt="" />
            </div>
            <div className='cardMiddel'>
                <p>1234 5678 9101 1123</p>
            </div>
            <div className='cardBottom cardTopBottom'>
                <span>CARDHOLDER NAME</span>
                <span>VALID THRU</span>
            </div>
            <div className='cardBottom cardLastBottom'>
            <span>CHRISTOFFER WALLENBERG</span>
                <span>12 / 22</span>
            </div>
        </div>
        
        <div className="card card2" >
        <div className='cardTop'>
                <img className='chipdark' src={chipdark} alt="" />
                <img  className='vendorbitcoin' src={vendorblockchain} alt="" />
            </div>
            <div className='cardMiddel'>
                <p>1234 5678 9101 1123</p>
            </div>
            <div className='cardBottom cardTopBottom'>
                <span>CARDHOLDER NAME</span>
                <span>VALID THRU</span>
            </div>
            <div className='cardBottom cardLastBottom'>
            <span>CHRISTOFFER WALLENBERG</span>
                <span>12 / 22</span>
            </div>
        </div>
        <div className="card card3" >
        <div className='cardTop'>
                <img className='chipdark' src={chipdark} alt="" />
                <img  className='vendorbitcoin' src={vendorevil} alt="" />
            </div>
            <div className='cardMiddel'>
                <p>1234 5678 9101 1123</p>
            </div>
            <div className='cardBottom cardTopBottom'>
                <span>CARDHOLDER NAME</span>
                <span>VALID THRU</span>
            </div>
            <div className='cardBottom cardLastBottom'>
            <span>CHRISTOFFER WALLENBERG</span>
                <span>12 / 22</span>
            </div>
        </div> 

    


*/