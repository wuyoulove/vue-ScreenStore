$(function(){

  /* 重点青少年环比 同比 */
  getEventsMonthlyRatioData();
  $('.events-monthly-ratio').on('change', '.select', function() {
    var val = +$(this).val(),
      $title = $(this).closest('.cont-item').find('.item-head .title');

    if ($(this).hasClass('type')) {
      $title.text(val == 1 ? '重点青少年区域分布情况' :
                  val == 2 ? '重点青少年月环比' : '重点青少年年同比');
    }

    getEventsMonthlyRatioData();
  })
  $('.events-monthly-ratio').on('click', '.tab-box .tab-item', function() {
    getEventsMonthlyRatioData();
  })


  /* 性别比例 */
  getSexRatioData();

  /* 年龄比例 */
  getAgeRatioData();

  /* 文化程度比例 */
  getCultureRatioData();


  // 重点青少年环比 同比
  function getEventsMonthlyRatioData() {
    var $cont = $('.events-monthly-ratio'),
      type = $cont.find('.select.type').val(),
      classify = $cont.find('.select.classify').val(),
      tab = $cont.find('.tab-box .active').data('tab');
    
      if (type == 1) {
        var eventsMonthlyRatioData = {
          axisPointer: 'cross',
          names: [
            '1','2','3','4','5','6',
            '7','8','9','10','11','12',
          ],
          series: {
            line: [{
              name: '环比增长率',
              data: ['-', 70, 60, -30, -20, 80, 70, 60, -30, -20, 80, 50],
              color: '#ffcb4f',
            }],
            bar: [{
              name: '数量',
              data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160],
              color: ['#11a3ff', '#83f1ff'],
              showLabel: true,
            }]
          },
        };
      } else if (type == 2) {
      var eventsMonthlyRatioData = {
        axisPointer: 'cross',
        names: [
          '2018-01','2018-02','2018-03','2018-04','2018-05','2018-06',
          '2018-07','2018-08','2018-09','2018-10','2018-11','2018-12',
        ],
        series: {
          line: [{
            name: '2017年',
            data: [50, 70, 60, -30, -20, 80, 70, 60, -30, -20, 80, 50],
            color: '#ffcb4f',
          }, {
            name: '2018年',
            data: [100, 140, 120, 50, 80, 160, 140, 120, 50, 80, 160, 100],
            color: '#60dc8d',
          }],
          bar: [{
            name: '2016',
            data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160],
            color: ['#11a3ff', '#83f1ff'],
          }, {
            name: '2017',
            data: [200, 300, 360, 100, 460, 320, 200, 300, 360, 100, 460, 320],
            color: ['#ffc846', '#ffde8e'],
          }, {
            name: '2018',
            data: [300, 450, 540, 150, 690, 480, 300, 450, 540, 150, 690, 480],
            color: ['#4cec73', '#b1faaf'],
          }]
        },
      };
    } else {
      var eventsMonthlyRatioData = {
        axisPointer: 'cross',
        names: [
          '1','2','3','4','5','6',
          '7','8','9','10','11','12',
        ],
        series: {
          line: [{
            name: '环比增长率',
            data: ['-', 70, 60, -30, -20, 80, 70, 60, -30, -20, 80, 50],
            color: '#ffcb4f',
          }],
          bar: [{
            name: '数量',
            data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160],
            color: ['#11a3ff', '#83f1ff'],
            showLabel: true,
          }]
        },
      };
    }

    barAndLineChartFun($('#eventsMonthlyRatio'), eventsMonthlyRatioData, {legendType: 'bottomCenter'});
  }

  /* 性别比例 */
  function getSexRatioData() {
    var sexRatioData = {
      names: ['男','女'],
      data: [{
        name: '男',
        value: 1080,
      },
      {
        name: '女',
        value: 771,
      }],
      color: ['#69d8f8', '#8fffbc']
    };
    pieChart('sexRatio', sexRatioData)
  }

  // 年龄比例
  function getAgeRatioData() {
    var ageRatioData = {
      names: [
        '0-6','7-17','18-28','29-44',
        '45-59','60-74','75-89','90以上',
      ],
      series: {
        bar: [{
          name: '人数',
          data: [100, 150, 180, 50, 230, 160, 100, 150],
          color: ['#ffc846', '#ffde8e'],
        }]
      },
    };
    barAndLineChartFun($('#ageRatio'), ageRatioData);
  }

  // 文化程度比例
  function getCultureRatioData() {
    var cultureRatioData = {
      names: [
        '研究生','大学本科','大学专科','中专或中技','技工学校',
        '高中','初中','小学','文盲','其他',
      ],
      series: {
        bar: [{
          name: '人数',
          data: [100, 150, 180, 50, 230, 160, 100, 150, 50, 230],
          color: ['#34beeb', '#8fdaf3'],
        }]
      },
    };
    barAndLineChartFun($('#cultureRatio'), cultureRatioData, {
      interval:0,
      rotate: 30,
      legendShow: false
    });
  }

});