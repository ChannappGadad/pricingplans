import {FaCheck, FaTimes} from 'react-icons/fa';
import "../src/App.css";
import { useState } from "react";


function App() {
  const [showResults, setShowResults] = useState(true)
  const [totalValue, setTotalValue] = useState(0)

  // const onClick = () => {console.log("hello")}

  const OnClickUpi=() => {
    setShowResults(false)
    console.log("false")
  }

  const onClickCard=() => {
    setShowResults(true)
  }

  const changePriceValueBasic = () => {
    setTotalValue(499)
  }

  const changePriceValueHD = () => {
    setTotalValue(699)
  }

  const changePriceValue4k = () => {
    setTotalValue(999)
  }

  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
  }

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
        alert("Will be redirected to the payment page")
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

 const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_rURRdayivQS2yt",
      currency: "INR",
      amount: amount * 100,
      name: "pricing plans for Netflix",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "code with akky",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

  }

  return (
    <>
<section class="container">
<h2>Choose your premium plan</h2>

<div class="pricing_table">
    <ul>
      <li>       <br/>     </li>
      <li>Premium Content</li>
      <li>Music</li>
      <li>BeforeTV, Live TV</li>
      <li>Ad-free</li>
      <li>Device</li>
    </ul>

    <ul className='allChild'>
      <li>Mobile</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaTimes/>}</li>

    </ul>
    
    <ul className='allChild'>
      <li>Premium HD</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
    </ul>
    
    <ul className='allChild'>
      <li>Premium 4k</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
    </ul>
</div>


  
</section>

  <section className='pricingButtons'>
    <div class="cardButton" onClick={changePriceValueBasic}>
      <input type='radio' name='pricing' id='card1' />
      <label for="card1">
        <h5>Mobile</h5>
        <h2>
          <span>Rs</span>
          499
          <span>/Year</span>
        </h2>
      </label>
    </div>

    <div class="cardButton" onClick={changePriceValueHD}>
      <input type='radio' name='pricing' id='card2' />
      <label for="card2">
        <h5>Premium HD</h5>
        <h2>
          <span>Rs</span>
          699
          <span>/Year</span>
        </h2>
      </label>
    </div>

    <div class="cardButton"  onClick={changePriceValue4k}>
      <input type='radio' name='pricing' id='card3' />
      <label for="card3">
        <h5>Premium 4k</h5>
        <h2>
          <span>Rs</span>
          999
          <span>/Year</span>
        </h2>
      </label>
    </div>
  </section>

  <section className='applyCode'>
    <button onClick={() => displayRazorPay(totalValue)}><h5>Pay</h5></button>
    <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Apply Code</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div className='inputPosition'>
                              <input type='text' className='applycodeInput' placeholder='Enter Code'></input>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
  </section>
{/* 
  <section>
      <div className='conatains'>
        <div className='left'>
          <p>Payment methods</p>
          <hr style={{border: "1px solid #ccc", margin: "0 15px"}}></hr>
          <div className='methods'>
            <div onClick={onClickCard} id='tColorA' style={{color: "Black"}}>
              Payment by Card
            </div>

            <div id='tColorB' style={{color: "Black", padding: "10px"}}>
                Internet banks
            </div>

            <div onClick={OnClickUpi} id='tColorC' style={{color: "Black"}}>
              UPI/Google pay
            </div>

            <hr style={{border: "1px solid #ccc", margin: "0 15px"}}></hr>
          </div>
        </div>

        <div className='center'>
          <a href='https://www.shift4shop.com/credit-card-logos.html'>
            <img alt='credit Card Logos' 
            title='credit Card Logos'
            src='https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png'
            width="250"
            height={"auto"}/>
          </a>

          <hr style={{border: "1px solid #ccc", margin: "0 15px"}}></hr>
          
        {
          showResults? 
          <div className="card-details">
            <form>
              <p>Card number</p>
              <div className='c-number' id='c-number'>
                <input 
                id='number' 
                className='cc-number' 
                placeholder='Card number' 
                maxLength={"15"} required></input>
              </div>

              <div className='c-details'>
                <div>
                  <p>Expiry date</p>
                  <input id='e-date' className='cc-exp' placeholder='MM/YY' required maxLength={"5"}/>
                </div>
                
                <div>
                  <p>CVV</p>
                  <div className='cvv-box' id='cvv-box'>
                    <input id='cvv' className='cc-cvv' placeholder='CVV' required maxLength={"3"}/>
                  </div>
                </div>
              </div>

              <div className='c-email'>
                <div>
                  <p>Card Name</p>
                  <input type='text' 
                  id="text" placeholder='Card Name' 
                  required maxLength={"5"}/>
                </div>
              </div>
              <button><h5>PAY NOW</h5></button>
            </form>
          </div>: ""
        }
        {
          showResults?"" :
        
          <div className='upiPaymentDiv'>
            <input className='upiPayment' type="text" placeholder='123456789@ybl'/>
            <button><h5>Submit</h5></button>
          </div>
        }

        </div>
        <div className='FinalValue'>
          <p>Total Value:</p>
          <label>{totalValue}/-</label>
        </div>
        </div>  
  </section> */}
    </>
    );
}

export default App;