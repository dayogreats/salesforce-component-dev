import { LightningElement, track } from 'lwc';

export default class Items extends LightningElement {
    @track item

    contacts = [{
        Id:1,
        Name: 'Taylor Swift',
        Title: 'Celebrity'
    }, 
    {
        Id:2,
        Name: 'Bill gate',
        Title: 'Scientist'
    }, 
    {
        Id:3,
        Name: 'Barack Obama',
        Title: 'President'
    }
]


}