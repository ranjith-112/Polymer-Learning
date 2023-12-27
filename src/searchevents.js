import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class SearchEvents extends PolymerElement{


    static get template(){
        return html

        `
        <div>
        <label for="searchInput">Search By Events</label>
        <input type="text" id="searchInput" on-input="searchEvents" />
      </div>
        Showing events {{noofevents}} of {{totalevents}}
       
        
        `
    }
    static get properties(){
        return{
            totalevents:{
                type:Number
            },
            noofevents:{
                type:Number
            },
            searchText:{
                type:String,
                notify:true,
                reflectToAttribute:true
            }
        }
    }
searchEvents(event){

    this.searchText=event.target.value


}
// constructor(){
//     super()
// // Adding an event listener to listen for changes to the searchText property
// this.addEventListener('search-text-changed', (event) => {
//     console.log('Search text changed:', event.detail.value);
//   });
// }
  
    
}
customElements.define("search-events",SearchEvents)