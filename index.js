//oops project
//start
// Base clas
class Account {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
    }
    display() {
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}
// Derived class SavingsAccount
class SavingsAccount extends Account {
    interestRate;
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
        console.log(`Applied interest of ${interest}. New balance is ${this.balance}.`);
    }
}
// Derived class CurrentAccount
class CurrentAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Overdraft limit exceeded");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
    }
}
// Example usage
const savings = new SavingsAccount(12345, 1000, 5);
const current = new CurrentAccount(67890, 2000, 500);
savings.display();
savings.deposit(200);
savings.applyInterest();
current.display();
current.withdraw(2100);
current.withdraw(2500);
//class book deatil
class Book {
    title;
    author;
    isbn;
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`);
    }
}
// Derived class EBook
class EBook extends Book {
    fileSize; // in MB
    format; // e.g., PDF, EPUB
    constructor(title, author, isbn, fileSize, format) {
        super(title, author, isbn);
        this.fileSize = fileSize;
        this.format = format;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`File Size: ${this.fileSize}MB, Format: ${this.format}`);
    }
}
// Derived class PrintedBook
class PrintedBook extends Book {
    pageCount;
    coverType; // e.g., Hardcover, Paperback
    constructor(title, author, isbn, pageCount, coverType) {
        super(title, author, isbn);
        this.pageCount = pageCount;
        this.coverType = coverType;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Page Count: ${this.pageCount}, Cover Type: ${this.coverType}`);
    }
}
// Example usage
const ebook = new EBook("TypeScript Basics", "John Doe", "1234567890", 5, "PDF");
const printedBook = new PrintedBook("Learning TypeScript", "Jane Smith", "0987654321", 300, "Hardcover");
ebook.displayInfo();
printedBook.displayInfo();
export {};
