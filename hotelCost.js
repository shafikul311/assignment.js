function hotelCost(day){

    var rentBill = 0;

    if(day<=10){
        rentBill = day*100;  //frist 10 day 100$ day
    }

    else if(day<=20){

        var fristPackage = 10*100; 
        var remain = day - 10;
        var secondPackage = remain*80;   //secondPackege 10 day 800$ day
        rentBill = fristPackage +secondPackage;
    }

    else{

        var fristPackage = 10*100;
        var secondPackage = 10*80;  //thirdPackege after 20 day 50$ day
        var remain = day - 20;
        var thirdPackage = remain*50;
        rentBill = fristPackage +secondPackage +thirdPackage;

    }
    return rentBill;
}

var totalHotelBill = hotelCost(25);
console.log(totalHotelBill);