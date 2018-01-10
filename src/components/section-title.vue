<!-- Example:
<section-title>非货币基金</section-title> -->

<template>
    <div class="section-title">
        <h2><slot></slot></h2>
    </div>
</template>

<style scoped>
@import "styles/vars.css";

.section-title {
    h2 {
        padding: 14px;
        padding-left: 0;
        color: $first-font-color;
        font-weight: normal;
        font-size: 16px;
        &::before{
            content:"";
            display:inline-block;
            margin-right: 8px;
            width:4px;
            height:12px;
            background-color: $main-color;
        }
    }
}
</style>