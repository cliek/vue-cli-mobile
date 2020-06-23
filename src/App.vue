<template>
	<router-view />
</template>

<script>
export default {
	name: "App"
};
</script>

<style lang="css">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.content {
	padding: 20px;
	padding-top: 1rem;
}
.van-nav-bar{
	position: fixed !important;
	width: 100%;
	top: 0rem;
}
</style>
