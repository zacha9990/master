"use strict";
$(document).ready(function () {
    $(".sparkline_flip1").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
        type: 'line',
        width: '100%',
        height: '70',
        lineColor: '#5aca82',
        fillColor: '#C1F0F2'
    });

    var barParentdiv2 = $('.sparkline_flip2').closest('div');
    var barCount2 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 210, 212, 211, 210, 212, 211, 213, 212];
    var barSpacing2 = 2;
    $(".sparkline_flip2").sparkline(barCount2, {
        type: 'bar',
        barWidth: (barParentdiv2.width() - (barCount2.length * barSpacing2)) / barCount2.length,
        height: '70',
        width: '100%',
        barSpacing: barSpacing2,
        barColor: '#329cff'
    });


    $(".sparkline_flip3").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
        type: 'line',
        width: '100%',
        height: '70',
        lineColor: '#5aca82',
        fillColor: '#C1F0F2'
    });


//       ==========================     Composite bar========================================
    var barParentdiv8 = $('.sparkline_widget4').closest('div');
    var barCount8 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212];
    var barSpacing8 = 2;
    $(".sparkline_widget4").sparkline(barCount8, {
        type: 'bar',
        width: '100%',
        height: '70',
        barWidth: (barParentdiv8.width() - (barCount8.length * barSpacing8)) / barCount8.length,
        barSpacing: barSpacing8,
        barColor: '#fcb410'
    });
    $('.sparkline_widget4').sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212],
        {
            composite: true,
            fillColor: false,
            width: "100%",
            spotColor: '#f0ad4e',
            lineColor: '#31d0d6'
        });
//       ==============================     End of composite bar================================
//   flip js

    $("#top_widget1, #top_widget2, #top_widget3, #top_widget4").flip({
        axis: 'y',
        trigger: 'hover'
    });

//       ===========================     end of morris smooth line chart==========================


//    =============================    Using svg filters=======================================
    var chartData1 = [{
        "year": "2000",
        "cars": 1691,
        "motorcycles": 987

    }, {
        "year": "2001",
        "cars": 1098,
        "motorcycles": 1210,
        "bicycles": 910
    }, {
        "year": "2002",
        "cars": 975,
        "motorcycles": 1084,
        "bicycles": 670
    }, {
        "year": "2003",
        "cars": 1246,
        "motorcycles": 680,
        "bicycles": 930
    }, {
        "year": "2004",
        "cars": 1218,
        "motorcycles": 1000,
        "bicycles": 1010
    }, {
        "year": "2005",
        "cars": 1913,
        "motorcycles": 473,
        "bicycles": 1770
    }, {
        "year": "2006",
        "cars": 1299,
        "motorcycles": 921,
        "bicycles": 820
    }, {
        "year": "2007",
        "cars": 1110,
        "motorcycles": 860,
        "bicycles": 1050
    }, {
        "year": "2008",
        "cars": 765,
        "motorcycles": 1102,
        "bicycles": 650
    }, {
        "year": "2009",
        "cars": 1145,
        "motorcycles": 950,
        "bicycles": 780
    }, {
        "year": "2010",
        "cars": 1163,
        "motorcycles": 1181,
        "bicycles": 700
    }, {
        "year": "2011",
        "cars": 1780,
        "motorcycles": 705,
        "bicycles": 1470
    }, {
        "year": "2012",
        "cars": 1580,
        "motorcycles": 885
    }];

    var chart1 =  AmCharts.makeChart("amchart1", {
        "type": "serial",
        "theme": "light",
//            "autoMargins": true,
//            "addClassNames": true,
        "zoomOutText": "",
        "defs": {
            "filter": [
                {
                    "x": "-50%",
                    "y": "-50%",
                    "width": "200%",
                    "height": "200%",
                    "id": "blur",
                    "feGaussianBlur": {
                        "in": "SourceGraphic",
                        "stdDeviation": "50"
                    }
                },
                {
                    "id": "shadow",
                    "width": "150%",
                    "height": "150%",
                    "feOffset": {
                        "result": "offOut",
                        "in": "SourceAlpha",
                        "dx": "2",
                        "dy": "2"
                    },
                    "feGaussianBlur": {
                        "result": "blurOut",
                        "in": "offOut",
                        "stdDeviation": "10"
                    },
                    "feColorMatrix": {
                        "result": "blurOut",
                        "type": "matrix",
                        "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
                    },
                    "feBlend": {
                        "in": "SourceGraphic",
                        "in2": "blurOut",
                        "mode": "normal"
                    }
                }
            ]
        },
        "fontSize": 15,
        "pathToImages": "../amcharts/images/",
        "dataProvider": chartData1,
        "dataDateFormat": "YYYY",
        "marginTop": 0,
        "marginRight": 1,
        "marginLeft": 0,
        "autoMarginOffset": 5,
        "categoryField": "year",
        "categoryAxis": {
            "gridAlpha": 0.07,
            "axisColor": "#DADADA",
            "startOnAxis": true,
            "tickLength": 0,
            "parseDates": true,
            "minPeriod": "YYYY"
        },
        "valueAxes": [
            {
                "ignoreAxisWidth":true,
                "stackType": "regular",
                "gridAlpha": 0.07,
                "axisAlpha": 0,
                "inside": true
            }
        ],
        "graphs": [
            {
                "id": "g1",
                "type": "line",
                "title": "Cars",
                "valueField": "cars",
                "fillColors": [
                    "#937eff",
                    "#7fc1ff"
                ],
                "lineAlpha": 0,
                "fillAlphas": 0.8,
                "showBalloon": false
            },
            {
                "id": "g2",
                "type": "line",
                "title": "Motorcycles",
                "valueField": "motorcycles",
                "lineAlpha": 0,
                "fillAlphas": 0.8,
                "fillColors": [
                    "#007bb8",
                    "#bae8ff"
                ],
//                    "lineColor": "",
                "showBalloon": false
            },
            {
                "id": "g3",
                "title": "Bicycles",
                "valueField": "bicycles",
                "lineAlpha": 0.5,
                "lineColor": "#FFFFFF",
                "bullet": "round",
                "dashLength": 2,
                "bulletBorderAlpha": 1,
                "bulletAlpha": 1,
                "bulletSize": 15,
                "stackable": false,
                "bulletColor": "#937eff",
                "bulletBorderColor": "#FFFFFF",
                "bulletBorderThickness": 3,
                "balloonText": "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:16px; color:#000'>[[value]]</div>"
            }
        ],
        "chartCursor": {
            "cursorAlpha": 1,
            "zoomable": false,
            "cursorColor": "#fcb410",
            "categoryBalloonColor": "#fcb410",
            "categoryBalloonDateFormat": "YYYY",
            "balloonPointerOrientation": "vertical"
        },
        "balloon": {
            "borderAlpha": 0,
            "fillAlpha": 0,
            "shadowAlpha": 0,
            "offsetX": 40,
            "offsetY": -50
        }
    });

