<template>
  <div class="edit-container">
    <div v-if="header" class="edit-toolbar" :id="'toolbar' + editorId">
      <i data-cmd="bold" class="iconfont icon-gonggong-jiacu"></i>
      <i
        data-cmd="insertOrderedList"
        class="iconfont icon-gonggong-youxianliebiao"
      ></i>
      <i
        data-cmd="insertUnorderedList"
        class="iconfont icon-gonggong-wuxuliebiao"
      ></i>
      <el-popover
        placement="bottom"
        trigger="manual"
        width="260"
        class="link-popper"
        v-model="visible"
        :append-to-body="false"
        popper-class="link-popper"
      >
        <el-input
          v-model="link"
          placeholder="请输入链接"
          @input="hangdleLinkChange"
          style="width: 252px"
        ></el-input>
        <div class="link-content" style="display: flex">
          <span v-show="isLinkError" class="error">请输入链接</span>
          <span
            style="color: #ff0000; padding-left: 4px"
            class="icon-20 iconfont icon-gonggong-bufuhe"
            @click="visible = false"
          ></span>
        </div>
        <i
          slot="reference"
          data-cmd="createLink"
          data-pop="输入链接"
          @click="handleClick"
          style="font-size: 20px"
          class="iconfont icon-gonggong-lianjie"
        ></i>
      </el-popover>
      <!-- <span data-cmd="unlink">删除链接</span> -->
    </div>
    <div class="edit-content" tabindex="1">
      <iframe
        :id="'editor' + editorId"
        width="100%"
        height="100%"
        frameborder="0"
        style="display: block"
        @input="input"
        onfocus="onfocus"
      ></iframe>
      <span class="el-input__count">{{ curLength }}/{{ maxlength }}</span>
    </div>
  </div>
</template>
<script>
import Editor from "./Editor.js";
// import { generateId } from "@/utils/common";
const generateId = function () {
  return Math.floor(Math.random() * 10000);
};
// https://github.com/lizzz0523/language/blob/master/javascript/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E8%B6%85%E7%AE%80%E5%8D%95%E7%9A%84%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8.md
export default {
  name: "SampleEdit",
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    showWordLimit: {
      type: Boolean,
      default: true,
    },
    maxlength: {
      type: Number,
      default: 300,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    disabled: Boolean,
    // keyId: {
    //   type: String,
    //   default: () => Math.random() + "",
    // },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      editor: null,
      innerHTML: "",
      index: 0,
      link: "",
      visible: false,
      isLinkError: false,
      editorId: generateId(),
    };
  },
  watch: {
    value(val) {
      console.log("监听value改变");

      this.innerHTML = val;
      if (this.disabled) {
        this.init();
      }
    },
  },
  mounted() {
    this.index++;
    // console.log(this.index);
    this.innerHTML = this.value;
    this.init();
  },

  computed: {
    curLength() {
      // https://juejin.cn/post/6966318245531893768
      return (this.innerHTML || "")
        .replace(/<[^>]+>/g, "")
        .replace(/ |\n|\r\n|&nbsp;|&ensp;/g, "")
        .replace(/&([a-z]{2,5}|#[0-9]{1,6});/g, " ").length;
    },
  },
  methods: {
    hangdleLinkChange() {
      if (this.link) {
        this.isLinkError = false;
      }
    },
    handleLinkSave() {
      if (!this.link) {
        this.isLinkError = true;
        return;
      }
      let selection = this.editor.getSelection();
      selection.save();
      selection.restore();
      this.editor.execCommand("createLink", this.link);
      this.$emit(
        "change",
        this.editor.editor.contentWindow.document.body.innerHTML
      );
      this.visible = false;
      this.link = "";
    },
    handleClick() {
      this.isLinkError = false;
      this.visible = true;
    },
    input() {
      // console.log(232, this.innerHTML);
    },
    onfocus() {
      // console.log(233, this.innerHTML);
    },
    init() {
      let editor = new Editor(
        `#editor${this.editorId}`,
        this.innerHTML,
        this.disabled,
        this.placeholder,
        this.header
      );
      editor.editor.contentDocument.oninput = () => {
        // console.log(e.target.innerHTML);
        this.$emit(
          "change",
          editor.editor.contentWindow.document.body.innerHTML
        );
      };
      this.editor = editor;
      editor.editor.contentDocument.onkeyup = () => {
        // console.log("up", e.target.innerHTML, e.target.innerText);
        this.$emit(
          "change",
          editor.editor.contentWindow.document.body.innerHTML
        );
      };
      if (this.header) {
        let toolbar = document.querySelector(`#toolbar${this.editorId}`);
        toolbar.addEventListener(
          "click",
          (event) => {
            const target = event.target;
            const cmd = target.dataset.cmd;
            if (!cmd || cmd === "createLink") return;
            // 创建一个选区 并保存当前的状态
            const selection = editor.getSelection();
            selection.save();
            // 恢复之前的选区，由于弹出prompt后，焦点会改变
            selection.restore();
            // 执行命令
            editor.execCommand(cmd);
            this.$emit(
              "change",
              editor.editor.contentWindow.document.body.innerHTML
            );
          },
          false
        );
      }
    },
  },

  destroyed() {},
};
</script>
<style lang="less" scoped>
/deep/.link-popper {
  display: inline-block;
  width: 20px;
  height: 20px;
  // box-sizing: border-box;
  // width: 272px;
  // min-width: 272px;
  // padding: 12px 8px 12px 12px;
  .error {
    color: #df4545;
  }
  .link-content {
    margin-top: 4px;
    height: 20px;
    line-height: 20px;
  }
}
.edit-content {
  position: relative;
}
.el-input__count {
  line-height: 1;
  color: #939393;
  display: block;
  position: absolute;
  right: 16px;
  bottom: 10px;
  font-size: 12px;
}

.edit-container #editor {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.edit-toolbar {
  box-sizing: border-box;
  height: 40px;
  text-align: left;
  line-height: 40px;
  padding-left: 16px;
  border: 1px solid #dcdfe6;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.edit-toolbar > i {
  margin-right: 16px;
  font-size: 20px;
}
</style>
