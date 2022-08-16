/*
1. Add event handler with the widthdraw button
2. get event widthdraw amont from the input field
2.5 also make sure to convert the input a number by using parsolefloat
3.get previous withdraw total
4. total calculatar
5. total amonnt set
5.6 get the  previous total balance 

7. clera the  input
*/
// step-1
 document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('btn-widthdraw taka width')

    const withdrawField= document.getElementById('withdraw-field');
    const newWithDrawAmountString= withdrawField.value;
    const newWidthDrawAmount =parseFloat(newWithDrawAmountString);
    //console.log(newWidthDrawAmount);

    /// steap-3
    const withdrawtotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withdrawtotalElement.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
    // step-4
     const currentWithdrawTotal=previousWithdrawTotal+newWidthDrawAmount;
     withdrawtotalElement.innerText= currentWithdrawTotal;
   // step-5
   const balanceTotalElement= document.getElementById('balance-total');
   const previousBalanceTotalString= balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   //6
   const newBalanceTotal= previousBalanceTotal - newWidthDrawAmount;
   balanceTotalElement.innerText=newBalanceTotal;

   //console.log(previousBalanceTotal);

    //  
    withdrawField.value='';

    
 })