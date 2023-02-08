import { api, LightningElement, track  } from 'lwc';

export default class Fetcha extends LightningElement {
    @api durl = 'Image Profile'
    @api imgurl = "https://www.w3schools.com/w3images/team2.jpg"
    @api isShow = false


    @track data;

    connectedCallback() {
        // http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5 for limit response
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5', {method: 'GET'})
        .then(response => response.json())
            .then(data => {
                this.data = data;
            });
    }
}


// METHOD 2 AXIOS 

// import axios from 'axios';

// export default class Fetcha extends LightningElement {
//     @track data;

//     connectedCallback() {
//         axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
//             .then(response => {
//                 this.data = response.data;
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }
// }