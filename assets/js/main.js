function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
     center: {
       //machu picchu
       //lat: -13.1631412,
       //lng: -72.5471516
       //platte st in denver
       lat: 39.757657,
       lng: -105.006953
     },
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.SATELLITE,
     // 90' North is Top of Page
     heading: 90,
     // Tilt map 45 degrees vs 0
     tilt: 45,
   });

 }