// we zoom chart in order to have better blur (form side to side)
    chart1.addListener("dataUpdated", zoomChart1);

    function zoomChart1(){
        chart1.zoomToIndexes(1, chartData1.length - 2);
    }
//    =================================    End of using svg filters============================
//-------------------------------- world map--------------------------------------

    $(function () {
        $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
            scale: ['#F5F9FB', '#F5F9FB'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle: {
                initial: {
                    fill: '#ddd'
                }
            },
            markerStyle: {
                initial: {
                    fill: '#4FC1E9',
                    stroke: '#B0B0AF'
                }
            },
            backgroundColor: '#fefefe',
            markers: [
                {latLng: [60, -100], name: 'canada - 1222 views'},
                {latLng: [12.05, -61.75], name: 'Grenada- 5 views'},
                {latLng: [41.90, 12.45], name: 'Vatican City- 1254 views'},
                {latLng: [50, 0], name: 'France - 5254 views'},
                {latLng: [0, 120], name: 'Indonesia - 525 views'},
                {latLng: [-25, 130], name: 'Australia - 4586 views'},
                {latLng: [0, 20], name: 'Africa - 1 views'},
                {latLng: [35, 100], name: 'China -29 views'},
                {latLng: [46, 105], name: 'Mongolia - 2123 views'},
                {latLng: [40, 70], name: 'Kyrgiztan - 24446 views'},
                {latLng: [58, 50], name: 'Russia - 3405 views'},
                {latLng: [35, 135], name: 'Japan - 47566 views'}
            ]
        });
    });


//     ========================   column chart with images on top======================================
    var chart9 = AmCharts.makeChart("amchart91",
        {
            "type": "serial",
            "theme": "light",
            "dataProvider": [{
                "name": "Opera",
                "points": 256,
                "color": "#fcb410",
                "bullet": "img/opera.png"
            }, {
                "name": "Chrome",
                "points": 620,
                "color": "#5aca82",
                "bullet": "img/chrome.png"
            }, {
                "name": "mozilla",
                "points": 357,
                "color": "#937eff",
                "bullet": "img/mozilla.png"
            }, {
                "name": "Explorer",
                "points": 136,
                "color": "#f86a67",
                "bullet": "img/explorer.png"
            }],
            "valueAxes": [{
                "maximum": 800,
                "minimum": 0,
                "axisAlpha": 0,
                "dashLength": 4,
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                "bulletOffset": 15,
                "bulletSize": 24,
                "colorField": "color",
                "cornerRadiusTop": 8,
                "customBulletField": "bullet",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "type": "column",
                "valueField": "points"
            }],
            "marginTop": 0,
            "marginRight": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "autoMargins": false,
            "categoryField": "name",
            "categoryAxis": {
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "tickLength": 0
            },
            "export": {
                "enabled": true
            }
        });
//     ==================================   end of column chart with images on top===============
});
