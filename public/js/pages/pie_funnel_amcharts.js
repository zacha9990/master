"use strict";
$(document).ready(function () {

//      ==============================  Simple pie chart========================
    AmCharts.makeChart( "amchart1", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
            "country": "LTU",
            "litres": 501.9,
            "color":'#329cff'
        }, {
            "country": "CZE",
            "litres": 301.9,
            "color":'#5aca82'
        }, {
            "country": "IRL",
            "litres": 201.1,
            "color":'#007bb8'
        }, {
            "country": "DEU",
            "litres": 165.8,
            "color":'#fcb410'
        }, {
            "country": "AUS",
            "litres": 139.9,
            "color":'#f86a67'
        }, {
            "country": "AUT",
            "litres": 128.3,
            "color":'#31d0d6'
        }, {
            "country": "UK",
            "litres": 99,
            "color":'#937eff'
        }, {
            "country": "BEL",
            "litres": 60,
            "color":'#31d0d6'
        }, {
            "country": "NLD",
            "litres": 50,
            "color":'#f86a67'
        } ],
        "valueField": "litres",
        "titleField": "country",
        "colorField": "color",
        "balloon":{
            "fixedPosition":true
        },
        "export": {
            "enabled": true
        }
    } );
//    =====================    End of simple pie chart==========================

//      ================================  Donut chart with radial gradant=====================
    AmCharts.makeChart("amchart2", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "40%",
        "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        "dataProvider": [{
            "country": "LTU",
            "litres": 501.9,
            'color':'#937eff'
        }, {
            "country": "CZE",
            "litres": 301.9,
            'color':'#fcb410'
        }, {
            "country": "IRL",
            "litres": 201.1,
            'color':'#31d0d6'
        }, {
            "country": "DEU",
            "litres": 165.8,
            'color':'#f86a67'
        }, {
            "country": "AUS",
            "litres": 139.9,
            'color':'#5acs82'
        }, {
            "country": "AUT",
            "litres": 128.3,
            'color':'#007bb8'
        }],
        "balloonText": "[[value]]",
        "valueField": "litres",
        "titleField": "country",
        "colorField": "color",
        "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#FFFFFF",
            "fontSize": 16
        },
        "export": {
            "enabled": true
        }
    });
//    =======================    End of donut chart with radial gradiant======================

//    ===============================    3D pie chart===============================================
    var chart3 =AmCharts.makeChart( "amchart3", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
            "country": "LTU",
            "value": 260,
            "color":'#937eff'
        }, {
            "country": "IRL",
            "value": 201,
            "color":'#329cff'
        }, {
            "country": "DEU",
            "value": 65,
            "color":'#5aca82'
        }, {
            "country": "AUS",
            "value": 39,
            "color":'#fcb410'
        }, {
            "country": "UK",
            "value": 19,
            "color":'#f86a67'
        }, {
            "country": "Latvia",
            "value": 10,
            "color":'#007bb8'
        } ],
        "valueField": "value",
        "titleField": "country",
        "outlineAlpha": 0.4,
        "colorField": "color",
        "depth3D": 15,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 30,
        "export": {
            "enabled": true
        }
    } );
    $(".chart3_input_range").off().on("input change", function() {
        var chart_property3=$(this).data("property");
        var x3=chart3;
        chart3.startDuration=0;
            x3[chart_property3]=this.value;
            chart3.validateNow()
    });
//    ============================    End of 3D pie chart===============================================

