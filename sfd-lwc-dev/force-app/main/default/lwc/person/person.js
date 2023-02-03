import { LightningElement } from 'lwc';

export default class Person extends LightningElement {

    user = {
        firstName: "Richard",
        lastName: "Owens"
    };

    updateUser() {
        this.user = {
            firstName: 'Raven',
            lastName: 'Jones'
        }
    }
}