"use strict";
$(document).ready(function () {
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function() {
            gmap1.refresh();
            gmap2.refresh();
            gmap3.refresh();
        }, 200);
    })
    var gmap = $(".gmap");
    gmap.css("height", "400px");
//    =========================    gmap routes===================================
    var markers = [{
        lat: 17.361492,
        lng: 78.474604,
        title: "Marker #1",
        animation: google.maps.Animation.DROP,
        infoWindow: {
            content: "<strong>Marker #1: HTML Content</strong>"
        }
    }];
    var gmap1= new GMaps({
        div: '#gmap_routes',
        lat: 17.361492,
        lng: 78.474604,
        mapType:'terrain'
    });
    gmap1.drawRoute({
        origin: [17.361492, 78.474604],
        destination: [17.383258, 78.400817],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
    });
    gmap1.addMarkers(markers);
//    ==================================    End of gmap routes=========================

//    ========================    advanced gmaps routes===================================
    var gmap2= new GMaps({
        div: '#gmap_routes2',
        lat: -12.043333,
        lng: -77.028333
    });
    $('#start_travel').click(function(e){
        e.preventDefault();
        gmap2.travelRoute({
            origin: [17.432242, 78.499938],
            destination: [17.254219, 78.680697],
            travelMode: 'driving',
            step: function(e){
                $('#instructions').append('<li>'+e.instructions+'</li>');
                $('#instructions li:eq('+e.step_number+')').delay(450*e.step_number).fadeIn(200, function(){
                    gmap2.setCenter(e.end_location.lat(), e.end_location.lng());
                    gmap2.drawPolyline({
                        path: e.path,
                        strokeColor: '#131540',
                        strokeOpacity: 0.6,
                        strokeWeight: 6
                    });
                });
            }
        });
    });
//    ==========================    End of advamced gamps7================================

//    ===============================    gmap route========================================
    var route;
    $('#forward').attr('disabled', 'disabled');
    $('#back').attr('disabled', 'disabled');
    $('#get_route').click(function(e){
        e.preventDefault();

        var origin = gmap3.markers[0].getPosition();
        var destination = gmap3.markers[gmap3.markers.length-1].getPosition();

        gmap3.getRoutes({
            origin: [origin.lat(), origin.lng()],
            destination: [destination.lat(), destination.lng()],
            travelMode: 'driving',
            callback: function(e){
                route = new GMaps.Route({
                    map: gmap3,
                    route: e[0],
                    strokeColor: '#336699',
                    strokeOpacity: 0.5,
                    strokeWeight: 10
                });
                $('#forward').removeAttr('disabled');
                $('#back').removeAttr('disabled');
            }
        });
        $('#forward').click(function(e){
            e.preventDefault();
            route.forward();

            if(route.step_count < route.steps_length)
                $('#gmap_steps').append('<li>'+route.steps[route.step_count].instructions+'</li>');
        });
        $('#back').click(function(e){
            e.preventDefault();
            route.back();

            if(route.step_count >= 0)
                $('#gmap_steps').find('li').last().remove();
        });
    });
    var gmap3 = new GMaps({
        div: '#gmap_routes3',
        lat: 17.465994,
        lng: 78.367752,
        zoom: 16,
        click: function(e){
            gmap3.addMarker({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            });
        }
    });
//    ==================================    End of gmap route===============================
})