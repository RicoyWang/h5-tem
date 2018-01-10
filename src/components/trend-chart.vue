<template lang="html">
    <div>
        <p>loading...</p>
        <div v-show="false">{{this.trendConfig.series[0].name}}</div>
    </div>
</template>

<script>
import moment from 'moment'
import Highcharts from 'highcharts'

export default {
  props: ['trendConfig'],
  methods: {
    initTrendChart () {
      var chartVM = this
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
          colors: ['#ee3a4a', '#ffcc00'],
          xAxis: {
            type: 'datetime',
            tickWidth: 0,
            minRange: 24 * 3600 * 1000,
            labels: {
              formatter () {
                return moment(this.value).format('YYYY-MM-DD')
              }
            },
            crosshair: {
              width: 1,
              color: '#ee3a4a'
            }
          },
          yAxis: {
            title: {
              text: null
            },
            labels: {
              format: '{value}' + chartVM.trendConfig.yAxisLable
            }
          },
          tooltip: {
            shared: true,
            valueSuffix: chartVM.trendConfig.yAxisLable,
            borderColor: '#e1e1eb',
            backgroundColor: '#fff',
            shadow: false,
            style: {
              color: '#788296',
              lineHeight: 18
            },
            xDateFormat: '%Y-%m-%d',
            pointFormat: '{series.name} : <b> {point.y}</b><br/>'
          },
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0,
            enabled: chartVM.trendConfig.legendEnable
          },
          series: chartVM.trendConfig.series,
          credits: {
            enabled: false
          }
        })
      })
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
