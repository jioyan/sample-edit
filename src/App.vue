<template>
  <div id="app">
    <Editor msg="Welcome to Your Vue.js App" v-model="value" />
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";

export default {
  name: "App",
  components: { Editor },
  data() {
    return {
      value: `<div><p data-pid="BSdj9FB9">直觉：直觉是基于个人经验和感知的<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E5%BF%AB%E9%80%9F%E5%86%B3%E7%AD%96&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">快速决策<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>方式。它可能在某些情况下是有用的，特别是当你需要在短时间内做出决策时，或者当<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E9%97%AE%E9%A2%98%E5%A4%8D%E6%9D%82%E6%80%A7&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">问题复杂性<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>较低，经验丰富时。然而，直觉并不总是准确的，有时候可能会受到情绪、偏见或错误的影响。</p><p data-pid="CassdWBp">大数据：大数据是通过分析大量数据集合得出的结论。它可以提供更客观的信息，基于统计和<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E6%A8%A1%E5%BC%8F%E5%88%86%E6%9E%90&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">模式分析<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>，可以帮助你做出更明智的决策。然而，大数据也可能会因为<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E6%95%B0%E6%8D%AE%E6%BA%90&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">数据源<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>的问题、样本偏差或模型不准确而导致错误的结论。</p><p data-pid="RuZTdwnK">在现实生活中，最好的方法通常是综合使用直觉和大数据，根据情况进行权衡。对于一些关键决策，特别是涉及高风险或重要后果的决策，依靠大数据和<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E7%B3%BB%E7%BB%9F%E6%80%A7%E5%88%86%E6%9E%90&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">系统性分析<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>可能会更为可靠。但在一些需要快速决策或情感因素较重的情况下，直觉也是有价值的参考。</p><p data-pid="USehYu-y">最终，决策取决于问题的性质、你的需求和资源，以及你对直觉和大数据的<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E4%BF%A1%E4%BB%BB%E7%A8%8B%E5%BA%A6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">信任程度<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>。在重要决策中，了解和权衡两者的优缺点，有助于做出更<a class="RichContent-EntityWord css-pgtd2j" data-za-not-track-link="true" href="https://www.zhihu.com/search?q=%E6%98%8E%E6%99%BA%E7%9A%84%E9%80%89%E6%8B%A9&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3187573203%7D" target="_blank">明智的选择<svg width="10px" height="10px" viewBox="0 0 15 15" class="css-1dvsrp"><path d="M10.89 9.477l3.06 3.059a1 1 0 0 1-1.414 1.414l-3.06-3.06a6 6 0 1 1 1.414-1.414zM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path></svg></a>。</p></div>`,
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 600px;
}
</style>
