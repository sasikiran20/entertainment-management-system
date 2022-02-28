import React, { Component } from 'react'
import Axios from 'axios'
import "../styles/Payment.css"
export class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
   // this.razorPayHandler = this.razorPayHandler(this);

  }

  async razorPayPaymentHandler() {
    const API_URL = `http://localhost:5000/razorpay/`
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data)
    
    const options = {
      key: '',
      name: "YVS_FRNDS",
      
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${API_URL}capture/${paymentId}`;
         const captureResponse = await Axios.post(url, {})
         const successObj = JSON.parse(captureResponse.data)
         const captured = successObj.captured;
         console.log("App -> razorPayPaymentHandler -> captured", successObj)
         if(captured){
             console.log('success')
         }
         
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }
  
  render() {
    return (
      <div>
        <button 
        onClick={this.razorPayPaymentHandler}
        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <i className='fas fa-sign-in-alt  w-6  -ml-2' />
        
          Pay Now
        </button>
      </div>
    )
  }
}

export default Payment