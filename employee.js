class Employee {
    constructor(firstName, lastName, social, jobTitle, salary){
        this._firstName = firstName;
        this._lastName = lastName;
        this._social = social;
        this._jobTitle = jobTitle;
        this._salary = salary;
        this._active = true;
    }

    //Mathod
    fire(){
        this._active = false;
    }
    info(){
        if(this._active)
        {
            const info = `${this._firstName}, ${this._lastName}, ${this._social},${this._jobTitle},${this._salary} Per Hour`;
            return info;
        }else{
            const info = "Employee not active";
            return info;
        }
    }
}


class PTEmployee extends Employee{
    constructor(firstName, lastName, social, jobTitle, salary, hoursPerWeek){
        super(firstName, lastName, social, jobTitle, salary);
        this._hoursPerWeek = hoursPerWeek;
    }
        info(){
            if(this._active)
            {
                const info = `${this._firstName}, ${this._lastName}, ${this._social},${this._jobTitle},${this._salary} Per Hour, ${this._hoursPerWeek} hoursPerWeek`;
                return info;
            }else{
                const info = "Employee not active";
                return info;
            }
        
    }

    set hoursPerWeek(newHours){
        if(newHours < 30){
            this._newHours = newHours;
        }else{
            alert("Hours Out of range for part time employee");
        }
    }

}