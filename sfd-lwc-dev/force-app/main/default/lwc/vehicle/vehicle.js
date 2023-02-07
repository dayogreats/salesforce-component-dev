import { LightningElement,  track } from 'lwc';

export default class Bidder extends LightningElement {
    @track make; 
    @track model; 
    @track year; 
    @track color= "000000";
    @track show= true

    
    
    colorOnChange(e){
        this.color= e.target.value
    }

    makeOnChange(e){
        this.make= e.target.value
    }

    modelOnChange(e){
        this.brand= e.target.value
    }

    yearOnChange(e){
        this.year= e.target.value
    }


    saveButton(){
        this.show= false
    }

}