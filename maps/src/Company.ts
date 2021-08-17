import faker from 'faker';

export class Company{
    company:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    };
    constructor(){
        this.company = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    markerContent():string{
        return 'User Name: ${this.name}';
    }
}