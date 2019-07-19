//building图表
var myChart1 = echarts.init(document.getElementById('building-item3-1'));
var option1 = {
    title: {
        text: '当年写字楼增长趋势',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:25,
        right:10,
    },
    xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
        
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [90, 120, 360, 870, 450, 320],
        barWidth : 15,
        itemStyle:{
            normal:{
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                    offset: 0,
                    color: '#2e8ef7'
                }, {
                    offset: 1,
                    color: '#2cbee6'
                }])

            }
        },
    }]
};
var option1special = {
    title: {
        text: '当年写字楼增长趋势',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:25,
        right:10,
    },
    xAxis: {
        data: ["7月","8月","9月","10月","11月", '12月'],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
        
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [190, 100, 300, 800, 450, 320],
        barWidth : 15,
        itemStyle:{
            normal:{
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                    offset: 0,
                    color: '#2e8ef7'
                }, {
                    offset: 1,
                    color: '#2cbee6'
                }])

            }
        },
    }]
};

myChart1.setOption(option1);




var myChart2 = echarts.init(document.getElementById('building-item3-2'));
var option2 = {
    title: {
        text: '当年总入驻率趋势',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:25,
        right:10,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["1月","2月","3月","4月","5月","6月"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    series: [{
        data: [90, 120, 360, 870, 450, 320],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            width: 0,
            color:'#070b1a',
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7f96ce'
                }, {
                    offset: 1,
                    color: '#4a72cd'
                }])
            }
        },
    }]
}
var option2special = {
    title: {
        text: '当年总入驻率趋势',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:25,
        right:10,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["7月","8月","9月","10月","11月","12月"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    series: [{
        data: [110, 220, 360, 870, 450, 320],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            width: 0,
            color:'#070b1a',
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7f96ce'
                }, {
                    offset: 1,
                    color: '#4a72cd'
                }])
            }
        },
    }]
}
myChart2.setOption(option2);
var year=document.getElementsByClassName('year')[0];
year.onclick=function(){
    if(year.innerHTML==='下半年'){
        myChart2.setOption(option2special);
        myChart1.setOption(option1special);
        year.innerHTML="上半年";
    }else{
        myChart2.setOption(option2);
        myChart1.setOption(option1);
        year.innerHTML="下半年";
    }
    
}

//income
var myChart3 = echarts.init(document.getElementById('income-bltop'));
option3 = {
    "title": {
        "text": '同比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "clockwise":false,
        "startAngle": 360,
        "data": [{
            "name": " ",
            "value": 25,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5,
                }
            }
        }, {
            "value": 75,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 5
                }
            },
        }]
    }]
};
myChart3.setOption(option3);

var myChart3red = echarts.init(document.getElementById('income-bltop2'));
option3red = {
    "title": {
        "text": '同比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "clockwise":false,
        "startAngle": 360,
        "data": [{
            "name": " ",
            "value": 25,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5,
                }
            }
        }, {
            "value": 75,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 5
                }
            },
        }]
    }]
};
myChart3red.setOption(option3red);






var myChart4 = echarts.init(document.getElementById('income-blbottom'));
option4 = {
    "title": {
        "text": '环比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": true,
        "hoverAnimation": false,
        "type": "pie",
        "startAngle": 90,
        "data": [{
            "name": " ",
            "value": 65,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                }
            }
        }, {
            "value": 35,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    // "borderWidth": 25
                }
            },
        }]
    }]
};
myChart4.setOption(option4);


var myChart4red = echarts.init(document.getElementById('income-blbottom2'));
option4red = {
    "title": {
        "text": '环比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": true,
        "hoverAnimation": false,
        "type": "pie",
        "startAngle": 90,
        "data": [{
            "name": " ",
            "value": 65,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                }
            }
        }, {
            "value": 35,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    // "borderWidth": 25
                }
            },
        }]
    }]
};
myChart4red.setOption(option4red);






var myChart5 = echarts.init(document.getElementById('income-bottom-right'));
let xAxisData = [90, 120, 360, 870, 450, 320, 570, 350, 768, 360, 870, 450, 320]
var option5 = {
    title: {
        text: '当年写字楼增长趋势',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:55,
        right:10,
    },
    xAxis: {
        data: ["批发零售","房地产","金融服务","建筑工程","信息产业","居民服务","法律服务","交通运输","住宿餐饮","金融服务","建筑工程","信息产业","居民服务"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
            fontSize: '25px',
            interval:'0',
            formatter:function (value,index){
                if(value.length>2){
                    var newStr1 = value.slice(0,2);
                    var newStr2 = value.slice(2,4);
                    var a=[newStr1,newStr2];
                    var b=a.join("\n"); 
                }
                return b;
            }
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false,
        },
        axisLine:{
            show:false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color:['#2e386c'],
            }
        },
        axisLabel: {
            color:'#6871b9',
        },
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: (9 / xAxisData.length) * 100,
    }, {
        start: 0,
        end: 10,
        height:8,
        bottom:10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '70%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
        },
        backgroundColor: '#19203A',
    }],
    series: [{
        name: '销量',
        type: 'bar',
        // data: [90, 120, 360, 870, 450, 320, 570, 350, 768, 360, 870, 450, 320],
        data: xAxisData,
        barWidth : 15,
        itemStyle:{
            normal:{
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                    offset: 0,
                    color: '#799ff7'
                }, {
                    offset: 1,
                    color: '#578afa'
                }])

            }
        },
    }]
};

