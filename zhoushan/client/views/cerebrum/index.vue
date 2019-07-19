<template>
    <div class="page">
        <!-- <img src="../../assets/img/cerebrumImg/title4.png" alt=""> -->
        <div class="container">
            <div class="left fl">
                <div class="data-center chunk">
                    <box-border  :title="'数据中心'" :english="'Data Center'" :bgType="require('../../assets/img/cerebrumImg/border1.png')" :num="'01'">
                        <div class="library library1 clr">
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/lt1.png" alt="">
                                <p>人口专题库</p>
                            </div>
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/lt2.png" alt="">
                                <p>法人专题库</p>
                            </div>
                        </div>
                        <div class="library library2 clr">
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/lt3.png" alt="">
                                <p>人口专题库</p>
                            </div>
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/lt4.png" alt="">
                                <p>法人专题库</p>
                            </div>
                        </div>
                    </box-border>
                </div>
                <div class="user-portrait chunk">
                    <box-border  :title="'用户画像'" :english="'User portrait'" :bgType="require('../../assets/img/cerebrumImg/border2.png')" :num="'02'">
                        <div class="user-num clr">
                            <div class="user-pic fl">
                                <img src="../../assets/img/cerebrumImg/dbPeople.png" alt="">
                            </div>
                            <ul class="num-detail fl">
                                <li>
                                    <span>画像数：</span>
                                    <span class="num">1234 条</span>
                                </li>
                                <li>
                                    <span>标签数：</span>
                                    <span class="num">456 条</span>
                                </li>
                                <li>
                                    <span>省关系标签：</span>
                                    <span class="num">67565 条</span>
                                </li>
                            </ul>
                        </div>
                    </box-border>
                </div>
            </div>
            <div class="middle fl">
                <img class="cerebrum-bg" src="../../assets/img/cerebrumImg/zhinao.png" alt="">
                <img class="cerebrum1" src="../../assets/img/cerebrumImg/cerebrum.png" alt="">
                <img class="text" src="../../assets/img/cerebrumImg/zongzhitounao.png" alt="">
            </div>
            <div class="right fl">
                <div class="intelligence chunk">
                <box-border  :title="'人工智能'" :english="'artificial intelligence'" :bgType="require('../../assets/img/cerebrumImg/border1.png')" :num="'03'">
                    <div class="library library3 clr">
                        <div class="fl">
                            <img src="../../assets/img/cerebrumImg/rt1.png" alt="">
                            <p>人口专题库</p>
                        </div>
                        <div class="fl">
                            <img src="../../assets/img/cerebrumImg/rt2.png" alt="">
                            <p>法人专题库</p>
                        </div>
                    </div>
                    <div class="user-num clr">
                        <ul class="num-detail fl">
                            <li>
                                <span>对话量：</span>
                                <span class="num">1234 条</span>
                            </li>
                            <li>
                                <span>命中率：</span>
                                <span class="num">80%</span>
                            </li>
                            <li>
                                <span>补标语量：</span>
                                <span class="num">67565 条</span>
                            </li>
                            <li>
                                <span>服务机器人：</span>
                                <span class="num">6 条</span>
                            </li>
                        </ul>
                        <div class="user-pic fl">
                            <img src="../../assets/img/cerebrumImg/onePeople.png" alt="">
                        </div>
                    </div>
                </box-border>
                </div>
                <div class="model chunk">
                <box-border  :title="'算法模型'" :english="'Algorithm model'" :bgType="require('../../assets/img/cerebrumImg/border2.png')" :num="'04'">
                    <div class="model-library fl">
                         <div class="library library4 clr">
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/rb1.png" alt="">
                                <p>人口专题库</p>
                            </div>
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/rb2.png" alt="">
                                <p>法人专题库</p>
                            </div>
                        </div>
                        <div class="library library5 clr">
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/rb3.png" alt="">
                                <p>人口专题库</p>
                            </div>
                            <div class="fl">
                                <img src="../../assets/img/cerebrumImg/rb4.png" alt="">
                                <p>法人专题库</p>
                            </div>
                        </div>
                    </div>
                    <ul class="model-num fl">
                        <li class="clr">
                            <span class="fl">用户模型：</span>
                            <span class="num fl">123 个</span>
                        </li>
                        <li class="clr">
                            <span class="fl">已建模型：</span>
                            <span class="num fl">456</span>
                        </li>
                    </ul>
                </box-border>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import boxBorder from 'components/common/boxBorder'
export default {
    components: {
        'box-border': boxBorder,
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>


