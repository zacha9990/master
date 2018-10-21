"use strict";

$(document).ready(function() {
    var barParentdiv1 = $('.sparkline_users').closest('div');
    var barCount1 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211];
    var barSpacing1 = 2;
    $(".sparkline_users").sparkline(barCount1, {
        type: 'bar',
        barWidth: (barParentdiv1.width() - (barCount1.length * barSpacing1)) / barCount1.length,
        height: '40',
        width: '100%',
        barSpacing: barSpacing1,
        barColor: '#329cff'
    });
    var barParentdiv2 = $('.sparkline_sales').closest('div');
    var barCount2 = [211, 210, 209, 210, 210, 211, 212, 210, 210, 211];
    var barSpacing2 = 2;
    $(".sparkline_sales").sparkline(barCount2, {
        type: 'bar',
        barWidth: (barParentdiv2.width() - (barCount2.length * barSpacing2)) / barCount2.length,
        height: '40',
        width: '100%',
        barSpacing: barSpacing2,
        barColor: '#f86a67'
    });


    //    main chart js
    //         =============================   Spline chart==========================
    var chartdata = {
        columns: [
            ['Views', 300, 130, 270, 130, 280, 80],
            ['Income', 90, 200, 110, 220, 110, 240]
        ],
        type: 'area-spline'
    };

    function c3_resize() {

        var chart = c3.generate({
            bindto: '#spline_chart',
            data: chartdata,
            oninit: function() {
                this.main.append('rect')
                    .style('fill', 'white')
                    .attr('x', 0.5)
                    .attr('y', -0.5)
                    .attr('width', this.width)
                    .attr('height', this.height)
                    .transition().duration(3000)
                    .attr('x', this.width)
                    .attr('width', 0)
                    .remove();
            },
            color: {
                pattern: ['#007bb8', '#5aca82']
            }
        });

        function shuffleArray(array) {
            var j = [];
            j[0] = array[0]
            for (var i = 1; i < array.length; i++) {
                var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                j[i] = Math.floor((Math.random() * 20 * plusOrMinus) + array[i]);
                j[i] =j[i] < 0 ? -1*j[i] : j[i];
            }
            return j;
        }
        setTimeout(function() {
            setInterval(function() {
                var columns = chartdata.columns;
                columns[0] = shuffleArray(columns[0]);
                columns[1] = shuffleArray(columns[1]);
                chart.load({
                    columns
                });
            }, 1000);
        }, 3000);
    }

    c3_resize();

    $(".sidebar-toggle").on("click", function() {
        setTimeout(function() {
            c3_resize();
        });
    });


    //          ===============================  End of spline chart==========================


    function sparkline_resize() {
        var barParentdiv1 = $('.widget2_bar1').closest('div');
        var barCount1 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212, 209, 210, 209, 210, 210, 211, 212, 210];
        var barSpacing1 = 2;
        $(".widget2_bar1").sparkline(barCount1, {
            type: 'bar',
            barWidth: (barParentdiv1.width() - (barCount1.length * barSpacing1)) / barCount1.length,
            height: '50',
            barSpacing: barSpacing1,
            barColor: '#329cff',
            tooltipSuffix: 'Visitors'
        });

        $(".widget2_bar2").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#5aca82',
            fillColor: '#C1F0F2',
            tooltipSuffix: 'Visitors'
        });

        $(".widget2_bar3").sparkline([209, 210, 209, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212, 212, 210, 210, 211], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#f86a67',
            fillColor: '#fff',
            tooltipSuffix: 'Visitors'
        });

        var barParentdiv4 = $('.widget2_bar4').closest('div');
        var barCount4 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212, 209, 210, 209, 210, 210, 211, 212, 210];
        var barSpacing4 = 2;
        $(".widget2_bar4").sparkline(barCount4, {
            type: 'bar',
            barWidth: (barParentdiv4.width() - (barCount4.length * barSpacing4)) / barCount4.length,
            height: '50',
            barSpacing: barSpacing4,
            barColor: '#937eff',
            tooltipSuffix: 'visitors'
        });
    }

    sparkline_resize();
    $(window).resize(function() {
        setTimeout(function() {
            sparkline_resize();
        })
    })
    //social icon widgets js start
    $(".widget_social_icons").on("mouseenter", function() {
        $(this).find(".widget_social_inner1").css("top", "0");
        $(this).find(".widget_social_inner1 i").css({
            'font-size': '20px'
        });

        $(this).find(".widget_social_inner2").css("display", "table-row");
    }).on("mouseleave", function() {
        $(this).find(".widget_social_inner1").css("top", "20px");
        $(this).find(".widget_social_inner1 i").css({
            'font-size': '45px'
        });
        $(this).find(".widget_social_inner2").css("display", "none");
    });

});

