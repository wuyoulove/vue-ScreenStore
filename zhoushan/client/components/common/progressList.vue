<template>
    <div class="progress-wrap">
        <div class="clr progress-title">
            <span v-for="item in dataTitle">{{item}}</span>
        </div>
        <ul>
            <li v-for="(item,index) in dataList" :key="index">
                <div>NO.{{index+1}}</div>
                <div :title="item.name">{{item.name}}</div>
                <div>{{item.msgAll}}</div>
                <div class="progress">
                    <p><i :style="`width:${item.hold}`"></i></p>
                    {{item.hold}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        dataTitle: {
            type: Array,
            default: () => ['排名','姓名','信息采集总量','显示']
        },
        dataList: {
            default: () => [
                { name: '普陀区张三', msgAll: 123334, hold: '60%' },
                { name: '舟山市李四', msgAll: 593848, hold: '60%' },
                { name: '普陀区张三', msgAll: 123334, hold: '10%' },
                { name: '舟山市李四', msgAll: 34, hold: '60%' },
                { name: '普陀区张三', msgAll: 123334, hold: '90%' },
                { name: '舟山市李四', msgAll: 123593848334, hold: '60%' },
                { name: '普陀区张三', msgAll: 123334, hold: '30%' }
            ],
        },
    },
}
</script>

<style lang="scss" scoped>
    .progress-wrap{
        padding: 20px;
        line-height: 37px;
        .progress-title {
            display: flex;
            span {
                background: #093e79;
                color: #66dffb;
                font-size: 16px;
                margin: 0 1px;
            }
        }
        li {
            display: flex;
            font-size: 14px;
            div {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .progress {
                text-align: left;
                color: #8ec0ff;
            }
            p{
                width: calc(100% - 60px);
                height: 10px;
                display: inline-block;
                background: rgba(28,79,122,.8);
                vertical-align: middle;
                margin: 0 10px;
                position: relative;
                i {
                    background:linear-gradient(to right,rgb(67,126,194), rgb(101,211,205));
                    display:inline-block;
                    height:100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
        }
    }
    li:nth-child(2n) {
        color: #3e90f7;
    }
    li:nth-child(2n+1) {
        color: #8ec0ff;
    }
    .progress-title span:nth-child(1),li div:nth-child(1) {
        flex:3;
    }
    .progress-title span:nth-child(2),li div:nth-child(2) {
        flex:5;
    }
    .progress-title span:nth-child(3),li div:nth-child(3) {
        flex:5;
    }
    .progress-title span:nth-child(4),li div:nth-child(4) {
        flex:7;
    }
</style>

