// // // Add an event listener to the "All ticket" button
// // document.getElementById('all-ticket').addEventListener('click', function() {
// //     // Prompt the user for the bus number
// //     const busNo = prompt('Enter the bus number:');
  
// //     // Prompt the user for the discounted fare
// //     const discountedFare = prompt('Enter the discounted fare:');
  
// //     // Prompt the user for the bus route
// //     const busRoute = prompt('Enter the bus route:');
  
// //     // Prompt the user for the original fare
// //     const originalFare = prompt('Enter the original fare:');
  
// //     // Prompt the user for the booking date and time
// //     const bookingDateAndTime = prompt('Enter the booking date and time (DD Mon,YY | HH:MM AM/PM):');
  
// //     // Prompt the user for the number of tickets
// //     const tickets = prompt('Enter the number of tickets:');
  
// //     // Prompt the user for the starting stop
// //     const startingStop = prompt('Enter the starting stop:');
  
// //     // Prompt the user for the ending stop
// //     const endingStop = prompt('Enter the ending stop:');
  
// //     // Update the ticket.html file with the user's input
// //     const ticketSection = document.querySelector('.ticket-section');
// //     const ticket = ticketSection.querySelector('div');
  
// //     // Update the bus number
// //     ticket.querySelector('#busno').textContent = busNo;
  
// //     // Update the discounted fare
// //     ticket.querySelector('#discountedfare').textContent = discountedFare;
  
// //     // Update the bus route
// //     ticket.querySelector('#busroute').textContent = busRoute;
  
// //     // Update the original fare
// //     ticket.querySelector('#originalfare').textContent = originalFare;
  
// //     // Update the booking date and time
// //     ticket.querySelector('#booking_date_and_time').textContent = bookingDateAndTime;
  
// //     // Update the number of tickets
// //     ticket.querySelector('#no-of_tickets').textContent =tickets;
  
// //     // Update the starting stop
// //     ticket.querySelector('#start').textContent = startingStop;
  
// //     // Update the ending stop
// //     ticket.querySelector('#stop').textContent = endingStop;
// //   });



// // new one 

// // Add an event listener to the "All ticket" button
// document.getElementById('all-ticket').addEventListener('click', function() {
//   // Prompt the user for the bus number
//   const busNo = prompt('Enter the bus number:');

//   // Prompt the user for the discounted fare
//   const discountedFare = prompt('Enter the discounted fare:');

//   // Prompt the user for the bus route
//   const busRoute = prompt('Enter the bus route:');

//   // Prompt the user for the original fare
//   const originalFare = prompt('Enter the original fare:');

//   // Prompt the user for the booking date and time
//   const bookingDateAndTime = prompt('Enter the booking date and time (DD Mon,YY | HH:MM AM/PM):');

//   // Prompt the user for the number of tickets
//   const tickets = prompt('Enter the number of tickets:');

//   // Prompt the user for the starting stop
//   const startingStop = prompt('Enter the starting stop:');

//   // Prompt the user for the ending stop
//   const endingStop = prompt('Enter the ending stop:');

//   // Save the updated values to localStorage
//   localStorage.setItem('busNo', busNo);
//   localStorage.setItem('discountedFare', discountedFare);
//   localStorage.setItem('busRoute', busRoute);
//   localStorage.setItem('originalFare', originalFare);
//   localStorage.setItem('bookingDateAndTime', bookingDateAndTime);
//   localStorage.setItem('tickets', tickets);
//   localStorage.setItem('startingStop', startingStop);
//   localStorage.setItem('endingStop', endingStop);

//   // Update the ticket.html file with the user's input
//   const ticketSection = document.querySelector('.ticket-section');
//   const ticket = ticketSection.querySelector('div');

//   // Update the bus number
//   ticket.querySelector('#busno').textContent = busNo;

//   // Update the discounted fare
//   ticket.querySelector('#discountedfare').textContent = discountedFare;

//   // Update the bus route
//   ticket.querySelector('#busroute').textContent = busRoute;

//   // Update the original fare
//   ticket.querySelector('#originalfare').textContent = originalFare;

//   // Update the booking date and time
//   ticket.querySelector('#booking_date_and_time').textContent = bookingDateAndTime;

//   // Update the number of tickets
//   ticket.querySelector('#no-of_tickets').textContent = tickets;

//   // Update the starting stop
//   ticket.querySelector('#start').textContent = startingStop;

//   // Update the ending stop
//   ticket.querySelector('#stop').textContent = endingStop;
// });

// // Load the saved values from localStorage when the page loads
// window.addEventListener('load', function() {
//   const busNo = localStorage.getItem('busNo');
//   const discountedFare = localStorage.getItem('discountedFare');
//   const busRoute = localStorage.getItem('busRoute');
//   const originalFare = localStorage.getItem('originalFare');
//   const bookingDateAndTime = localStorage.getItem('bookingDateAndTime');
//   const tickets = localStorage.getItem('tickets');
//   const startingStop = localStorage.getItem('startingStop');
//   const endingStop = localStorage.getItem('endingStop');

