import { LightningElement, track } from 'lwc';

export default class EmployeeOnboarding extends LightningElement {
    @track firstName;
    @track lastName;
    @track email;
    @track department;

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleDepartmentChange(event) {
        this.department = event.target.value;
    }

    submitForm() {
        console.log('Employee Name: ', this.firstName);
        console.log('Employee Name: ', this.lastName);
        console.log('Employee Email: ', this.email);
        console.log('Employee Department: ', this.department);

        // vars
        const firstName = this.firstName;
        const lastName = this.lastName;
        const email = this.email;
        const phone = this.phone;

        insertEmployee({ firstName, lastName, email, phone })
        .then(result => {
            console.log('Employee inserted successfully');
        })
    }

}
