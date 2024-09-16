function calculatePrice() {
    const destination = document.getElementById("destination").value;
    const passengers = document.getElementById("passengers").value;
  
    let pricePerTicket = 0;
  
    if (destination === "Islamabad") {
      pricePerTicket = 20;
    } else if (destination === "Peshawer") {
      pricePerTicket = 35;
    } else if (destination === "Karachi") {
      pricePerTicket = 50;
    }
  
    const totalPrice = pricePerTicket * passengers;
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Total Price for ${passengers} passenger(s): $${totalPrice}`;
  }
  