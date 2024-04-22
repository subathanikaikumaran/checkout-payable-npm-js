import React from 'react';
import { payablePayment } from 'new-test';
function App() {
  const handlePayment = async () => {
    const payment = {
      logoUrl: "https://domain/images/logo_name",
      returnUrl: "https://domain/your_return_url",
      checkValue: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      orderDescription: "Payment for furni",
      invoiceId: "INVSXz7qcw3Br",
      merchantKey: "XXXXXXXXXXXXXXXXX",
      customerFirstName: "customer first name",
      customerLastName: "customer last name",
      customerMobilePhone: "077XXXXXXX",
      customerEmail: "testmail@gmail.com",
      billingAddressStreet: "Main street",
      billingAddressCity: "Vavuniya",
      billingAddressCountry: "LKA",
      amount: "235.00",
      currencyCode: "LKR",
      paymentType: "1"
  };

   const test= await payablePayment(payment,true);
   console.log(test);
  };
  return (
    <div>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
}

export default App;