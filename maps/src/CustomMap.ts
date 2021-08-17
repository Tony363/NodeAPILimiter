// Instructions to every other class should
// on how they can be an argument to 'addMarker'
interface Mappable{
    location:{
        lat:number;
        lng:number;
    };
    markerContent():string;
}

export class CustomMap{
    private googleMap:google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom:1,
            center:{
                lat: 0,
                lng:0
            }
        });
    };
    addMarker(marker:Mappable):void{
        const mark = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:marker.location.lat,
                lng:marker.location.lng
            }
        });
        mark.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hi there!'
            })
            infoWindow.open(this.googleMap,mark);
        })
    }
}