myChart5.setOption(option5);

//enterprise
var myChart6 = echarts.init(document.getElementById('enterprise-bottom-left'));
var data = [
    {"value": 34, "name": "批发零售"}, {"value": 16, "name": "房地产"}, {
        "value": 12,
        "name": "金融服务"
    }, {"value": 16, "name": "建筑工程"}, {"value": 12, "name": "信息产业"},
];
dataName = [];
var color=['#2460f9', '#6ca6ff','#fff6cb','#e99144','#61e0b8'];
//控制length中所有字的颜色，每个颜色是不一样的，相同的颜色再在formatter中确定
for (let n  in data){
    data[n]['name'] = data[n]['name'];
    dataName.push({
        name: data[n]['name'],
        textStyle:{
            color: color[n],  
        }
    })
}
option6 = {
    backgroundColor: "#000",
    title: {
        text: '企业类型占比',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    color:['#2460f9', '#6ca6ff','#fff6cb','#e99144','#61e0b8'],
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    legend: {
        orient: 'vertical',
        width:'30%',
        // height: 60,
        top: 'center',
        // backgroundColor: 'red',
        itemWidth: 15,
        itemHeight: 6,
        right: 0,
        data:dataName,
        textStyle: {
            color: "#fff",
            fontWeight:'normal',
            fontFamily:'宋体',
            rich: {
                a: {
                   fontSize:12,
                },
                b: {
                    fontSize:12,
                    color: '#fff',
                    width: 50,
                    // backgroundColor: 'green'
                }
            }
        },
        formatter: function(name){
            let total = 0;
            let target;
            for (let i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name === name) {
                    target = data[i].value;
                }
            }
            let arr = [
                '{b|' + name+'}',
                '{a|' +((target/total)*100).toFixed(2)+ '%}'
            ]
            return arr.join('')
        }
    },
    series: [
        {
            name:'',
            type:'pie',
            center:['30%', '50%'],
            radius: ['20%', '65%'],
            data:data,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
            normal: {
                show:false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        }
    ]
};
myChart6.setOption(option6);




var myChart7 = echarts.init(document.getElementById('enterprise-bottom-right'));
var option7 = {
    title: {
        text: '企业总量增长趋势',
        textStyle:{
            color:'#fff',
            fontWeight:'normal',
            fontSize:'14',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:25,
        right:10,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["1月","2月","3月","4月","5月","6月"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    series: [{
        data: [90, 120, 360, 870, 450, 320],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            width: 0,
            color:'#070b1a',
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#13c4be'
                }, {
                    offset: 1,
                    color: '#62bbd2'
                }])
            }
        },
    }]
}
var option7special = {
    title: {
        text: '企业总量增长趋势',
        textStyle:{
            color:'#fff',
            fontWeight:'normal',
            fontSize:'14',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:25,
        right:10,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["7月","8月","9月","10月","11月","12月"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
        }
    },
    series: [{
        data: [190, 80, 260, 640, 450, 320],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            width: 0,
            color:'#070b1a',
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#13c4be'
                }, {
                    offset: 1,
                    color: '#62bbd2'
                }])
            }
        },
    }]
}
myChart7.setOption(option7);
var year2=document.getElementsByClassName('year2')[0];
year2.onclick=function(){
    if(year2.innerHTML==='下半年'){
        myChart7.setOption(option7special);
        year2.innerHTML="上半年";
    }else{
        myChart7.setOption(option7);
        year2.innerHTML="下半年";
    }
    
}



var myChart8 = echarts.init(document.getElementsByClassName('income-bltop')[0]);
option8 = {
    "title": {
        "text": '同比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "clockwise":false,
        "startAngle": 360,
        "data": [{
            "name": " ",
            "value": 25,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5,
                }
            }
        }, {
            "value": 75,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 5
                }
            },
        }]
    }]
};
myChart8.setOption(option8);



var myChart8red = echarts.init(document.getElementsByClassName('income-bltop2')[0]);
option8red = {
    "title": {
        "text": '同比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "clockwise":false,
        "startAngle": 360,
        "data": [{
            "name": " ",
            "value": 25,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5,
                }
            }
        }, {
            "value": 75,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 5
                }
            },
        }]
    }]
};
myChart8red.setOption(option8red);


