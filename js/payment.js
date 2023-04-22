document.getElementById('payBtn').onclick = displayPaymentMsg;

function displayPaymentMsg() {
  alert("You will be directed to our third party payment vendor...")
  alert("Payment Successful!")
  location.replace("ticket.html")
}