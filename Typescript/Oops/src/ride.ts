//static class to represent a Ride
//if we use static dont need to put this. to access static property or method we can use class name directly

class Ride {
    static baseFare: number = 5; //static property
    constructor(
        public customerName: string,
        public startLocation: string,
        public endLocation: string
    ){}
    startRide(){
        Ride.baseFare += 2; //accessing static property
    }
}
const ride1 = new Ride("Bob", "Point A", "Point B");
ride1.startRide();
const ride2 = new Ride("Alice", "Point C", "Point D");
ride2.startRide();
console.log(`Base Fare after starting ride: $${Ride.baseFare}`);