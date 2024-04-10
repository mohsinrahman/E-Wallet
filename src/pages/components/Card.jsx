import './Card.scss';
import chipdark from '../../assets/chip-dark.svg';
import vendorbitcoin from '../../assets/vendor-bitcoin.svg';
function Card() {

   
    return (
        <>
         <div className="card">
            <div className='cardTop'>
                <img className='chipdark' src={chipdark} alt="" />
                <img  className='vendorbitcoin' src={vendorbitcoin} alt="" />
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
        </>
    )
}

export default Card;