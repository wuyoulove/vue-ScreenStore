import CMap from './cmap'

function setMap(contentId, tipId, json, mouseMoveCallback, clickCallBack) {
  // console.log('setMap-------------')
  let mapTipBox = document.getElementById(tipId)
  let oldDiv = document.querySelector('#map-box')
  let newDiv = document.createElement('div')
  newDiv.id = 'map-box'
  oldDiv.parentNode.replaceChild(newDiv, oldDiv)
  // console.log(json)
  let myMap = new CMap({
    el: contentId,
    city: {
      data: json.citysArr,
      point: {
        size: 1,
        message: 'all', // 点上信息, all 都有, auto 随机
        r: [2, 3],
        color: ['#fff']
      },
      cityName: {
        normal: {
          fillStyle: 'rgb(76,213,233)',
          font: "1.3em 'Microsoft Yahei'"
        },
        hover: {
          fillStyle: 'rgb(202,248,255)',
          font: "1.5em 'Microsoft Yahei'"
        }
      },
      style: {
        lineWidth: 5,
        strokeStyle: 'rgb(80,150,245)',
        fillStyle: 'rgba(5,9,18,.8)',
        hoveColor: 'rgb(5,82,166)'
      }
    },
    cityArea: {
      data: json.araeData,
      style: {
        lineWidth: 5,
        strokeStyle: '#538df7',
      }
    },
    callback: {
      click: function (index, data) {
        clickCallBack && clickCallBack(index, data)
      },
      mousemove: function (index, data, evt) {
        mouseMoveCallback && mouseMoveCallback(index, data, evt)
      }
    }
  })
  // myMap.clear()
  myMap.init()
}

export { setMap }