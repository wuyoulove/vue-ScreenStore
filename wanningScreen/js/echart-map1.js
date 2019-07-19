$(function() {
var wanning = "./data2/wanning.json";
var beida = "./data2/beida.json";
var changfen = "./data2/changfen.json";
var damao = "./data2/damao.json";
var hele = "./data2/hele.json";
var houan = "./data2/houan.json";
var liji = "./data2/liji.json";
var longgun = "./data2/longgun.json";
var nanqiao = "./data2/nanqiao.json";
var sangengluo = "./data2/sangengluo.json";
var shangen = "./data2/shangen.json";
var wancheng = "./data2/wancheng.json";
var dongao = "./data2/dongao.json";
var xinglong = "./data2/xinglong.json";
  
//var dongao = "./data2/dongao.json";
//var wanning = "./data2/wanning.json";
  echarts.extendsMap = function(wanningMap, opt) {
    // 实例
    var chart = this.init(document.getElementById("wanningMap"));

    var curGeoJson = {};
    var cityMap = {
      "南桥镇": nanqiao,
      "兴隆华侨农场": xinglong,
      "礼纪镇": liji,
      "东奥镇": dongao,
      "长丰镇": changfen,
      "三更罗镇": sangengluo,
      "北大镇": beida,
      "大茂镇": damao,
      "万城镇": wancheng,
      "后安镇": houan,
      "和乐镇": hele,
      "山根镇": shangen,
      "龙滚镇": longgun
    };
    var geoCoordMap = {
      '1': [110.44870385742188,19.04922387777432],
      '2': [110.42463000000000,18.78932000000000]
    };
    var levelColorMap = {
      '1': '#f1e1d3',
      //    '2': 'rgba(255, 235, 59, .7)',
      //    '3': 'rgba(147, 235, 248, 1)'
    };

    var defaultOpt = {
      mapName: 'china', // 地图展示
      goDown: false, // 是否下钻
      //  bgColor: '#404a59',   // 画布背景色
      activeArea: [], // 区域高亮,同echarts配置项
      data: [],
      // 下钻回调(点击的地图名、实例对象option、实例对象)
      callback: function(name, option, instance) {}
    };
    if(opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
      leftPlus: -70,
      leftCur: 150,
      left: 10,
      top: 50
    };

    var line = [
      [0, 0],
      [8, 11],
      [0, 22]
    ];
    // style
    var style = {
      font: '18px "Microsoft YaHei", sans-serif',
      textColor: '#eee',
      lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
      /**
       * i 实例对象
       * o option
       * n 地图名
       **/
      resetOption: function(i, o, n, r) {
        /**
         * 预处理判断 某个点是否在某个区域
         * @param {*} lng 
         * @param {*} lat 
         * @param {*} points such as '120.133446,30.271645||120.133153,30.271669||120.133138,30.271595||'
         */
        function preceedPointInArea(lng, lat, points) {
          var parking_gps = points
          var gpsStringArray = parking_gps
          var polygon = []
          for(var index in gpsStringArray) {
            var item = gpsStringArray[index]
            var point = item
            if(point.length == 2) {
              point['lng'] = parseFloat(point[0])
              point['lat'] = parseFloat(point[1])
              polygon.push(point)
            }
          }
          var flag = isPointInPolygon(polygon, lng, lat)

          return flag;
        }

        /**
         * 某个点是否在某个区域
         */
        function isPointInPolygon(polygon, lng, lat) {

          var numberOfPoints = polygon.length;
          var polygonLats = [];
          var polygonLngs = [];
          for(var i = 0; i < numberOfPoints; i++) {
            polygonLats.push(polygon[i]['lat']);
            polygonLngs.push(polygon[i]['lng']);
          }

          var polygonContainsPoint = false;
          for(var node = 0, altNode = (numberOfPoints - 1); node < numberOfPoints; altNode = node++) {
            if((polygonLngs[node] > lng != (polygonLngs[altNode] > lng)) &&
              (lat < (polygonLats[altNode] - polygonLats[node]) *
                (lng - polygonLngs[node]) /
                (polygonLngs[altNode] - polygonLngs[node]) +
                polygonLats[node]
              )
            ) {
              polygonContainsPoint = !polygonContainsPoint;
            }
          }

          return polygonContainsPoint;
        }
        var breadcrumb = this.createBreadcrumb(n);
        var j = name.indexOf(n);
        var l = o.graphic.length;
        if(j < 0) {
//        console.log(Object.prototype.toString.call(r))
//        console.log(JSON.parse(r));
          console.log(r)
          var arr = r.features[0].geometry.coordinates[0]
          console.log(arr)
          o.graphic.push(breadcrumb);
          o.graphic[0].children[0].shape.x2 = 145;
          o.graphic[0].children[1].shape.x2 = 145;
          if(o.graphic.length > 2) {
            var geoCoordMapxz =JSON.parse(JSON.stringify(geoCoordMap)) ,aa = 0,ln = 0,ls = 0;
//          var geoCoordMapxz = geoCoordMap;
            console.log(geoCoordMapxz)
            for(let i in geoCoordMapxz) {
              ln = geoCoordMapxz[i][0];
              ls = geoCoordMapxz[i][1]
              if(preceedPointInArea(ln, ls, arr) == false) {
                delete geoCoordMapxz[i]
              }
            }
            console.log(geoCoordMapxz)
            o.series[0].data = handleEvents.initSeriesData(geoCoordMapxz);
          };
          name.push(n);
          idx++;
        } else {
          o.graphic.splice(j + 2, l);
          if(o.graphic.length <= 2) {
            o.graphic[0].children[0].shape.x2 = 60;
            o.graphic[0].children[1].shape.x2 = 60;
            o.series[0].data = handleEvents.initSeriesData(geoCoordMap);
          };
          name.splice(j + 1, l);
          idx = j;
          pos.leftCur -= pos.leftPlus * (l - j - 1);
        };

        o.geo.map = n;
        o.geo.zoom = 0.4;
        i.clear();
        i.setOption(o);
        this.zoomAnimation();
        opt.callback(n, o, i);
      },

      /**
       * name 地图名
       **/
      createBreadcrumb: function(name) {
        var cityToPinyin = {
          "南桥镇": "nanqiao",
          "兴隆华侨农场": "xinglong",
          "礼纪镇": "liji",
          "东奥镇": "dongao",
          "长丰镇": "changfen",
          "三更罗镇": "sangengluo",
          "北大镇": "beida",
          "大茂镇": "damao",
          "万城镇": "wancheng",
          "后安镇": "houan",
          "和乐镇": "hele",
          "山根镇": "shangen",
          "龙滚镇": "longgun"
        };
        var breadcrumb = {
          type: 'group',
          id: name,
          left: pos.leftCur + pos.leftPlus,
          top: pos.top + 3,
          children: [{
            type: 'polyline',
            left: -90,
            top: -5,
            shape: {
              points: line
            },
            style: {
              stroke: '#fff',
              key: name
              // lineWidth: 2,
            },
            onclick: function() {
              var name = this.style.key;
              handleEvents.resetOption(chart, option, name);
            }
          }, {
            type: 'text',
            left: -68,
            top: 'middle',
            style: {
              text: name,
              textAlign: 'center',
              fill: style.textColor,
              font: style.font
            },
            onclick: function() {
              var name = this.style.text;
              handleEvents.resetOption(chart, option, name);
            }
          }, {
            type: 'text',
            left: -68,
            top: 10,
            style: {
              name: name,
              text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
              textAlign: 'center',
              fill: style.textColor,
              font: '12px "Microsoft YaHei", sans-serif',
            },
            onclick: function() {
              // console.log(this.style);
              var name = this.style.name;
              handleEvents.resetOption(chart, option, name);
            }
          }]
        }

        pos.leftCur += pos.leftPlus;

        return breadcrumb;
      },

      // 设置effectscatter
      initSeriesData: function(data) {
        var temp = [];
        for(let index in data) {
          temp.push({
            name: index,
            value: data[index]
          })
        }
        return temp;
      },

      zoomAnimation: function() {
        var count = null;
        var zoom = function(per) {
          if(!count) count = per;
          count = count + per;
          // console.log(per,count);
          chart.setOption({
            geo: {
              zoom: count
            }
          });
          if(count < 1) window.requestAnimationFrame(function() {
            zoom(0.2);
          });
        };
        window.requestAnimationFrame(function() {
          zoom(0.2);
        });
      }
    };

    var option = {
      backgroundColor: opt.bgColor,
      graphic: [{
        type: 'group',
        left: pos.left,
        top: pos.top - 4,
        children: [{
          type: 'line',
          left: 0,
          top: -20,
          shape: {
            x1: 0,
            y1: 0,
            x2: 60,
            y2: 0
          },
          style: {
            stroke: style.lineColor,
            opacity: 0
          }
        }, {
          type: 'line',
          left: 0,
          top: 20,
          shape: {
            x1: 0,
            y1: 0,
            x2: 60,
            y2: 0
          },
          style: {
            stroke: style.lineColor,
            opacity: 0
          }
        }]
      }, {
        id: name[idx],
        type: 'group',
        left: pos.left + 2,
        top: pos.top,
        children: [{
          type: 'polyline',
          left: 90,
          top: -12,
          shape: {
            points: line
          },
          style: {
            stroke: 'transparent',
            key: name[0]
          },
          onclick: function() {
            var name = this.style.key;
            handleEvents.resetOption(chart, option, name);
          }
        }, {
          type: 'text',
          left: 0,
          top: 'middle',
          style: {
            text: name[0] === '万宁' ? '万宁市' : name[0],
            textAlign: 'center',
            fill: style.textColor,
            font: style.font
          },
          onclick: function() {
            handleEvents.resetOption(chart, option, '万宁',geoCoordMap);
          }
        }, {
          type: 'text',
          left: 0,
          top: 10,
          style: {
            text: 'WANNING',
            textAlign: 'center',
            fill: style.textColor,
            font: '12px "Microsoft YaHei", sans-serif',
          },
          onclick: function() {
            handleEvents.resetOption(chart, option, '万宁');
          }
        }]
      }],
      geo: {
        map: opt.mapName,
        // roam: true,
        zoom: 1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#46a1ff',
            borderWidth: 2,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: '#29477f' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#29477f' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            //          shadowColor: 'rgba(128, 217, 248, 1)',
            //          // shadowColor: 'rgba(255, 255, 255, 1)',
            //          shadowOffsetX: -2,
            //          shadowOffsetY: 2,
            //          shadowBlur: 10
          },
          emphasis: {
            areaColor: '#5389c5',
            borderWidth: 0
          }
        },
        regions: opt.activeArea.map(function(item) {
          if(typeof item !== 'string') {
            return {
              name: item.name,
              itemStyle: {
                normal: {
                  areaColor: item.areaColor || '#5389c5'
                }
              },
              label: {
                normal: {
                  show: item.showLabel,
                  textStyle: {
                    color: '#fff'
                  }
                }
              }
            }
          } else {
            return {
              name: item,
              itemStyle: {
                normal: {
                  borderColor: '#46a1ff',
                  areaColor: '#5389c5'
                }
              }
            }
          }
        })
      },
      series: [{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        // symbol: 'diamond',
        showEffectOn: 'render',
        rippleEffect: {
          period: 15,
          scale: 1.5,
          brushType: 'fill'
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: '#f1e1d3',
            //          color: function(params) {
            //            return levelColorMap[params.value[3]];
            //          },
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: handleEvents.initSeriesData(geoCoordMap)
      }]
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params) {
      var _self = this;
      if(opt.goDown && params.name !== name[idx]) {
        if(cityMap[params.name]) {
          var url = cityMap[params.name];
          $.get(url, function(response) {
//          console.log(response);
            curGeoJson = response;
            
            echarts.registerMap(params.name, response);
            handleEvents.resetOption(_self, option, params.name, response);
          });
        }
      }
    });
    chart.setMap = function(mapName) {
      var _self = this;
      if(mapName.indexOf('市') < 0) mapName = mapName + '市';
      var citySource = cityMap[mapName];
      //    console.log(citySource)
      if(citySource) {
        var url = './data/' + citySource + '.json';
        $.get(url, function(response) {
          // console.log(response);
          curGeoJson = response;
          echarts.registerMap(mapName, response);
          handleEvents.resetOption(_self, option, mapName, response);
        });
      }
      // handleEvents.resetOption(this, option, mapName);
    };

    return chart;
  };

  $.getJSON(wanning, function(geoJson) {
    echarts.registerMap('万宁', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
      //    bgColor: '#154e90', // 画布背景色
      mapName: '万宁', // 地图名
      goDown: true, // 是否下钻
      // 下钻回调
      callback: function(name, option, instance) {
//      console.log(name, option, instance);
      },
      // 数据展示             
      //    data: [{
      //      name: '南桥镇1',
      //    },{
      //      name: '南桥镇2',
      //    },{
      //      name: '兴隆华侨农场',
      //    }, {
      //      name: '北大镇',
      //    }, {
      //      name: '礼纪镇',
      //    }, {
      //      name: '长丰镇',
      //    }, {
      //      name: '三更罗镇',
      //    }, {
      //      name: '大茂镇',
      //    }, {
      //      name: '后安镇',
      //    }, {
      //      name: '东奥镇',
      //    }, {
      //      name: '万城镇',
      //    }, {
      //      name: '和乐镇',
      //    }, {
      //      name: '山根镇',
      //    }, {
      //      name: '龙滚镇',
      //    }]
    });
  })

})