

//kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

// budgetCalculator 

function budgetCalculator(watch,mobile,laptop){
    if(watch < 0|| mobile < 0|| laptop < 0){
        totalPrice = "please input valid";
    }

    else if(watch > 0 && mobile == 0 && laptop == 0){
         watchPrice = watch * 50;
         totalPrice = watchPrice;
        }

    else if(mobile > 0 && watch > 0 && laptop == 0){
        watchPrice = watch * 50;
        mobilePrice = mobile * 100;
        totalPrice = watchPrice + mobilePrice;
    }

    else{
         watchPrice = watch * 50;
         mobilePrice = mobile * 100;
         laptopPrice = laptop * 500;
         totalPrice = watchPrice + mobilePrice + laptopPrice;
        

    }
    return totalPrice;
}

// hotelCost

function hotelCost(days){
    var totalCost = 0;
    if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var first= 10* 100;
        var remaining = days - 10;
        var second = remaining * 80;
        totalCost = first+ second;
    }
    else{
        var first = 10 * 100;
        var second = 10 * 80;
        var remaining = days - 20;
        var third = remaining * 50;
        totalCost = first + second + third;
    }
    return  totalCost;
}

// megaFriend

function megaFriend(friendName){
    var myEarlyFriend = friendName[0];
    for(var i = 0; i < friendName.length; i++){
    var element = friendName[i];
    if( element.length > myEarlyFriend.length){
        myEarlyFriend = element;
    }

    } return myEarlyFriend;
}
   