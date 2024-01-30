class employeedata{
    constructor(name,age,professional,healthdetails){
        this.name=name;
        this.age=age;
        this.professional=professional;
        this.healthdetails=healthdetails;
    }
    displayDetails(){
        console.log('name: ${this.name}');
        console.log('age: ${this.age}');
        console.log('professional: ${this.professional}');
        console.log('healthdetails: ${this.healthdetails}');
    } ;
}
const user1=new employeedata('vamshi',20,'working','good');
user1.displayDetails();
console.log('show 2nd one');
const user2=new employeedata('vamshi',20,'working','good');
user2.displayDetails();
