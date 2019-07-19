$(function(){
  /* 事件分类 */
  getEventClassifyData();


  /* 事件统计分析 */
  getEventStaAnalysisData();
  $('.event-sta-analysis').on('click', '.tab-box .tab-item', function() {
    getEventStaAnalysisData();
  })

  /* 矛盾纠纷事件 */
  getEventsMonthlyRatioData();
  $('.events-monthly-ratio').on('change', '.select', function() {
    var val = $(this).val(),
      $title = $(this).closest('.cont-item').find('.item-head .title');
    if ($(this).hasClass('type')) {
      $title.text(val == 1 ? '矛盾纠纷事件年同比' : '矛盾纠纷事件月环比');
    }
    getEventsMonthlyRatioData();
  })
  $('.events-monthly-ratio').on('click', '.tab-box .tab-item', function() {
    getEventsMonthlyRatioData();
  })


  /* 职能部门事件办理情况 */
  getFunDepartEventsData();


  // 事件分类
  function getEventClassifyData() {
    var eventClassifyData = {
      names: ['矛盾纠纷','治安安全隐患','民生服务'],
      data: [{
        name: '矛盾纠纷',
        value: 1080,
      },
      {
        name: '治安安全隐患',
        value: 771,
      },
      {
        name: '民生服务',
        value: 1234,
      }],
      color: ['#69d8f8', '#8fffbc', '#ffcb4f']
    };
    pieChart('eventClassify', eventClassifyData)
  }

  // 事件统计分析
  function getEventStaAnalysisData() {
    var eventStaAnalysisData = {
      names: [
        '2018-01','2018-02','2018-03','2018-04','2018-05','2018-06',
        '2018-07','2018-08','2018-09','2018-10','2018-11','2018-12',
      ],
      series: [{
        name: '代办事件总数',
        data: [300, 450, 540, 150, 690, 480, 300, 450, 540, 150, 690, 480],
      }, {
        name: '处理中事件数',
        data: [200, 300, 360, 100, 460, 320, 200, 300, 360, 100, 460, 320],
      }, {
        name: '已办结事件数',
        data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160],
      }],
    };
    waveformChartFun($('#eventStaAnalysis'), eventStaAnalysisData, {legendType: 'topRight'});
  }

  // 矛盾纠纷事件
  function getEventsMonthlyRatioData() {
    var $cont = $('.events-monthly-ratio'),
      type = $cont.find('.select.type').val(),
      classify = $cont.find('.select.classify').val(),
      tab = $cont.find('.tab-box .active').data('tab');
    
    if (type == 1) {
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

  // 职能部门事件办理情况
  function getFunDepartEventsData() {
    var funDepartEventsData = {
      names: [
        '2018-01','2018-02','2018-03','2018-04','2018-05','2018-06',
        '2018-07','2018-08','2018-09','2018-10','2018-11','2018-12',
      ],
      series: {
        bar: [{
          name: '事件总数',
          data: [200, 300, 360, 100, 460, 320, 200, 300, 360, 100, 460, 320],
          color: ['#34beeb', '#8fdaf3'],
        }, {
          name: '已办结事件数',
          data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160],
          color: ['#ffc846', '#ffde8e'],
        }]
      },
    };
    barAndLineChartFun($('#funDepartEvents'), funDepartEventsData, {legendType: 'bottomCenter'});
  }


});