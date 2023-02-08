import { api, LightningElement, track } from 'lwc';

export default class Person extends LightningElement {
    @api firstName;
    @api lastName;
    @api title = "Welcome to personal bio component"
    @track 
    user = {
        firstName: "Richard",
        lastName: "Owens"
    };

    @api
    updateUser() {
        this.user = {
            firstName: 'Raven',
            lastName: 'Jones'
        }
    }
}