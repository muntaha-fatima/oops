//oops project
//start
// Base clas
class Account {
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
    }

    display(): void {
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}

// Derived class SavingsAccount
class SavingsAccount extends Account {
    interestRate: number;

    constructor(accountNumber: number, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
        console.log(`Applied interest of ${interest}. New balance is ${this.balance}.`);
    }
}

// Derived class CurrentAccount
class CurrentAccount extends Account {
    overdraftLimit: number;

    constructor(accountNumber: number, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Overdraft limit exceeded");
        } else {
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
    title: string;
    author: string;
    isbn: string;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    displayInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`);
    }
}

// Derived class EBook
class EBook extends Book {
    fileSize: number; // in MB
    format: string; // e.g., PDF, EPUB

    constructor(title: string, author: string, isbn: string, fileSize: number, format: string) {
        super(title, author, isbn);
        this.fileSize = fileSize;
        this.format = format;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`File Size: ${this.fileSize}MB, Format: ${this.format}`);
    }
}

// Derived class PrintedBook
class PrintedBook extends Book {
    pageCount: number;
    coverType: string; // e.g., Hardcover, Paperback

    constructor(title: string, author: string, isbn: string, pageCount: number, coverType: string) {
        super(title, author, isbn);
        this.pageCount = pageCount;
        this.coverType = coverType;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Page Count: ${this.pageCount}, Cover Type: ${this.coverType}`);
    }
}

// Example usage
const ebook = new EBook("TypeScript Basics", "John Doe", "1234567890", 5, "PDF");
const printedBook = new PrintedBook("Learning TypeScript", "Jane Smith", "0987654321", 300, "Hardcover");

ebook.displayInfo();
printedBook.displayInfo();