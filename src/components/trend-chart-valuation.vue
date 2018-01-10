<template lang="html">
    <div>
        <p>loading...</p>
        <div v-show="false">{{this.valuationTrend[0]}}</div>
    </div>
</template>

<script>
import moment from 'moment'
import Highcharts from 'highcharts'

export default {
  props: ['valuationTrend'],
  methods: {
    initTrendChart () {
      var chartVM = this
      var vxAxis = chartVM.getValuationMinuteRange()
      var navChartData = []
      var chgPct = []
      var valuations = chartVM.valuationTrend
      for (let i = 0; i < valuations.length; i++) {
        var x = vxAxis.indexOf(valuations[i].time_str.slice(0, 4))
        if (x >= 0) {
          navChartData.push([x, valuations[i].estnav])
          chgPct.push([valuations[i].change_pct.toFixed(2)])
        }
      }

      require.ensure(['highcharts'], function () {
        Highcharts.chart({
          chart: {
            height: 320,
            renderTo: chartVM.$el,
            spacingTop: 20
          },
          title: {
            text: null
          },
          colors: ['#ee3a4a'],
          xAxis: {
            labels: {
              formatter: function () {
                var res = chartVM.formatTime(vxAxis[this.value])
                if (res === '11:30') {
                  res = '11:30/13:00'
                }
                return res
              }
            },
            tickWidth: 0,
            tickInterval: 60,
            crosshair: {
              width: 1,
              color: '#ee3a4a'
            },
            max: 242
          },
          yAxis: {
            title: {
              text: null
            },
            labels: {
              format: '{value}'
            }
          },
          tooltip: {
            borderColor: '#e1e1eb',
            backgroundColor: '#fff',
            shadow: false,
            style: {
              color: '#788296',
              lineHeight: 18
            },
            formatter: function () {
              var s = chartVM.formatTime(vxAxis[this.x]) + '<br/>'
              s += '估算净值 : <b>' + this.y + ' </b><br/>'
              s += '估算涨幅 : <b>' + chgPct[this.x] + '% </b>'
              return s
            }
          },
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0,
            enabled: false
          },
          series: [{
            name: '估算净值',
            data: navChartData
          }],
          credits: {
            enabled: false
          }
        })
      }, 'highcharts')
    },
    getValuationMinuteRange () {
      var range = []
      var start = moment('0000-01-01 09:30')
      while (true) {
        var timeStr = start.format('HHmm')

        if (timeStr > '1500') {
          break
        } else if (timeStr > '1130' && timeStr < '1300') {
                    // pass
        } else if (timeStr === '1300') {
                    // pass
        } else {
          range.push(timeStr)
        }

        start.add(1, 'm')
      }
      return range
    },
    formatTime (s) {
      return s.slice(0, 2) + ':' + s.slice(2, 4)
    }
  },
  mounted () {
    this.initTrendChart()
  },
  beforeUpdate () {
    this.initTrendChart()
  }
}
</script>

<style lang="css">
</style>