//   if (busNo && discountedFare && busRoute && originalFare && bookingDateAndTime && tickets && startingStop && endingStop) {
//     const ticketSection = document.querySelector('.ticket-section');
//     const ticket = ticketSection.querySelector('div');

//     // Update the bus number
//     ticket.querySelector('#busno').textContent = busNo;

//     // Update the discounted fare
//     ticket.querySelector('#discountedfare').textContent = discountedFare;

//     // Update the bus route
//     ticket.querySelector('#busroute').textContent = busRoute;

//     // Update the original fare
//     ticket.querySelector('#originalfare').textContent = originalFare;

//     // Update the booking date and time
//     ticket.querySelector('#booking_date_and_time').textContent = bookingDateAndTime;

//     // Update the number of tickets
//     ticket.querySelector('#no-of_tickets').textContent = tickets;

//     // Update the starting stop
//     ticket.querySelector('#start').textContent = startingStop;

//     // Update the ending stop
//     ticket.querySelector('#stop').textContent = endingStop;
//   }
// });




// new on to 

// Add an event listener to the "All ticket" button
document.getElementById('all-ticket').addEventListener('click', function() {
  // Prompt the user for the bus number
  const busNo = prompt('Enter the bus number:');

  // Prompt the user for the discounted fare
  const discountedFare = prompt('Enter the discounted fare:');

  // Prompt the user for the bus route
  const busRoute = prompt('Enter the bus route:');

  // Prompt the user for the original fare
  const originalFare = prompt('Enter the original fare:');

  // Prompt the user for the booking date and time
  const bookingDateAndTime = prompt('Enter the booking date and time (DD Mon,YY | HH:MM AM/PM):');

  // Prompt the user for the number of tickets
  const tickets = prompt('Enter the number of tickets:');

  // Prompt the user for the starting stop
  const startingStop = prompt('Enter the starting stop:');

  // Prompt the user for the ending stop
  const endingStop = prompt('Enter the ending stop:');

  // Save the updated values to sessionStorage
  sessionStorage.setItem('busNo', busNo);
  sessionStorage.setItem('discountedFare', discountedFare);
  sessionStorage.setItem('busRoute', busRoute);
  sessionStorage.setItem('originalFare', originalFare);
  sessionStorage.setItem('bookingDateAndTime', bookingDateAndTime);
  sessionStorage.setItem('tickets', tickets);
  sessionStorage.setItem('startingStop', startingStop);
  sessionStorage.setItem('endingStop', endingStop);

  // Update the ticket.html file with the user's input
  const ticketSection = document.querySelector('.ticket-section');
  const ticket = ticketSection.querySelector('div');

  // Update the bus number
  ticket.querySelector('#busno').textContent = busNo;

  // Update the discounted fare
  ticket.querySelector('#discountedfare').textContent = discountedFare;

  // Update the bus route
  ticket.querySelector('#busroute').textContent = busRoute;

  // Update the original fare
  ticket.querySelector('#originalfare').textContent = originalFare;

  // Update the booking date and time
  ticket.querySelector('#booking_date_and_time').textContent = bookingDateAndTime;

  // Update the number of tickets
  ticket.querySelector('#no-of_tickets').textContent = tickets;

  // Update the starting stop
  ticket.querySelector('#start').textContent = startingStop;

  // Update the ending stop
  ticket.querySelector('#stop').textContent = endingStop;
});

// Load the saved values from sessionStorage when the page loads
window.addEventListener('load', function() {
  const busNo = sessionStorage.getItem('busNo');
  const discountedFare = sessionStorage.getItem('discountedFare');
  const busRoute = sessionStorage.getItem('busRoute');
  const originalFare = sessionStorage.getItem('originalFare');
  const bookingDateAndTime = sessionStorage.getItem('bookingDateAndTime');
  const tickets = sessionStorage.getItem('tickets');
  const startingStop = sessionStorage.getItem('startingStop');
  const endingStop = sessionStorage.getItem('endingStop');

  if (busNo && discountedFare && busRoute && originalFare && bookingDateAndTime && tickets && startingStop && endingStop) {
    const ticketSection = document.querySelector('.ticket-section');
    const ticket = ticketSection.querySelector('div');

    // Update the bus number
    ticket.querySelector('#busno').textContent = busNo;

    // Update the discounted fare
    ticket.querySelector('#discountedfare').textContent = discountedFare;

    // Update the bus route
    ticket.querySelector('#busroute').textContent = busRoute;

    // Update the original fare
    ticket.querySelector('#originalfare').textContent = originalFare;

    // Update the booking date and time
    ticket.querySelector('#booking_date_and_time').textContent = bookingDateAndTime;

    // Update the number of tickets
    ticket.querySelector('#no-of_tickets').textContent = tickets;

    // Update the starting stop
    ticket.querySelector('#start').textContent = startingStop;

    // Update the ending stop
    ticket.querySelector('#stop').textContent = endingStop;
  }
});