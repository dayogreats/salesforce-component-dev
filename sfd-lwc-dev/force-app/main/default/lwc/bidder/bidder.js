import { LightningElement,  track } from 'lwc';

export default class Bidder extends LightningElement {
    @track name; tag; amount; color= "red";
    
    handleOnChange(e){
        this.primaryColor= e.target.value
    }

    tagOnChange(e){
        this.tag= e.target.value
    }

    nameOnChange(e){
        this.name= e.target.value
    }

    amountOnChange(e){
        this.amount= e.target.value
    }

}