var myChart9 = echarts.init(document.getElementsByClassName('income-blbottom')[0]);
option9 = {
    "title": {
        "text": '环比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": true,
        "hoverAnimation": false,
        "type": "pie",
        "startAngle": 90,
        "data": [{
            "name": " ",
            "value": 65,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                }
            }
        }, {
            "value": 35,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    // "borderWidth": 25
                }
            },
        }]
    }]
};
myChart9.setOption(option9);




var myChart9red = echarts.init(document.getElementsByClassName('income-blbottom2')[0]);
option9red = {
    "title": {
        "text": '环比',
        "top": 0,
        "right": '22%',
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "CPU分配率 内圈",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "80%",
            "84%"
        ],
        "clockWise": true,
        "hoverAnimation": false,
        "type": "pie",
        "startAngle": 90,
        "data": [{
            "name": " ",
            "value": 65,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": 'rgba(25,32,58,1)',
                    "borderColor": 'rgba(25,32,58,1)',
                    "borderWidth": 5
                }
            }
        }, {
            "value": 35,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 14,
                        "fontWeight": "normal"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3dbce7'
                    }, {
                        offset: 1,
                        color: '#aad9bb'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    // "borderWidth": 25
                }
            },
        }]
    }]
};
myChart9red.setOption(option9red);


var myChart10 = echarts.init(document.getElementsByClassName('income-bottom-right')[0]);
var option10 = {
    title: {
        text: '行业类型纳税对比',
        textStyle:{
            color:'#fff',
            fontSize:'14',
            fontWeight:'normal',
        }
    },
    grid:{
        top:50,
        left:30,
        bottom:55,
        right:10,
    },
    xAxis: {
        data: ["批发零售","房地产","金融服务","建筑工程","信息产业","居民服务","法律服务","交通运输","住宿餐饮"],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color:'#6871b9',
            fontSize: '25px',
            interval:'0',
            formatter:function (value,index){
                if(value.length>2){
                    var newStr1 = value.slice(0,2);
                    var newStr2 = value.slice(2,4);
                    var a=[newStr1,newStr2];
                    var b=a.join("\n"); 
                }
                return b;
            }
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        interval: 300,
        axisTick: {
            show: false,
        },
        axisLine:{
            show:false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color:['#2e386c'],
            }
        },
        axisLabel: {
            color:'#6871b9',
        },
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: (9 / xAxisData.length) * 100,
    }, {
        start: 0,
        end: 10,
        height:8,
        bottom:10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '70%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
        },
        backgroundColor: '#19203A',
    }],
    series: [{
        name: '销量',
        type: 'bar',
        data: [90, 120, 360, 870, 450, 320, 570, 350, 768],
        barWidth : 15,
        itemStyle:{
            normal:{
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                    offset: 0,
                    color: '#799ff7'
                }, {
                    offset: 1,
                    color: '#578afa'
                }])

            }
        },
    }]
};

myChart10.setOption(option10);



//project
var myChart11 = echarts.init(document.getElementById('project-top'));
var option11 = {
    grid:{
        top:60,
        left:50,
        bottom:30,
        right:50,
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['项目','金额'],
        top:5,
        right:50,
        icon:'circle',
        itemWidth: 10,
        itemHeight:10,
        itemGap:20,
        textStyle: {
            color: '#939bd8',
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ['河北','船房','杨家','陆家','福海','新河','滇池路','阳光','红星'],     
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color:'#6871b9',
            }
            
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '项目',
            min: 0,
            max: 9,
            interval: 3,
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color:'#6871b9',
            },
            nameTextStyle:{
                color:'#939bd8',
            }
        },
        {
            type: 'value',
            name: '金额',
            min: 0,
            max: 3,
            interval: 1,
            axisLabel: {
                formatter: '{value} 万'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color:'#6871b9',
            },
            nameTextStyle:{
                color:'#939bd8',
            }
        },
    ],
    series: [
        {
            name:'项目',
            type:'bar',
            data:[7, 5, 9, 2, 1, 2, 3, 6, 9],
            barWidth : 15,
            itemStyle:{
                normal:{
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                        offset: 0,
                        color: '#2cbde6'
                    }, {
                        offset: 1,
                        color: '#2e8ef7'
                    }])
                }
            },
        },
        {
            name:'金额',
            type:'bar',
            data:[2.31, 1.78, 1.98, 1.20, 3.01, 2.67, 1.92, 1.28, 1.02],
            barWidth : 15,
            itemStyle:{
                normal:{
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                        offset: 0,
                        color: '#d29893'
                    }, {
                        offset: 1,
                        color: '#d2737c'
                    }])
    
                }
            },
        }
    ]
};
myChart11.setOption(option11);
