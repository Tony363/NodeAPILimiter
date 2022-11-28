import faker from 'faker';
import {Mappable} from './CustomMap';

export class Company implements Mappable{
    company:string;
    catchPhrase:string;
    color:string = 'red';
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
        return `
        <div>
            <h1>Company Name: ${this.company}</h1>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}