var movie = "";
var time = "";
var age = "";

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.price = function(){
  if (movie === 3 && age === 25 && time === 1){
    alert ("Your movie will cost $14");
  }

  else if (age >= 65 || age <= 10){
    alert ("Your Movie will cost $5");
  }

  else if (age > 10 && age < 65){
      alert ("Your movie will cost $10");
  }

  else {
    alert ("Try again");
  }

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