//    =============================    3D donut chart================================================
    var chart4 = AmCharts.makeChart( "amchart4", {
        "type": "pie",
        "theme": "light",
        "titles": [ {
            "text": "Visitors countries",
            "size": 16,
            "color":'#329cff'
        } ],
        "dataProvider": [ {
            "country": "USA",
            "visits": 7252,
            "color":'#fcb410'
        }, {
            "country": "CHN",
            "visits": 3882,
            "color":'#937eff'
        }, {
            "country": "JPN",
            "visits": 1809,
            "color":'#f86a67'
        }, {
            "country": "DEU",
            "visits": 1322,
            "color":'#329cff'
        }, {
            "country": "GBR",
            "visits": 1122,
            "color":'#31d0d6'
        }, {
            "country": "FRA",
            "visits": 414,
            "color":'#5aca82'
        }, {
            "country": "IND",
            "visits": 384,
            "color":'#007bb8'
        }, {
            "country": "Esp",
            "visits": 211,
            "color":'#937eff'
        } ],
        "valueField": "visits",
        "titleField": "country",
        "startEffect": "elastic",
        "startDuration": 2,
        "labelRadius": 15,
        "innerRadius": "50",
        "depth3D": 10,
        "colorField": "color",
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 15,
        "export": {
            "enabled": true
        }
    } );
    $(".chart4_input_range").off().on("input change", function() {
        var chart_property4=$(this).data("property");
        var x4=chart4;
        chart4.startDuration=0;
            x4[chart_property4]=this.value;
            chart4.validateNow()
    });
//    ==================================    End of 3D donut chart======================================

//    ========================    Pie chart with legend===============================================
    var chart5 = AmCharts.makeChart("amchart5", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
        "colorField": "color",
        "legend":{
            "position":"bottom",
            "marginRight":100,
            "autoMargins":false
        },
        "innerRadius": "30%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        },
        "dataProvider": [{
            "country": "LTU",
            "litres": 501.9,
            "color":"#329cff"
        }, {
            "country": "CZE",
            "litres": 301.9,
            "color":"#5aca82"
        }, {
            "country": "IRL",
            "litres": 201.1,
            "color":"#007bb8"
        }, {
            "country": "DEU",
            "litres": 165.8,
            "color":"#fcb410"
        }, {
            "country": "AUS",
            "litres": 139.9,
            "color":"#f86a67"
        }, {
            "country": "AUT",
            "litres": 128.3,
            "color":"#31d0d6"
        }, {
            "country": "UK",
            "litres": 99,
            "color":"#937eff"
        }, {
            "country": "BEL",
            "litres": 60,
            "color":"#fcb410"
        }, {
            "country": "NLD",
            "litres": 50,
            "color":"#31d0d6"
        }],
        "valueField": "litres",
        "titleField": "country",
        "export": {
            "enabled": true
        }
    });

    chart5.addListener("init", handleInit5);

    chart5.addListener("rollOverSlice", function(e) {
        handleRollOver5(e);
    });

    function handleInit5(){
        chart5.legend.addListener("rollOverItem", handleRollOver5);
    }

    function handleRollOver5(e){
        var wedge5 = e.dataItem.wedge5.node;
        wedge5.parentNode.appendChild(wedge5);
    }
//    ==============================    End of pie chart with legend==================================

//    ==============================    Pie chart with broken down slices=================================

    var selected;

    var types = [{
        type: "Fossil",
        percent: 70,
        color: "#fcb410",
        subs: [{
            type: "Oil",
            percent: 15
        }, {
            type: "Coal",
            percent: 35
        }, {
            type: "Nuclear",
            percent: 20
        }]
    }, {
        type: "Green",
        percent: 30,
        color: "#5aca82",
        subs: [{
            type: "Hydro",
            percent: 15
        }, {
            type: "Wind",
            percent: 10
        }, {
            type: "Other",
            percent: 5
        }]
    }];

    function generateChartData() {
        var chartData = [];
        for (var i = 0; i < types.length; i++) {
            if (i == selected) {
                for (var x = 0; x < types[i].subs.length; x++) {
                    chartData.push({
                        type: types[i].subs[x].type,
                        percent: types[i].subs[x].percent,
                        color: types[i].color,
                        pulled: true
                    });
                }
            } else {
                chartData.push({
                    type: types[i].type,
                    percent: types[i].percent,
                    color: types[i].color,
                    id: i
                });
            }
        }
        return chartData;
    }

    AmCharts.makeChart("amchart6", {
        "type": "pie",
        "theme": "light",

        "dataProvider": generateChartData(),
        "labelText": "[[title]]: [[value]]",
        "balloonText": "[[title]]: [[value]]",
        "titleField": "type",
        "valueField": "percent",
        "outlineColor": "#FFFFFF",
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "colorField": "color",
        "pulledField": "pulled",
        "titles": [{
            "text": "Click a slice to see the details"
        }],
        "listeners": [{
            "event": "clickSlice",
            "method": function(event) {
                var chart = event.chart;
                if (event.dataItem.dataContext.id != undefined) {
                    selected = event.dataItem.dataContext.id;
                } else {
                    selected = undefined;
                }
                chart.dataProvider = generateChartData();
                chart.validateData();
            }
        }],
        "export": {
            "enabled": true
        }
    });
