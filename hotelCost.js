function hotelCost(day){

    if( day <= 10 ){
        var price = day * 100;
        return day;
    }
    // return day;
}

var totalHotelCost = hotelCost(8);
console.log(totalHotelCost);