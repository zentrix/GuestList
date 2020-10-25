new Vue({
    el: "#app", 
    data: {
        event: { // creation of event 
            eventDate: 'August 14th - 16th', //creation of properties
            eventTitle: 'Summer Festival!', 
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [], 
        eventCapacity: 25, 
        eventCapacityPercentage: 0
    },
    methods:{
        formSumitted: function(){ //creation of function 
            console.log("method")
            if(this.newNameText .length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText)
                this.newNameText = '',
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity/100)
            }
        }, 
        keyPressed: function(){
            console.log("key pressed")
        }
    },
    computed:{ //computed properties
        sortName: function(){ //function to sort the guestNames
            console.log("computed")
            return this.guestName.sort()
        }
    }, 
    watch:{
        guestName: function(data){
            console.log("watch triggered")
        }
    }, 
    filters: {
        formatName: function(value) {
            return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }, 
});

new Vue({
    el: '#navigation',
    data:{
        appName: "Guest List",
        navLinks: [
            {name: "home", id: 1, url: "https://www.google.com/"},
            {name: "upComing events", id: 2, url: "https://www.amazon.com/"},
            {name: "Guest Benefits", id: 3, url: "https://www.ebay.com/"},
            {name: "Latest News", id: 4, url: "https://www.facebook.com/"}
        ]
    }
})