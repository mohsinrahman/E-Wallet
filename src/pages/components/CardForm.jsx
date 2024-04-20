import './CardForm.scss';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addNewCard } from './../../reducers/changeReducer'
function CardForm() {

    const dispatch = useDispatch();
   
    const [details, setDetails] = useState({
        //cardID: id,
        card: "", 
        cardNumber:"XXXX XXXX XXXX XXXX",
         cardHolder: "Christofer Cris",
        dateExpiry: "",
        ccv: "",
        cardActive: "",
        cardColor: "" 
    });
    const handelChange = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        const name = e.target.name;
        if(name == "cardNumber"){
            console.log(value)
               value.replace(/\\\\s+/g, '').replace(/(\\\\d{4})/g, '$1 ').trim();

            
        }
         console.log(value)
        console.log(e.target.name);
        setDetails((prev)=> {
            return {...prev, [name]: value}
        })
        
    };
    console.log(details);
    dispatch(addNewCard(  
        details
));
   /*  const [cardHolder, setCardHolder] = useState("Christofer Cris")
    const [dateExpiry, setDateExpiry] = useState("")
    const [ccv, setCcv] = useState("")
    const [vendor, setVendor] = useState("") */
    
    

  /* const onChange = (e) =>{
    console.log(e.target.value)
    dispatch(addNewCard({  
        /* cardID: id,
        card: card, 
        cardNumber:e.target.value
         cardHolder: cardHolder,
        dateExpiry: dateExpiry,
        ccv: ccv,
        cardActive: 1,
        cardColor: cardColor 
}));
  }; */
    return (
        <div className="form">
        <div>
        <span>CARD NUMBER</span>
        <input type="number"  
        className="cardNumber"
       
        name="cardNumber"
        onChange={handelChange}/>
        </div>
        <div>
        <span>CARDHOLDER NAME</span>
        <input type="text" name="cardHolder" id=""  
        onChange={handelChange}/>
        </div>
        <div className='validThru_ccv'>
        <div>
        <span>VALID THRU</span>
    
        <input className="validThru" type="date" name="dateExpiry" id=""  
        onChange={handelChange}/>
        </div>
        <div>
        <span>CCV</span>
        <input className="ccv" type="number" name="ccv" id="" 
        onChange={handelChange}/>
        </div>
        </div>
        <div>
        <span>VENDOR</span>
        <select id="cards" name="card" className='card' 
        onChange={handelChange}>
            <option value="vendor-bitcoin">Bitcoin</option>
            <option value="vendor-evil">Evil</option>
            <option value="vendor-ninja">Ninja</option>
            <option value="vendor-blockchain">Blockchain</option>
        </select>
        </div>
        </div>
    )
}

export default CardForm;