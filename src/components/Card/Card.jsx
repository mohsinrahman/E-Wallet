import React from 'react';
import chiplight from '../../assets/chip-light.svg';
import '../../styles/globalStyle.scss';
import './Card.scss';

function Card({ cardData, onClick }) {
    const { vendor } = cardData
    
    const cardNumber = cardData && cardData.number ? cardData.number : 'XXXX XXXX XXXX XXXX';
    const cardHolderName = cardData && cardData.cardholder ? cardData.cardholder : 'FIRSTNAME LASTNAME';
    const validThru = cardData && cardData.expiry ? cardData.expiry : 'MM/YY'

    return (
        <main className='main-card'>
            <div className={`card ${vendor.toLowerCase()} vendor-style`} onClick={onClick}>
                <img className='card__chip' src={chiplight} alt='chiplight' />
                <p className='card__number'>{cardNumber}</p>
                <div className='card__information'>
                    <aside className='card__information__left'>
                        <p className='card__information__cardholder-name'>CARDHOLDER NAME </p>
                        <p className='card__information__cardholder'>{cardHolderName}</p>
                    </aside>

                    <aside className='card__information__right'>
                        <p className='card__information__validity'>VALID THRU </p>
                        <p className='card__information__vaild'>{validThru}</p>
                    </aside>

                </div>
            </div>
        </main>
    );
}

export default Card;