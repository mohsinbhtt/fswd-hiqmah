function cartAmount(purchase){
    let amount
    if (0<purchase && purchase<=499){
        amount = purchase
    }
    else if (500<purchase && purchase<=999){
        amount = purchase - (purchase * 0.10)
    }
    else if (1000<purchase && purchase<=1999){
        amount = purchase - (purchase * 0.15) 
    }
    else {
        amount = purchase - (purchase * .25)
    }
    return amount
}

function istpurchaseVerification(isfirstTime,amount){
    let firstpurchaseDiscount
    if(isfirstTime === 'yes'){
        isfirstTime = true
        firstpurchaseDiscount = amount * 0.05
    }
    else{
        firstpurchaseDiscount = 0
    }
    return firstpurchaseDiscount
}

function couponVerification(hasCoupon){
    let couponDiscount
    if (hasCoupon === 'yes'){
        hasCoupon = true
        couponDiscount = 100
    }
    else {
        hasCoupon = false
        couponDiscount = 0
    }
    return couponDiscount
}

function getFinalPrice(finalPrice){
    let purchase = Number(prompt('Your Amount'))
    let isfirstTime = prompt('Is this ur first time?').trim().toLowerCase()
    let hasCoupon = prompt('Do you have a coupon?').trim().toLowerCase()

    amountDiscountVal = cartAmount(purchase)
    firstPurchaseDiscountVal = istpurchaseVerification(isfirstTime,amounts)
    couponDiscountVal = couponVerification(hasCoupon)
    finalPrice = (amountDiscountVal - firstPurchaseDiscountVal - couponDiscountVal) 
    finalPrice += finalPrice * 0.18
    return finalPrice}

getFinalPrice()

