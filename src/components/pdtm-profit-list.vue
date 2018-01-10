<template lang="html">
    <div class="profit">
        <div class="ui-tab">
            <span class="tab-item" :class="{active: profitTab == 'profitTab1'}" @click="switchTab('profitTab1')">{{profitTitle}}收益</span>
            <span class="tab-item" :class="{active: profitTab == 'profitTab2'}" @click="switchTab('profitTab2')">{{profitTitle}}净值</span>
        </div>
        <ul class="ui-list ui-list2" v-if="isQs && profitTab == 'profitTab1'">
            <li class="list-item">
                <span>周期</span>
                <span>收益</span>
            </li>
            <li class="list-item">
                <span>近一周</span>
                <rate-display :value="$parent.detail.oneweek_income"></rate-display>
            </li>
            <li class="list-item">
                <span>近一月</span>
                <rate-display :value="$parent.detail.onemonth_income"></rate-display>
            </li>
            <li class="list-item">
                <span>近一季</span>
                <rate-display :value="$parent.detail.threemonth_income"></rate-display>
            </li>
            <li class="list-item">
                <span>近半年</span>
                <rate-display :value="$parent.detail.sixmonth_income"></rate-display>
            </li>
            <li class="list-item">
                <span>近一年</span>
                <rate-display :value="$parent.detail.oneyear_income"></rate-display>
            </li>
            <li class="list-item">
                <span>今年以来</span>
                <rate-display :value="$parent.detail.thisyear_income"></rate-display>
            </li>
        </ul>
        <ul class="ui-list ui-list3" v-if="!isQs && profitTab == 'profitTab1'">
            <li class="list-item">
                <span>周期</span>
                <span>收益</span>
                <span>分类排名</span>
            </li>
            <li class="list-item">
                <span>近一周</span>
                <rate-display :value="$parent.detail.oneweek_income"></rate-display>
                <span>{{periodRankings.oneweek_ranking}}/{{periodRankings.oneweek_total}}</span>
            </li>
            <li class="list-item">
                <span>近一月</span>
                <rate-display :value="$parent.detail.onemonth_income"></rate-display>
                <span>{{periodRankings.onemonth_ranking}}/{{periodRankings.onemonth_total}}</span>
            </li>
            <li class="list-item">
                <span>近一季</span>
                <rate-display :value="$parent.detail.threemonth_income"></rate-display>
                <span>{{periodRankings.threemonth_ranking}}/{{periodRankings.threemonth_total}}</span>
            </li>
            <li class="list-item">
                <span>近半年</span>
                <rate-display :value="$parent.detail.sixmonth_income"></rate-display>
                <span>{{periodRankings.sixmonth_ranking}}/{{periodRankings.sixmonth_total}}</span>
            </li>
            <li class="list-item">
                <span>近一年</span>
                <rate-display :value="$parent.detail.oneyear_income"></rate-display>
                <span>{{periodRankings.oneyear_ranking}}/{{periodRankings.oneyear_total}}</span>
            </li>
            <li class="list-item">
                <span>今年以来</span>
                <rate-display :value="$parent.detail.thisyear_income"></rate-display>
                <span>{{periodRankings.thisyear_ranking}}/{{periodRankings.thisyear_total}}</span>
            </li>
        </ul>
        <ul class="ui-list ui-list4" v-if="isFhb && profitTab == 'profitTab2'">
            <li class="list-item">
                <span>日期</span>
                <span>单位净值</span>
                <span>累计净值</span>
                <span>日涨幅</span>
            </li>
            <li class="list-item" v-for="item in navList">
                <span>{{item.tradedate | beautyFormatDate('yyyy-mm-dd')}}</span>
                <span>{{item.unit_net}}</span>
                <span>{{item.accum_net}}</span>
                <rate-display :value="item.unit_net_change_pct" ></rate-display>
            </li>
            <li>
                <router-link class="ui-link" :to="{path:'netvalues',query: { fund_type: fundType }}" append>查看更多 <span class="iconfont icon-next link-icon"></span></router-link>
            </li>
        </ul>
        <ul class="ui-list hb-netvalue-list" v-if="!isFhb && profitTab == 'profitTab2'">
            <li class="list-item">
                <span>日期</span>
                <span>万分收益</span>
                <span>七日年化</span>
            </li>
            <li class="list-item" v-for="item in navList">
                <span>{{item.tradedate | beautyFormatDate('yyyy-mm-dd')}}</span>
                <span>{{item.tenthou_unit_incm}}</span>
                <span>{{item.year_yield_by7d}}%</span>
            </li>
            <li>
                <router-link class="ui-link" :to="{path:'netvalues',query: { fund_type: fundType }}" append>查看更多 <span class="iconfont icon-next link-icon"></span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getProductNav} from 'services/products'

export default {
      props: ['code', 'fundType'],
      data () {
        return {
          navList: [],
          profitTab: 'profitTab1'
        }
      },
      computed: {
        profitTitle () {
          if (this.fundType.indexOf('qs') > -1) {
            return '产品'
          } else {
            return '基金'
          }
        },
        periodRankings () {
          return this.$parent.detail.period_rankings[0]
        },
        isFhb () {
          if (this.fundType.indexOf('fhb') > -1) {
            return true
          } else {
            return false
          }
        },
        isQs () {
          if (this.fundType.indexOf('qs') > -1) {
            return true
          } else {
            return false
          }
        }
      },
      components: {
        'rate-display': require('components/rate-display.vue')
      },
      mounted () {
        this.getNavList(this.code, this.fundType)
      },
      methods: {
        switchTab (index) {
          switch (true) {
            case index.indexOf('profitTab') === 0:
              this.profitTab = index
              break
          }
        },
        getNavList (code) {
          let fields
          if (this.isFhb) {
            fields = ['tradedate', 'unit_net', 'accum_net', 'unit_net_change_pct'].join(',')
          } else {
            fields = ['tradedate', 'tenthou_unit_incm', 'year_yield_by7d'].join(',')
          }
          let opts = {
            fields: fields,
            page_size: 5,
            page: 1
          }
          getProductNav(code, opts).then((data) => {
            this.navList = data.result.items
          })
        }
      }
    }
</script>

<style lang="css">
    @import "styles/vars.css";

    .profit {
        background-color: $white-color;
        margin-top: 8px;
        .ui-list3 .list-item span:nth-child(2){
            flex-grow: 3;
        }
        .ui-list4 .list-item span:nth-child(2),
        .ui-list4 .list-item span:nth-child(3){
            flex-grow: 1.2;
        }
        .hb-netvalue-list span:nth-child(2){
            flex-grow: 2;
        }
        .ui-list2 .list-item {
            justify-content: space-between;
            & span{
                width:25%;
                flex: none;
            }
        }
    }

</style>
