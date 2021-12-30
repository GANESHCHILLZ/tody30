/*
// let Ranining = false;
// let  cloudy = false;
// if (Ranining || cloudy){
//     console.log("Don't forget to take umbrella! ");
// }else{
//     console.log("ENjoy you weather")

//     }

//if hour is between 12AM to 1Pm_-> good moring
//Else if the hour is between 1pm to 5pm -> good afternoon 
//Else hour is between 5pm to 12Am -> good evening

let hour = new Date().getHours();

if (hour >= 0 && hour <= 13) {
    console.log("Good Morning");
}
else if (hour >= 13 && hour <= 17) {
    console.log("GOOd Afternoon");
}
else {
    console.log("Good evening");
}
*/

///////////////////////////////////////////////////////////
// class Car {
//     constructor(name, wheels, doors, engine) {
//         this.name = name;
//         this.wheels = wheels;
//         this.door = doors;
//         this.engine = engine;
//     }
// }

// const ferrai = new Car(" Ferrari", 4, 2, "v8");
// const venue = new Car(" Venue", 4, 2, "v3");
// const bmw = new Car(" Bmw x6", 4, 2, "v6");
// const Toyotalandcruiser = new Car(" Toyota land cruiser", 4, 5, "v8");

// console.log(ferrai);
/////////////////////////////////////////////////////////


class Account {
    constructor(name, accno, balance) {
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }

    getBalance() {
        return 'THE balance is:₹ ${this.balance}';
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount, this.name;
            return this.getBalance();

        }
        else
            return 'INsufficient balance. ${this.getBalance()}';
    }

    deposit(amount) {
        if (this.balance + amount) {
            this.balance = this.balance + amount, this.name;
            return this.getBalance();
        }
        else
            return 'balance.${this.getBalance ()}';

    }

    transfer(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount, this.name;
            return this.getBalance();

        }
        else
            return 'INsufficient balance to transfer:$ {this.getBalance()}' ;

    }

}

const ganesh = new Account("GANESH", 150, 1_00_000);
const gokul = new Account("GOKUL", 133, 12_00_000);

console.log(ganesh);
console.log(ganesh.transfer(10000));

//console.log(ganesh.withdraw(200));

//console.log(ganesh.withdraw(50_000));
//console.log(ganesh.deposit(1000));




