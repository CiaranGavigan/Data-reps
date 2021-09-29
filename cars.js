class vehicle
{
    constructor(make, model, year)
    {
        //constructor initialises variables
        this.make = make;
        this.model = model;
        this.year = year;

    }
    //method that gets the parameters
    information(){
        console.log(`make: ${this.make}`);

        console.log(`model: ${this.model}`);
        console.log(`year: ${this.year}`);
    }




}
//child class 
class Cars extends vehicle
{
    constructor(make, model, year, doors){
        super(make, model, year); // inheritence
        this.doors = doors;
    }
}
let myVehicle = new vehicle('VW', 'Golf', 2000);
myVehicle.information();

information()
{
    super.information();//inheritence
    console.log(`Doors: ${this.doors}`);
}
let myCar = new Cars('VW', 'Polo', 2021, 5);
myCar.information();



