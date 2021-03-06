"use strict";
$(document).ready(function () {
    function pie_resize() {

//      ====================     Basic pie chart====================================
        var echart1=echarts.init(document.getElementById('echart_pie1'));
        var option1 = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                data:['Google','Chrome','Opera','Safari','Firefox']
            },
            toolbox: {
                show : true
            },
            color:['#5aca82','#329cff','#fcb410','#937eff','#f86a67'],
            calculable : true,
            series : [
                {
                    name:'Access source',
                    type:'pie',
                    radius : '38%',
                    center: ['45%', '55%'],
                    data:[
                        {value:335, name:'Google'},
                        {value:310, name:'Chrome'},
                        {value:234, name:'Opera'},
                        {value:135, name:'Safari'},
                        {value:1548, name:'Firefox'}
                    ]
                }
            ]
        };
        echart1.setOption(option1);
//      ===========================     End of basic pie chart========================

//      ===============================     Doughnut chart================================
        var echart2=echarts.init(document.getElementById('echart_pie2'));
        var option2 = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                data:['Jan','Feb','Mar','Apr','May']
            },
            toolbox: {
                show : true
            },
            calculable : true,
            color:['#937eff','#fcb410','#5aca82','#329cff','#f86a67'],
            series : [
                {
                    name:'Access source',
                    type:'pie',
                    radius : ['40%', '60%'],
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '12',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'Jan'},
                        {value:310, name:'Feb'},
                        {value:234, name:'Mar'},
                        {value:135, name:'Apr'},
                        {value:1548, name:'May'}
                    ]
                }
            ]
        };
        echart2.setOption(option2);
//      ========================     End of Doughnut chart===================================

//      =========================   Basic  Angular guage chart====================================
        var echart3=echarts.init(document.getElementById('echart_pie3'));
        var option3 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true
            },
            series : [
                {
                    name:'Business indicators',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
                    data:[{value: 50, name: 'Completion rate'}],
                    axisLine: {
                        lineStyle: {
                            color: [[0.2, '#937eff'],[0.8, '#5aca82'],[1, '#329cff']],
                        }
                    }
                }
            ]
        };

        clearInterval(timeTicket3);
        var timeTicket3 = setInterval(function (){
            option3.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            echart3.setOption(option3, true);
        },2000);


        echart3.setOption(option3);
//      ==============================     End of angular gauge chart========================

//      ==================================     Angular gauge chart===============================
        var echart4=echarts.init(document.getElementById('echart_pie4'));
        var option4 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true
            },

            series : [{
                name:'Personalized dashboards',
                type:'gauge',
                center : ['50%', '50%'],
                startAngle: 140,
                endAngle : -140,
                min: 0,
                max: 100,
                precision: 0,
                splitNumber: 10,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [[0.2, '#5aca82'],[0.4, '#fcb410'],[0.8, '#329cff'],[1, '#f86a67']],
                        width: 30
                    }
                },
                axisTick: {
                    show: true,
                    splitNumber: 5,
                    length :8,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    formatter: function(v){
                        switch (v+''){
                            case '10': return 'Weak';
                            case '30': return 'Low';
                            case '60': return 'In';
                            case '90': return 'High';
                            default: return '';
                        }
                    },
                    textStyle: {
                        color: '#333'
                    }
                },
                splitLine: {
                    show: true,
                    length :30,
                    lineStyle: {
                        color: '#eee',
                        width: 2,
                        type: 'solid'
                    }
                },
                pointer : {
                    length : '80%',
                    width : 8,
                    color : 'auto'
                },
                title : {
                    show : true,
                    offsetCenter: ['-65%', -10],
                    textStyle: {
                        color: '#333',
                        fontSize : 15
                    }
                },
                detail : {
                    show : true,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: '#ccc',
                    width: 100,
                    height: 40,
                    offsetCenter: ['-60%', 10],
                    formatter:'{value}%',
                    textStyle: {
                        color: 'auto',
                        fontSize : 30
                    }
                },
                data:[{value: 50, name: 'Dash board'}]
            }]
        };

        clearInterval(timeTicket4);
        var timeTicket4 = setInterval(function (){
            option4.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            echart4.setOption(option4, true);
        },2000);
        echart4.setOption(option4);
//      ===========================     End of angular gauge chart===================================

