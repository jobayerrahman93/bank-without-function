document.getElementById('deposit-btn').addEventListener('click',function(){

    // deposite input
  let depositInput=document.getElementById('deposit-input');
  let depositAmount=depositInput.value;
  console.log(depositAmount);

// previous deposit balance 

let depositBalance=document.getElementById('deposit-balance');
let previousDepositeBalance=depositBalance.innerText;

// total Deposite balance

let newDepositBalance=parseFloat(depositAmount);
let newPreviousBalance=parseFloat(previousDepositeBalance);

let totalDepositBalance=newPreviousBalance+ newDepositBalance;

depositBalance.innerText=totalDepositBalance;




// add Total balance grid

let prevTotalBalance=document.getElementById('total-balance');
let prevBalance=prevTotalBalance.innerText;
// console.log(prevBalance);

let previousTotalBalance=parseFloat(prevBalance);

let newTotalBalance= previousTotalBalance + newDepositBalance;

prevTotalBalance.innerText=newTotalBalance;




// clear deposit input

depositInput.value='';

});



// Withdraw event handler

document.getElementById('withdraw-btn').addEventListener('click',function()
{

    let withdrawInput=document.getElementById('withdraw-input');
    let withDrawBalanceText=withdrawInput.value;
    let withDrawBalance=parseFloat(withDrawBalanceText);

    // console.log(withDrawBalance);



    // catch withdraw balance

    let catchWithDrawBalance=document.getElementById('withdraw-balance');
    let prevWithDrawBalanceText=catchWithDrawBalance.innerText;

    let prevWithDrawBalance=parseFloat(prevWithDrawBalanceText);

     console.log(prevWithDrawBalance);


    // total withdraw

    let totalWithDraw=prevWithDrawBalance + withDrawBalance;

    catchWithDrawBalance.innerText=totalWithDraw;




    // update balance


    let catchTotalBalance=document.getElementById('total-balance');
    let totalBalanceText=catchTotalBalance.innerText;
    // console.log(prevBalance);

    let prevTotalBalance=parseFloat(totalBalanceText);


    let updateTotalBalance= prevTotalBalance - withDrawBalance;

    catchTotalBalance.innerText=updateTotalBalance;
    console.log(updateTotalBalance);




    // clear withdraw input


    withdrawInput.value='';




});