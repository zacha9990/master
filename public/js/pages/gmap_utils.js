"use strict";
$(document).ready(function () {
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function() {
            gmap1.refresh();
            gmap2.refresh();
            gmap3.refresh();
            gmap4.refresh();
            gmap5.refresh();
            map_resize();
        }, 200);
    });
    var gmap = $(".gmap");
    gmap.css("height", "400px");

//    ===============================    Gmap context menu============================
    var gmap1 = new GMaps({
        div: '#gmap1',
        lat: -12.043333,
        lng: -77.028333
    });
    gmap1.setContextMenu({
        control: 'map',
        options: [{
            title: 'Add marker',
            name: 'add_marker',
            action: function(e){
                this.addMarker({
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                    title: 'New marker'
                });
                this.hideContextMenu();
            }
        }, {
            title: 'Center here',
            name: 'center_here',
            action: function(e){
                this.setCenter(e.latLng.lat(), e.latLng.lng());
            }
        }]
    });
//    ================================    End of gmap context menu===================

//    =====================================    geofences=============================
    var gmap2 = new GMaps({
        div: '#gmap2',
        lat: -12.043333,
        lng: -77.028333
    });
    var path=[];
    var p = [[-12.040397656836609,-77.03373871559225],[-12.040248585302038,-77.03993927003302],[-12.050047116528843,-77.02448169303511],[-12.044804866577001,-77.02154422636042]];
    for(var i in p){
        var latlng = new google.maps.LatLng(p[i][0], p[i][1]);
        path.push(latlng);
    }
    var polygon = gmap2.drawPolygon({
        paths: path,
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6
    });
    gmap2.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        draggable: true,
        fences: [polygon],
        outside: function(m, f){
            alert('This marker has been moved outside of its fence');
        }
    });
//    ===========================    end of geofences====================================

//    ============================    fusion table layers====================================

    var infoWindow = new google.maps.InfoWindow({});
    var gmap3 = new GMaps({
        div: '#gmap3',
        zoom: 11,
        lat: 16.151530,
        lng: 80.014321
    });
    var markers = [{
        lat: 16.151530,
        lng: 80.014321,
        title: "Marker #1",
        animation: google.maps.Animation.DROP,
        infoWindow: {
            content: "<strong>Marker #1: HTML Content</strong>"
        }
    }];
    gmap3.loadFromFusionTables({
        query: {
            select: '\'Geocodable address\'',
            from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
        },
        suppressInfoWindows: true,
        events: {
            click: function(point){
                infoWindow.setContent('You clicked here!');
                infoWindow.setPosition(point.latLng);
                infoWindow.open(map.map);
            }
        }
    });
    gmap3.addMarkers(markers);
//    =====================================    End of fusion table layers========================

//    =============================    kml and geo rss layers====================================
    var infoWindow4 = new google.maps.InfoWindow({});
    var gmap4 = new GMaps({
        div: '#gmap4',
        zoom: 12,
        lat: 40.65,
        lng: -73.95
    });
    gmap4.loadFromKML({
        url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss',
        suppressInfoWindows: true,
        events: {
            click: function(point){
                infoWindow4.setContent(point.featureData.infoWindowHtml);
                infoWindow4.setPosition(point.latLng);
                infoWindow4.open(gmap4.map);
            }
        }
    });
//    =====================================    End of kml and geo rss layer=========================

//    ==========================    Overlay map types===========================================
    var getTile = function(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div');
        div.innerHTML = coord;
        div.style.width = this.tileSize.width + 'px';
        div.style.height = this.tileSize.height + 'px';
        div.style.background = 'rgba(250, 250, 250, 0.5)';
        div.style.fontFamily = 'Monaco, Andale Mono, Courier New, monospace';
        div.style.fontSize = '10';
        div.style.fontWeight = 'bolder';
        div.style.border = 'dotted 1px #aaa';
        div.style.textAlign = 'center';
        div.style.lineHeight = this.tileSize.height + 'px';
        return div;
    };

    var gmap5 = new GMaps({
        el: '#gmap5',
        lat: -12.043333,
        lng: -77.028333
    });
    gmap5.addOverlayMapType({
        index: 0,
        tileSize: new google.maps.Size(256, 256),
        getTile: getTile
    });
//    ====================================    End of overlay map types==========================

//    ===================================    street view panoramas===================================
    function map_resize() {
        var gmap6 = new GMaps.createPanorama({
            el: '#gmap6',
            lat : 42.3455,
            lng : -71.0983
        });
    }
    map_resize();
//    =================================    End of street view panaromas================================

});