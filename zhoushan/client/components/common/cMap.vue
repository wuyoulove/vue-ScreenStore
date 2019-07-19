
<template>
	<!-- 地图 -->
	<section class="cmap-mod">
		<div id="map-box"></div>
		<aside class="tip-box" v-if="tipPostion && !noTip" :style="tipPostion ? `top:${tipPostion.y}px; left:${tipPostion.x}px;`: ''">
			<h1 :style="{color: tipPostion.header.color}">
				{{ tipPostion.header.text }}
			</h1>
			<p v-for="(tip, index) in tipPostion.list" :style="{color: tip.color}" :key="index">
				<span>{{ tip.text }}</span> 
				<span>&nbsp;{{ tip.value }}</span>
			</p>
		</aside>
	</section>
</template>


<script>
import { setMap } from "../../assets/js/mapUtil";

export default {
  data() {
    return {
      tipPostion: null
    };
  },
  props: {
    mapInfo: Object,
    noTip: {
      type: Boolean,
      default: false
    },
    getTipInfo: {
      type: Function,
      default: () => {
        return [
          { text: "观音山街道", color: "orange" },
          { text: "邻里数", color: "green", value: 23 },
          { text: "街坊数", color: "orange", value: 223 },
          { text: "社会组织数", color: "red", value: 230 }
        ];
      }
    }
  },
  watch: {
    mapInfo: function(newMapInfo) {
      setMap(
        "#map-box",
        "map-tip-box",
        newMapInfo,
        (index, data, evt) => {
          if (index < 0) {
            this.tipPostion = null;
            return;
          } else {
            let info = this.getTipInfo(data.origin.name);
            this.tipPostion = Object.assign(
              {},
              {
                x: evt.offsetX - 50,
                y: evt.offsetY - 150,
                header: info.header,
                list: info.list
              }
            );
          }
        },
        (index, data) => {
          this.$emit("areaClick", { index, data });
        }
      );
    }
  },
  mounted: function() {
    // console.log(this.mapInfo)
    setMap(
      "#map-box",
      "map-tip-box",
      this.mapInfo,
      (index, data, evt) => {
        if (index < 0) {
          this.tipPostion = null;
          return;
        } else {
          let info = this.getTipInfo(data.origin.name);
          this.tipPostion = Object.assign(
            {},
            {
              x: evt.offsetX - 50,
              y: evt.offsetY - 180,
              header: info.header,
              list: info.list
            }
          );
        }
      },
      (index, data) => {
        this.$emit("areaClick", { index, data });
      }
    );
  }
};
</script>


<style>
#map-box,
.cmap-mod {
  position: relative;
  height: 100%;
}

.tip-box {
  position: absolute;
  /* padding: 10px 15px 20px 25px; */
  /* background: rgba(0, 0, 0, 0.7); */
  /* border: 2px solid #41b2ce; */
  border-radius: 3px;
  pointer-events: none;
  white-space: nowrap;
  color: #fff;
  min-width: 140px;
  box-shadow: 0 0 20px rgb(5,82,207)
}

.tip-box h1 {
  line-height: 28px;
  font-size: 18px;
  background: rgb(32,70,165);
  padding: 3px 5px;
}

.tip-box p {
  text-align: left;
  background: rgba(20,37,81,.8);
  padding: 5px 20px;
}

.tip-box span {
  line-height: 26px;
  text-align: left;
  font-size: 16px;
}
</style>