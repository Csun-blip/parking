import kumaripati from "../Images/kumaripati.jpg";
import Newroad from "../Images/Newroad.jpg";
import patan from "../Images/patan.jpg";

var icons = { parking: { icon: 'https://tarantelleromane.files.wordpress.com/2016/10/map-marker.png?w=50' } };

 const List = [
    {
    id: "1",
    title : "Kumaripati Parking Area",
    number : "PARKING AREA 01",
    price : "Per Hour RS 20",
    img : kumaripati,
    position: { 
        lat: 53.8679434, 
        lng: -1.6637193 },
        icon: 'parking',  
    },

    {
        id: "2",
        title : "NewRoad Parking Area",
        number : "PARKING AREA 02",
        price : "Per Hour RS 25",
        img : Newroad,
        position: { 
			lat: 53.8679434, 
			lng: -1.6637193 },
        icon: 'parking',    
    },

    {
        id: "3",
        title : "Mangalbazar Parking Area",
        number : "PARKING AREA 03",
        price : "Per Hour RS 10",
        img : patan,
        position: { 
			lat: 53.8679434, 
			lng: -1.6637193 },
        icon: 'parking',    
    }

    ]

    export default List