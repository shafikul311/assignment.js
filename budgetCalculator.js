function budgetCalculator( clock, phone, laptop ){
    var priceCalculation = clock *50 + phone *100 + laptop *500;
    return priceCalculation ;
}

var totalPrice = budgetCalculator(5, 5, 5);
console.log(totalPrice);
