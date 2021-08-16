
function getInputValue(inputId) {
    const depositeInput = document.getElementById(inputId);
    const depositAmmountText = depositeInput.value;
    const depositAmmount = parseFloat(depositAmmountText);

    // clearInput Field
    depositeInput.value = ('')

    return depositAmmount







}



document.getElementById('deposit-button').addEventListener
    ('click', function () {

        const depositAmmount = getInputValue('deposit-input')


        //    getcurrent deposite

        const depositTotal = document.getElementById('deposit-total');

        const depositTotalText = depositTotal.innerText;
        const previousDepositeTotal = parseFloat(depositTotalText);

        depositTotal.innerText = previousDepositeTotal + depositAmmount;

        // update Balance

        const Balancetotal = document.getElementById('balance-total')
        const BalancetotalText = Balancetotal.innerText;

        const preveouseBalanceTotal = parseFloat(BalancetotalText);

        Balancetotal.innerText = preveouseBalanceTotal + depositAmmount;







    });

// Handel-WithDrew-Button

document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        // const withdraw = document.getElementById('withdraw-input');

        // const withdrawAmmountText = withdraw.value;
        // const withdrawAmmount = parseFloat(withdrawAmmountText)
        const withdrawAmmount = getInputValue('withdraw-input')

        // console.log(withdrawAmmount);

        // updateWithdrawTotal

        const withDrawTotal = document.getElementById('withdraw-total');
        const withDrawTotalText = withDrawTotal.innerText;
        const withDrawTotalAmount = parseFloat(withDrawTotalText)

        withDrawTotal.innerText = withDrawTotalAmount + withdrawAmmount;


        // Balancetotal
        const balanceTotal = document.getElementById('balance-total');

        const balanceTotalText = balanceTotal.innerText;

        const preveouseBalanceTotal = parseFloat(balanceTotalText);

        balanceTotal.innerText = preveouseBalanceTotal - withdrawAmmount;









    })