//      ===================================     Funnel chart=====================================
        var echart5=echarts.init(document.getElementById('echart_pie5'));
        var option5 = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true
            },
            legend: {
                data : ['Show','Click on','Access','Advisory','Order']
            },
            calculable : true,
            series : [
                {
                    name:'Funnel map',
                    type:'funnel',
                    x: '10%',
                    y: 60,
                    //x2: 80,
                    y2: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort : 'descending', // 'ascending', 'descending'
                    gap : 10,
                    color:['#329cff','#fcb410','#937eff','#007bb8','#31d0d6'],
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            label: {
                                show: true,
                                position: 'inside'
                                // textStyle: null
                            },
                            labelLine: {
                                show: false,
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            }
                        }
                    },
                    data:[
                        {value:60, name:'Access'},
                        {value:40, name:'Advisory'},
                        {value:20, name:'Order'},
                        {value:80, name:'Click on'},
                        {value:100, name:'Show'}
                    ]
                }
            ]
        };
        echart5.setOption(option5);
//      =============================     End of funnel chart=======================================

//      ===============================     Multiple funnel chart=================================
        var echart6=echarts.init(document.getElementById('echart_pie6'));
        var option6 = {
            color : ['#329cff','#5aca82','#937eff','#fcb410','#31d0d6'],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true
            },
            legend: {
                data : ['Show','Click on','Access','Advisory','Order']
            },
            calculable : true,
            series : [
                {
                    name:'Expected',
                    type:'funnel',
                    x: '10%',
                    width: '80%',
                    itemStyle: {
                        normal: {
                            label: {
                                formatter: '{b}'
                            },
                            labelLine: {
                                show : false
                            }
                        },
                        emphasis: {
                            label: {
                                position:'inside',
                                formatter: '{b}Expected : {c}%'
                            }
                        }
                    },
                    data:[
                        {value:60},
                        {value:40},
                        {value:20},
                        {value:80},
                        {value:100}
                    ]
                },
                {
                    name:'Actual',
                    type:'funnel',
                    x: '10%',
                    width: '80%',
                    maxSize: '80%',
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 2,
                            label: {
                                position: 'inside',
                                formatter: '{c}%',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        emphasis: {
                            label: {
                                position:'inside',
                                formatter: '{b}Actual : {c}%'
                            }
                        }
                    },
                    data:[
                        {value:30, name:'Access'},
                        {value:10, name:'Advisory'},
                        {value:5, name:'Order'},
                        {value:50, name:'Click on'},
                        {value:80, name:'Show'}
                    ]
                }
            ]
        };
        echart6.setOption(option6);
//      ========================     End of multiple fummel charts===================================

//      =============================     Column line chart=======================================
        var echart7=echarts.init(document.getElementById('echart_pie7'));
        var option7 = {
            tooltip : {
                trigger: 'axis',
                formatter: function (params){
                    return params[0].name + ' : '
                        + (params[0].value - params[1].value > 0 ? '+' : '-')
                        + params[3].value + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                        + params[1].seriesName + ' : ' + params[1].value + '<br/>'
                }
            },
            toolbox: {
                show : true
            },
            legend: {
                data:['This week', 'Last week']
            },
            grid:{
                x:50,
                x2:50
            },
            color:['#31d0d6','#fcb410','#937eff'],
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    min : 200,
                    max : 450
                }
            ],
            series : [
                {
                    name:'This week',
                    type:'line',
                    data:[400, 374, 251, 300, 420, 400, 440]
                },
                {
                    name:'Last week',
                    type:'line',
                    symbol:'none',
                    itemStyle:{
                        normal:{
                            lineStyle: {
                                width:1,
                                type:'dashed'
                            }
                        }
                    },
                    data:[320, 332, 301, 334, 360, 330, 350]
                },
                {
                    name:'Last week',
                    type:'bar',
                    stack: '1',
                    barWidth: 6,
                    itemStyle:{
                        normal:{
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[320, 332, 251, 300, 360, 330, 350]
                },
                {
                    name:'Variety',
                    type:'bar',
                    stack: '1',
                    data:[
                        80, 42,
                        {value : 50, itemStyle:{ normal:{color:'#f86a67'}}},
                        {value : 34, itemStyle:{ normal:{color:'#f86a67'}}},
                        60, 70, 90
                    ]
                }
            ]
        };
        echart7.setOption(option7);
//      =================================     End of column line chart================================
    }
    pie_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            pie_resize();
        });
    });
    $(window).resize(function () {
        pie_resize();
    })
});
