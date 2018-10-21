"use strict";
$(document).ready(function () {
    $(".sidebar-toggle").on("click", function() {
        setTimeout(function() {
            gmap1.refresh();
            gmap2.refresh();
            gmap3.refresh();
            gmap4.refresh();
            gmap5.refresh();
        }, 200);
    });
    var gmap = $(".gmap");
    gmap.css("height", "400px");
//      =============================  Basic gmap==================================
    var gmap1= new GMaps({
        div: '#basic_gmap',
        lat: 19.670669,
        lng: 78.544070
    });

//    ========================================    End of basic gmap=======================

//      =======================================  Map events=================================
    var gmap2 = new GMaps({
        div: '#map_events',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333,
        dragend: function(e) {
            alert('dragend');
        },
        dblclick:function (e) {
            alert('dblclicked')
        }
    });
//    ===================================    End of map events================================

//    ======================================    Map markers======================================
    var markers = [{
        lat: 18.857447,
        lng: 79.446022,
        title: "Marker #1",
        animation: google.maps.Animation.DROP,
        infoWindow: {
            content: "<strong>Marker #1: HTML Content</strong>"
        }
    }];
    var gmap3 = new GMaps({
        div: "#map_markers",
        lat: 18.857447,
        lng: 79.446022,
        zoom: 10,
        zoomControl: true,
        zoomControlOpt: {
            style: "SMALL",
            position: "TOP_LEFT"
        },
        // scrollwheel: !1
    });
    gmap3.addMarkers(markers);
//    =============================    End of map markers========================================

//    ===========================================    maps types===================================
    var gmap4 = new GMaps({
        el: '#map_type',
        lat: -12.043333,
        lng: -77.028333,
        mapTypeControlOptions: {
            mapTypeIds: ["terrain", "osm", "cloudmade","hybrid","satellite"]
        }
    });
    gmap4.addMapType("osm", {
        getTileUrl: function(coord, zoom) {
            return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 18
    });
    gmap4.addMapType("cloudmade", {
        getTileUrl: function(coord, zoom) {
            return "http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1/256/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "CloudMade",
        maxZoom: 18
    });
    gmap4.setMapTypeId("osm");
//    ===============================    End of map types=========================================

//    =================================    Styled Maps============================================
    var gmap5 = new GMaps({
        div: "#map_style",
        lat: 41.895465,
        lng: 12.482324,
        zoom: 5,
        zoomControl: true,
        zoomControlOpt: {
            style: "SMALL",
            position: "TOP_LEFT"
        }
    });
    var styles = [{
        stylers: [
            { hue: "#329cff" },
            { saturation: -20 }
        ]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
        ]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }];
    gmap5.addStyle({
        styles: styles,
        mapTypeId: "maps_style"
    });

    gmap5.setStyle("maps_style");
//    ===================================    End of styled maps======================================
});