//    ===================================    End of pie chart with broken down slices===========================

//    ===========================================    Funnel chart========================================
    var chart7 = AmCharts.makeChart( "amchart7", {
        "type": "funnel",
        "theme": "light",
        "dataProvider": [ {
            "title": "Website visits",
            "value": 300,
            "color":'#329cff'
        }, {
            "title": "Downloads",
            "value": 123,
            "color":'#937eff'
        }, {
            "title": "Requested prices",
            "value": 98,
            "color":'#5aca82'
        }, {
            "title": "Contacted",
            "value": 72,
            "color":'#31d0d6'
        }, {
            "title": "Purchased",
            "value": 35,
            "color":'#fcb410'
        }, {
            "title": "Asked for support",
            "value": 25,
            "color":'#f86a67'
        }, {
            "title": "Purchased more",
            "value": 18,
            "color":'#007bb8'
        } ],
        "titleField": "title",
        "marginRight": 160,
        "marginLeft": 15,
        "labelPosition": "right",
        "funnelAlpha": 0.9,
        "valueField": "value",
        "colorField": "color",
        "startX": 0,
        "neckWidth": "40%",
        "startAlpha": 0,
        "outlineThickness": 1,
        "neckHeight": "30%",
        "balloonText": "[[title]]:<b>[[value]]</b>",
        "export": {
            "enabled": true
        }
    } );
    $(".chart7_input_range").off().on("input change", function() {
        var chart_property7=$(this).data("property");
        var x7=chart7;
        chart7.startDuration=0;
            x7[chart_property7]=this.value;
            chart7.validateNow()
    });
//    =================================    End of funnel chart==============================================

//    ===================================    3D Funnel chart====================================
    var chart8 = AmCharts.makeChart( "amchart8", {
        "type": "funnel",
        "theme": "light",
        "dataProvider": [ {
            "title": "Website visits",
            "value": 200,
            "color":'#937eff'
        }, {
            "title": "Downloads",
            "value": 123,
            "color":'#31d0d6'
        }, {
            "title": "Requested price list",
            "value": 98,
            "color":'#f86a67'
        }, {
            "title": "Contaced for more info",
            "value": 72,
            "color":'#fcb410'
        }, {
            "title": "Purchased",
            "value": 35,
            "color":'#007bb8'
        }, {
            "title": "Contacted for support",
            "value": 35,
            "color":'#5aca82'
        }, {
            "title": "Purchased additional products",
            "value": 26,
            "color":'#329cff'
        } ],
        "balloon": {
            "fixedPosition": true
        },
        "valueField": "value",
        "titleField": "title",
        "marginRight": 240,
        "marginLeft": 50,
        "startX": -500,
        "depth3D": 100,
        "angle": 40,
        "colorField":'color',
        "outlineAlpha": 1,
        "outlineColor": "#FFFFFF",
        "outlineThickness": 2,
        "labelPosition": "right",
        "balloonText": "[[title]]: [[value]]n[[description]]",
        "export": {
            "enabled": true
        }
    } );
    $(".chart8_input_range").off().on("input change", function() {
        var chart_property8=$(this).data("property");
        var x8=chart8;
        chart8.startDuration=0;
            x8[chart_property8]=this.value;
            chart8.validateNow()
    });
//    ====================================    End of 3D funnel chart==================================
});