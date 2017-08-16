// tried to hide content and then show it once login details were entered but coiuldn't get it to work :/

// $(".account").hide();
//   if($("#account-name").val() === "maciek" && $("#account-password").val() === "0000") {
//     $("form").submit(function() {
//       $(".account").show();
//     })
//   }



// Logic code  //////////////////////////////////////////////////////////////////
const bank = {
  checking: 0,
  // Equivalent to:
  // deposit: function (account, amount) {
  deposit(account, amount) {
    this[account] += parseFloat(amount); // Make sure you understand this.
  },
  savings: 0,
  deposit(account, amount) {
    this[account] += parseFloat(amount);
  },
  withdraw(account, amount) {
    this[account] -= parseFloat(amount);
  }
};

// UI/DOM code /////////////////////////////////////////////////////////////////

const render = function () {
  $('#checking-balance').text('$' + bank.checking);
  $('#savings-balance').text('$' + bank.savings);
  // All DOM updating code will go here
}

////////////////////////////////////////////////////////////

$('#checking-deposit').on('click', function () {
  const amount = $('#checking-amount').val();
  bank.deposit('checking', amount);
  }
  render();
});

$('#checking-withdraw').on('click', function () {
  const amount = $('#checking-amount').val();
  bank.withdraw('checking', amount);
  render();
});

////////////////////////////////////////////////////////////

$('#savings-deposit').on('click', function () {
  const amount = $('#savings-amount').val();
  bank.deposit('savings', amount);
  render();
});

$('#savings-withdraw').on('click', function () {
  const amount = $('#savings-amount').val();
  bank.withdraw('savings', amount);
  render();
});

////////////////////////////////////////////////////////////
