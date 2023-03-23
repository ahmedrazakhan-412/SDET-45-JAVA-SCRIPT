/* Encapsulation in JavaScript refers to the concept of bundling data and functions 
that operate on that data within a single unit, 
and restricting access to the internal details of that unit from the outside world. 
Encapsulation helps to maintain data integrity and reduce coupling between different parts of a program.*/


function BankAccount(initialBalance) {
    
    let balance = initialBalance; // Private variable
  
    function deposit(amount) { // Private method
      balance += amount;
    }
  
    function withdraw(amount) { // Private method
      if (balance >= amount) {
        balance -= amount;
      } else {
        console.log('Insufficient funds');
      }
    }
  
    return { // Public interface
      getBalance: function() {
        return balance;
      },
      deposit: deposit,
      withdraw: withdraw
    };
  }
  
  let account = BankAccount(1000);
  console.log(account.getBalance()); // 1000
  account.deposit(500);
  console.log(account.getBalance()); // 1500
  account.withdraw(2000); // Insufficient funds
  console.log(account.getBalance()); // 1500
  