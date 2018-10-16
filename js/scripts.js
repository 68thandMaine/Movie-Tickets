var movie = "";
var time = "";
var age = "";


function Ticket(movie, time, age, ticket) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.ticket = ticket;

};
Ticket.prototype.ticketInfo = function(){
  return this.movie + " " + this.time + " " + this.age;
}

Ticket.prototype.price = function(){
  var moviePrice = 0;
  if ((this.age > 10 && this.age < 65)&&(this.time===3)){
    moviePrice+=14;
   console.log(moviePrice);
  }

  else if (this.age >= 65 || this.age <= 10){
    moviePrice+=5;
    console.log(moviePrice);
  }

  else if ((this.age > 10 && this.age < 65)&&(this.time===1 || this.time===2)){
      moviePrice+=10;
      console.log(moviePrice);
  }

  else {
    alert ("Try again");
  }
  return moviePrice;
};

$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();

    var movie = parseInt($("#movie").val());
    var time = parseInt($("#time").val());
    var age = parseInt($("#age").val());
    console.log(movie);
    console.log(time);
    console.log(age);
    var newTicket = new Ticket(movie, time, age);
    console.log(newTicket);
    newTicket.price();

  });

});
