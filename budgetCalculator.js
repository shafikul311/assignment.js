function budgetCalculator( clock, phone, laptop ){
    var priceCalculation = clock *50 + phone *100 + laptop *500;
    return priceCalculation ;
}

var totalPrice = budgetCalculator(20, 20, 20);
console.log(totalPrice);
