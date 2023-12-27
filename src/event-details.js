import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './searchevents.js';

class EventDetails extends PolymerElement{
 static get template(){
return html
`
<link rel = "import"  
         href = "bower_components/iron-flex-layout/classes/iron-flex-layout.html">  
<style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        margin: 20px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }

      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }
    </style>
    <search-events totalevents={{events.length}} noofevents={{noofevents}} search-text={{searchedValue}} ></search-events>
    [[searchTheEvent(searchedValue)]]
    <p>{{searchedValue}}</p>
    <table class="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>HeldOn</th>
          <th>Location</th>
          <th>ConductBy</th>
        </tr>
      </thead>
      <tbody>
        <template is="dom-repeat" items="{{filteredEvents}}">
          <tr>
            <td>{{item.name}}</td>
            <td>{{_formatDateTime(item.date)}}</td>
            <td>{{item.location}}</td>
            <td>{{item.conductby}}</td>
          </tr>
        </template>
      </tbody>
    </table>`
 }
 static get properties() {
    return {
      events: {
        type: Array,
        value: () => [
          { name: 'Java Training', date: '2023-01-01T10:00:00', location: 'Location1',conductby: 'Ranjith' },
          { name: 'Polymer', date: '2023-02-15T14:00:00', location: 'Location2',conductby: 'Priya'  },
          { name: 'Angular', date: '2023-03-30T18:00:00', location: 'Location3',conductby: 'Elangovan'  },
        ],
      },
      filteredEvents: {
        type: Array,
        computed: '_computeFilteredEvents(events, searchedValue)',
      },
      noofevents:{
        type:Number,
        value:''
      }
    };
  }
  _formatDateTime(datetime) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(datetime).toLocaleString(undefined, options);
  }
  searchTheEvent(searchedValue){
    console.log(searchedValue)
  }
  _computeFilteredEvents(events, searchedValue) {
    if (!searchedValue) {
        this.noofevents=events.length
      return events;
    }
    const lowerSearchValue = searchedValue.toLowerCase();
    const filteredEvents = events.filter(event =>
      event.name.toLowerCase().includes(lowerSearchValue) ||
      event.date.includes(lowerSearchValue)||
      event.location.toLowerCase().includes(lowerSearchValue) ||
      event.conductby.toLowerCase().includes(lowerSearchValue)
    );
    console.log("filter events",filteredEvents)
    this.noofevents = filteredEvents.length;
    return filteredEvents;
  }

}
customElements.define("event-details",EventDetails)