import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';


export default class DataLesson extends LightningElement {
    
    // exposed 
    @api recordId;
    @api objectApiName;
    @api title;
    
    fields = [NAME_FIELD, EMAIL_FIELD];
    
    // handleAccountCreated(){
    //     // Run code when account is created.
    // }
    
}