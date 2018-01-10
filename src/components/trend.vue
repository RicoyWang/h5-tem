
<template lang="html">
    <div class="trend">
        <div class="ui-tab">
            <span class="tab-item" :class="{active: trendTab == 'trendTab1'}" @click="toggleTrend('trendTab1',trends[0])">{{trends[0] | trendTitle}}</span>
            <span class="tab-item" :class="{active: trendTab == 'trendTab2'}" @click="toggleTrend('trendTab2',trends[1])">{{trends[1] | trendTitle}}</span>
        </div>
        <div class="trend-main" v-if="!hasMutiChart">
            <ul class="trend-period" >
                <li :class="{active: chartTab == 'chartTab1'}" @click="toggleTrend('chartTab1','season')">近3月</li>
                <li :class="{active: chartTab == 'chartTab2'}" @click="toggleTrend('chartTab2','halfYear')">近6月</li>
                <li :class="{active: chartTab == 'chartTab3'}" @click="toggleTrend('chartTab3','thisYear')">今年以来</li>
                <li :class="{active: chartTab == 'chartTab4'}" @click="toggleTrend('chartTab4','year')">近一年</li>
                <li :class="{active: chartTab == 'chartTab5'}" @click="toggleTrend('chartTab5','all')">成立以来</li>
            </ul>
            <trend-chart :trendConfig="trendConfig"></trend-chart>
        </div>
        <div class="trend-main" v-if="hasMutiChart && trendTab == 'trendTab1'">
            <ul class="trend-period" >
                <li :class="{active: chartTab == 'chartTab1'}" @click="toggleTrend('chartTab1','season')">近3月</li>
                <li :class="{active: chartTab == 'chartTab2'}" @click="toggleTrend('chartTab2','halfYear')">近6月</li>
                <li :class="{active: chartTab == 'chartTab3'}" @click="toggleTrend('chartTab3','thisYear')">今年以来</li>
                <li :class="{active: chartTab == 'chartTab4'}" @click="toggleTrend('chartTab4','year')">近一年</li>
                <li :class="{active: chartTab == 'chartTab5'}" @click="toggleTrend('chartTab5','all')">成立以来</li>
            </ul>
            <trend-chart :trendConfig="trendConfig"></trend-chart>
        </div>
        <div class="trend-main" v-if="hasMutiChart && trendTab == 'trendTab2'">
            <trend-chart-valuation :valuationTrend="valuationTrend"></trend-chart-valuation>
            <p class="trend-tips">估算收益仅为参考,实际涨幅以最新净值为准</p>
        </div>
    </div>
</template>

