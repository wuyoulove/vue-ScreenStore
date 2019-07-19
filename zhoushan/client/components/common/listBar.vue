<template>
    <div class="list-bar clr">
        <span class="list-bar-name fl">{{listName}}</span>
        <span class="list-bar-num fr">{{listNum}}</span>
        <div><i :style="`width:${60}%;background:linear-gradient(to right,rgb(67,126,194), rgb(101,211,205));display:inline-block;height:100%`"></i></div>
    </div>
</template>
<script>
export default {
    props: ['listName','listNum']
}
</script>
<style scoped>
.list-bar {
    width: 100%;
    height: 50px;
    position: relative;
    padding-top: 20px;
    line-height: 20px;
    color: #95fcf4;
    font-size: 14px;
    font-weight: 600;
    margin-top: -10px;
    margin-bottom: 15px;
}
.list-bar div {
    width: 100%;
    height: 14px;
    text-align: left;
    background: rgba(28,79,122,.8);
    margin-top: 25px;
    border-radius: 3px;
    overflow: hidden;
}
</style>

