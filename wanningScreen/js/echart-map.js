$(function() {
  //  -------------------------------甘肃地图---------------------------------------------
  var mapChart = echarts.init(document.getElementById('wanningMap'));

  // 地图路由
  var mapLoad = []
  // 初始化甘肃地图
  getMapData('./data/wanning.json', '万宁')

  // 返回上一级
  $('.go-back').click(function(e) {
    e.stopPropagation();
    if(mapLoad.length > 1) {
      mapLoad.pop()
      var name = mapLoad[mapLoad.length - 1]
      if(mapLoad.length === 1) {
        $('.go-back').hide()
      }
      if(name in cityMap) {
        getMapData('./data/' + cityMap[name] + '.json', name)
        mapLoad.pop()
      } else {
        return;
      }
    }
  })
  // 下钻
  mapChart.on('click', function(params) {
    // $("#orgName").val(data.name);
    var name = params.name
    if(params.name in cityMap) {
      getMapData('./data/' + cityMap[params.name] + '.json', name)
      $('.go-back').show()
    }
  })
  // 获取地图数据
  function getMapData(url, name) {
    $.getJSON(url, function(geoJson) {
      // tooltip 数据
      d = []
      for(var i = 0; i < geoJson.features.length; i++) {
        d.push({
          name: geoJson.features[i].properties.name
        })
      }
      mapLoad.push(name)
      echarts.registerMap(name, geoJson);
      renderMap(name, d)
    });
  }

  // 配置项
  var option = {
    grid: {
      x: 10,
      x0: 10,
      y: 10,
      y0: 10
    },
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    animationDurationUpdate: 1000
  }
  // 渲染地图
  function renderMap(map, data) {
    option.series = [{
      name: map,
      type: 'map',
      mapType: map,
      roam: false,
      nameMap: {
        'wanning': '万宁'
      },
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 13
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 13
          }
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#29477f',
          borderColor: '#46a1ff',
          borderWidth: 3
        },
        emphasis: {
          areaColor: '#5389c5',
        }
      },
      data: data
    }]
    // 渲染地图
    mapChart.setOption(option)
  }
})