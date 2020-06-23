<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
	<h3>其他注意事项</h3>
    <ul>
      <li class="demo">1.本实例基于lib-flexible/flexible.js与postcssPlugin实现px转rem，可实现在设计图尺寸下自动换算成rem的手机端模板。</li>
      <li class="demo">
        2.同时脚手架集成VantUi组件
        <a href="https://youzan.github.io/vant/#/zh-CN/">点击查看</a>，已经全局注入，可直接使用。如遇到需要修改框架主题颜色可以参考
        <a href="https://youzan.github.io/vant/#/zh-CN/theme">定制主题</a>，如需修改部分样式可以使用<pre>/deep/</pre>方式在scoped中修改单个组件样式。
      </li>
      <li class="demo">3.本实例main.js中使用了mode(演示)模式，这个将会使请求拦截与router拦截失效，在下载后可以删除<pre>window.mode = true;</pre>即可自动开启axios与router的拦截功能。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding-top: 15px;
}
li,
li a,
p {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
}
a {
  color: #42b983;
}
.demo{
	font-size: 30px;
    line-height: 50px;
    color: #777;
}
</style>
