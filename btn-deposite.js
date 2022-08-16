//console.log('btn-deposite');
// step:1 add event listener to the desposit button

document.getElementById('btn-deposite').addEventListener('click',function(){
    

    //console.log('btn-deposite click')
    //step-2 get the deposite amount from inputfiled
    // for input field use .value
  const depositeField= document .getElementById('deposite-field');
  const newDepositeAmountString=  depositeField.value;
  const newDepositeAmount= parseFloat(newDepositeAmountString);
  console.log(typeof( newDepositeAmount));
  
  
  //console.log(depositeAmount);
  //step-3  get the current deposit total
  //step4: add number to set the total deposit
   const depositToElement= document.getElementById('deposite-total');
   const previousDepositeTotalString= depositToElement.innerText;
   const  previousDepositeTotal= parseFloat(previousDepositeTotalString);
   const currentDepositTotal= previousDepositeTotal + newDepositeAmount;
   // set the total balance current
   depositToElement.innerText= currentDepositTotal;

   //step -5 get ballance current total
  /* const balanceTotalElement= document.getElementById('balance-total');
   const  previousBalanceTotalString=  balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   */
  const balanceTotalElement= document.getElementById('balance-total');
  const previousBalanceTotalString= balanceTotalElement.innerText;
  const previousBalanceTotal= parseFloat(previousBalanceTotalString);

   // step-6:  calcuate balance total
   const currentBalanceTotal= previousBalanceTotal + newDepositeAmount;
   // set the blance total
   balanceTotalElement.innerText=currentBalanceTotal;

   //
   


   
   

   
   
// step-7
   depositeField.value=''; 
})

    