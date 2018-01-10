<template>
    <div id="line-spin">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
    :root{
        --radius: 15px;
        --second: 1;
    }
    @keyframes line-spin-fade-loader {
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 1;
      }
    }
    @define-mixin rotate $n{
        $angle: calc($n * 30);
        transform:rotate($(angle)deg);
        -ms-transform:rotate($(angle)deg); /* IE 9 */
        -moz-transform:rotate($(angle)deg); /* Firefox */
        -webkit-transform:rotate($(angle)deg); /* Safari and Chrome */
        -o-transform:rotate($(angle)deg); /* Opera */
    }

    #line-spin{
      position: relative;
      width: calc(var(--radius) * 2 + 10);
      height: calc(var(--radius) * 2 + 10);
      margin-left: 5px;
      >div{
        position:absolute;
        width: 2px;
        height: 10px;
        background-color: #eee;
      }
      >div:nth-child(1){
        top: 0;
        left: var(--radius);
        @mixin rotate 0{};
        animation: line-spin-fade-loader var(--second)s  infinite;
      }
      >div:nth-child(2){
        top: calc(var(--radius)*0.14);
        left:calc(var(--radius)*(1+0.5));
        @mixin rotate 1{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-1)s infinite;
      }
      >div:nth-child(3){
        top: calc(var(--radius)*0.5);
        left:calc(var(--radius)*(1+0.86));
        @mixin rotate 2{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-2)s infinite;
      }
      >div:nth-child(4){
        top: calc(var(--radius)*1);
        left:calc(var(--radius)*2);
        @mixin rotate 3{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-3)s infinite;
      }
      >div:nth-child(5){
        top: calc(var(--radius)*(1+0.5));
        left:calc(var(--radius)*(1+0.86));
        @mixin rotate 4{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-4)s infinite;
      }
      >div:nth-child(6){
        top: calc(var(--radius)*(1+0.86));
        left:calc(var(--radius)*(1+0.5));
        @mixin rotate 5{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-5)s infinite;
      }
      >div:nth-child(7){
        top: calc(var(--radius)*2);
        left:calc(var(--radius)*1);
        @mixin rotate 6{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-6)s infinite;
      }
      >div:nth-child(8){
        top: calc(var(--radius)*(1+0.86));
        left:calc(var(--radius)*(1-0.5));
        @mixin rotate 7{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-7)s infinite;
      }
      >div:nth-child(9){
        top: calc(var(--radius)*(1+0.5));
        left:calc(var(--radius)*(1-0.86));
        @mixin rotate 8{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-8)s infinite;
      }
      >div:nth-child(10){
        top: calc(var(--radius)*1);
        left:0;
        @mixin rotate 9{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-9)s infinite;
      }
      >div:nth-child(11){
        top: calc(var(--radius)*0.5);
        left:calc(var(--radius)*(1-0.86));
        @mixin rotate 10{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-10)s infinite;
      }
      >div:nth-child(12){
        top: calc(var(--radius)*(1-0.86));
        left:calc(var(--radius)*(1-0.5));
        @mixin rotate 11{};
        animation: line-spin-fade-loader var(--second)s calc(var(--second)*-11)s infinite;
      }
    }


</style>

<script>
    export default{
      data () {
        return {}
      },
      name: 'line-spin'
    }
</script>