<script>
import { getProductNav, getProductIncome, getProductIndex, getProductValuation } from 'services/products'
import moment from 'moment'
export default {
  props: ['code', 'trends'],
  data () {
    return {
      trendTab: 'trendTab1',
      chartTab: 'chartTab1',
      trendType: '',
      trendConfig: {
        series: [{
          name: '',
          data: []
        }],
        yAxisLable: '%',
        legendEnable: true
      },
      valuationTrend: []
    }
  },
  computed: {
    initTrendType () {
      return this.trends[0]
    },
    hasMutiChart () {
      if (this.trends[1] === 'valuation') {
        return true
      }
      return false
    }
  },
  filters: {
    trendTitle (tab) {
      return {
        'income': '收益走势',
        'valuation': '实时估值',
        'wfsy': '万分收益走势',
        'qrnh': '七日年化走势',
        'netValue': '净值走势'
      }[tab]
    }
  },
  components: {
    'trend-chart': require('components/trend-chart.vue'),
    'trend-chart-valuation': require('components/trend-chart-valuation.vue')
  },
  mounted () {
    // init trend
    this.toggleTrend('trendTab1', this.initTrendType)
  },
  methods: {
    switchTab (index) {
      switch (true) {
        case index.indexOf('trendTab') === 0:
          this.trendTab = index
          break
        case index.indexOf('chartTab') === 0:
          this.chartTab = index
          break
      }
    },
    toggleTrend (index, type) {
      this.switchTab(index)

      let now = moment()
      let period = 'season'
      if (index.indexOf('trendTab') === 0) {
        this.trendType = type
        this.chartTab = 'chartTab1'
      } else if (index.indexOf('chartTab') === 0) {
        period = type
      }
      let minTradedate = {
        'season': moment([now.year(), now.month(), now.date()]).subtract(3, 'months').valueOf(),
        'halfYear': moment([now.year(), now.month(), now.date()]).subtract(6, 'months').valueOf(),
        'thisYear': moment([now.year(), now.month(), now.date()]).startOf('year').valueOf(),
        'year': moment([now.year(), now.month(), now.date()]).subtract(1, 'year').valueOf(),
        'all': null
      }[period]

      switch (this.trendType) {
        case 'netValue':
          this.getNetValueTrend(this.$route.params.code, minTradedate)
          break
        case 'income':
          this.getIncome(this.$route.params.code, minTradedate)
          break
        case 'valuation':
          this.getValuation(this.$route.params.code)
          break
        case 'wfsy':
          this.getWfsy(this.$route.params.code, minTradedate)
          break
        case 'qrnh':
          this.getQrnh(this.$route.params.code, minTradedate)
          break
      }
    },
    getNetValueTrend (code, minTradedate) {
      let opts = {
        fields: ['tradedate', 'unit_net', 'accum_net'].join(','),
        min_tradedate: minTradedate
      }
      getProductNav(code, opts).then((data) => {
        return data.result.items
      }).then((navs) => {
        var compare = function (a, b) {
          return a[0] - b[0]
        }
        var netValues = navs.map(function (item) {
          return [item.tradedate, item.unit_net]
        }).sort(compare)
        var accumValues = navs.map(function (item) {
          return [item.tradedate, item.accum_net]
        }).sort(compare)
        return { netValues, accumValues }
      }).then((val) => {
        this.trendConfig.series = [{
          name: '单位净值',
          data: val.netValues
        }, {
          name: '累计净值',
          data: val.accumValues
        }]
        this.trendConfig.legendEnable = true
        this.trendConfig.yAxisLable = '元'
      })
    },
    getIncome (code, minTradedate) {
      return Promise.all([
        getProductIncome(code, minTradedate),
        getProductIndex(minTradedate)
      ]).then((val) => {
        this.trendConfig.series = [{
          name: '产品名称',
          data: val[0].result.items
        }, {
          name: '上证综合指数',
          data: val[1].result.items
        }]
        this.trendConfig.legendEnable = true
        this.trendConfig.yAxisLable = '%'
      })
    },
    getWfsy (code, minTradedate) {
      let opts = {
        fields: ['tradedate', 'tenthou_unit_incm'].join(','),
        min_tradedate: minTradedate
      }
      getProductNav(code, opts).then((data) => {
        return data.result.items
      }).then((navs) => {
        var compare = function (a, b) {
          return a[0] - b[0]
        }
        var tenthouUnitIncm = navs.map(function (item) {
          return [item.tradedate, item.tenthou_unit_incm]
        }).sort(compare)
        return tenthouUnitIncm
      }).then((val) => {
        this.trendConfig.series = [{
          name: '万份收益',
          data: val
        }]
        this.trendConfig.legendEnable = false
        this.trendConfig.yAxisLable = '元'
      })
    },
    getQrnh (code, minTradedate) {
      let opts = {
        fields: ['tradedate', 'year_yield_by7d'].join(','),
        min_tradedate: minTradedate
      }
      getProductNav(code, opts).then((data) => {
        return data.result.items
      }).then((navs) => {
        var compare = function (a, b) {
          return a[0] - b[0]
        }
        var yearYieldBy7d = navs.map(function (item) {
          return [item.tradedate, item.year_yield_by7d]
        }).sort(compare)
        return yearYieldBy7d
      }).then((val) => {
        this.trendConfig.series = [{
          name: '七日年化',
          data: val
        }]
        this.trendConfig.legendEnable = false
        this.trendConfig.yAxisLable = '%'
      })
    },
    getValuation (code) {
      var self = this
      let random = moment().format('YYYYMMDDHHmm')
      getProductValuation(code, random).then((data) => {
        self.valuationTrend = data.result.valuations
      })
    }
  }
}
</script>

<style lang="pcss">
@import "styles/vars.css";

.trend {
  background-color: $white-color
  margin-top: 8px
  .trend-main {
    min-height: 350px
    .trend-period {
      display: table
      table-layout: fixed
      margin: 15px auto
      width: 92%
      border: 1px solid $border-color
      border-radius: 2px
      li {
        display: table-cell
        text-align: center
        padding: 6px 0
        color: $second-font-color
        font-size: $aux-l-font
        border-right: 1px solid $border-color
        &:last-child {
          border-right: none
        }
        &.active {
          color: $first-font-color
          background: $border-color
        }
      }
    }
    .trend-tips {
      width: 100%
      text-align: center
      color: $second-font-color
      font-size: $aux-s-font
      padding-bottom: 20px
    }
  }
}
</style>
