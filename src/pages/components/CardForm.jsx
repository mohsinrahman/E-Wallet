import './CardForm.scss';
function CardForm() {
    return (
        <div className="form">
        <div>
        <span>CARD NUMBER</span>
        <input type="number" name="" id="" />
        </div>
        <div>
        <span>CARDHOLDER NAME</span>
        <input type="text" name="" id="" />
        </div>
        <div className='validThru_ccv'>
        <div>
        <span>VALID THRU</span>
        <input className="validThru" type="date" name="" id="" />
        </div>
        <div>
        <span>CCV</span>
        <input className="ccv" type="number" name="" id="" />
        </div>
        </div>
        <div>
        <span>VENDOR</span>
        <input type="checkbox" name="" id="" />
        </div>
        </div>
    )
}

export default CardForm;