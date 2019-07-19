<template>
	<div class="bs-modbox" :style="`background-image:url(${bgType})`">
		<div class="nav-title">
        <div class="nav-title-left">
            <span class="nav-name">{{title}}</span>
            <br/>
            <span class="english">{{english}}</span>
        </div>
        <div class="nav-title-right">
            <div class="nav-count">\{{num}}</div>
        </div>
    </div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
  props: ["bgType", "title", "english", "num"]
};
</script>

<style scoped>
.bs-modbox {
  height: 100%;
  width: 100%;
  position: relative;
  background-size: 100% 100%;
}
.english {
  color: #6fdafb !important;
  font-size: 14px !important;
  font-weight: 700;
}
.nav-name {
  color: rgb(224, 239, 246);
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
}
.nav-title > div {
  position: absolute;
}

.nav-title-left {
  left: 30px;
  top: 25px;
  text-align: left;
}

.nav-title-right {
  right: 20px;
  top: 15px;
}

.nav-title-right span {
  vertical-align: middle;
}
.nav-add {
  font-size: 18px;
  color: rgb(84, 220, 240);
}

.nav-add-num {
  font-size: 18px;
  color: rgb(240, 189, 84);
  display: inline-block;
  margin-right: 20px;
}

.nav-count {
  color: rgb(123, 185, 255);
  font-size: 42px;
}
.content {
  /* position: absolute;
  top:20px;
  left: 10px;
  right: 10px;
  bottom:20px; */
}
.top-65 {
  top: 65px;
}
</style>

