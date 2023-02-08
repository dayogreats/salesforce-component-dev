import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentOutput;
    principal;
    rate;
    year;

    principalOnChange(e){
        this.principal= parseInt(e.target.value);
        
    };

    rateOnChange(e){
        this.year= parseInt(e.target.value);
        
    }
    yearOnChange(e){
        this.rate= parseInt(e.target.value);
    }
    calculateSimple(){
        
        this.currentOutput ='Simple interest is: ' +  (this.principal * this.rate * this.year)/100
    }
}