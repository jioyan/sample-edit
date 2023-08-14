class Editor {
  constructor(selector, innerHTML, disabled, placeholder) {
    this.editor = document.querySelector(selector);
    this.window = this.editor.contentWindow;
    this.document = this.editor.contentDocument;
    this.document.designMode = disabled ? "off" : "on";
    this.window.document.body.innerHTML = innerHTML || "";
    this.insertStyle(placeholder, disabled);
  }

  insertStyle(placeholder, disabled) {
    let head = this.document.querySelector("head");
    let style = this.document.createElement("style");
    this.document.body.setAttribute("placeholder", placeholder);
    this.document.body.classList.add("edit-box");
    if (disabled) {
      this.document.body.classList.add("is-disabled");
    }

    // 对内容的一些基本样式设置
    style.innerHTML = `
            * {
                margin: 0;
                padding: 0;
                font-size: 14px;
                line-height: 1.5;
                color: #606266;
            }
            a{
              font-size: 14px;
              color: #4A49CC;
              line-height: 22px;
              text-decoration-line: none;
            }
            html{
              height:100%;
              overflow: hidden;
            }
            ul, ol {
                margin-left: 20px;
            }
            body{
              height: 100%;
              box-sizing: border-box;
              padding: 8px 15px 5px;
              overflow-y: scroll;
            }
            .edit-box:empty::before {
              content: attr(placeholder);
              color:#bbb;
            }
            /*不一样的地方*/
            .edit-box:focus {
              content:none;
            }
            .edit-box:focus {
              border: 1px solid #4a49cc;
            }
            .edit-box:focus {
              border: 1px solid #4a49cc;
            }
            .edit-box {
              border: 1px solid #dcdfe6;
              border-radius: 0 0 4px 4px;
            }
            .is-disabled {
              background-color: #f5f7fa;
              border-color: #e4e7ed;
              color: #c0c4cc;
              cursor: not-allowed;
          }      
        `;
    head.appendChild(style);
  }

  execCommand(cmd, args) {
    // 执行命令，其中第二个参数是是否启用浏览器默认UI
    // 由于是我们自己实现的UI，因此这里是false，表示进入默认UI
    this.document.execCommand(cmd, false, args);
  }

  getSelection() {
    return new Selection(this.window);
  }
}
class Selection {
  constructor(window) {
    this.window = window;
    this.document = window.document;
    this.ranges = this.getRanges();
  }

  getRanges() {
    let selection;
    let ranges = [];

    if (this.document.selection) {
      selection = this.document.selection;
      ranges = [selection.createRange()];
    } else {
      selection = this.window.getSelection();

      for (let i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
    }

    return ranges;
  }

  setRanges(ranges) {
    let selection;

    if (this.document.selection) {
      selection = this.document.selection;
      ranges = ranges || this.ranges;

      let target = ranges[0];
      let range = selection.createRange();

      range.setEndPoint("EndToEnd", target);

      if (range.text) {
        range.setEndPoint("StartToStart", target);
      }

      range.select();
    } else {
      selection = this.window.getSelection();

      selection.removeAllRanges();
      ranges = ranges || this.ranges;

      ranges.forEach((range) => {
        selection.addRange(range);
      });
    }
  }

  getRangeText(range) {
    range = range || this.ranges[0];

    if (!range) {
      return "";
    }

    return range.text || range.toString();
  }

  getRangeNode(range) {
    range = range || this.ranges[0];

    if (!range) {
      return null;
    }

    let node = range.parentElement
      ? range.parentElement()
      : range.commonAncestorContainer;

    if (node.nodeType === 1) {
      return node;
    } else {
      return node.parentNode;
    }
  }

  isRangeEmpty(range) {
    range = range || this.ranges[0];

    if (!range) {
      return false;
    }

    if (range.text) {
      return false;
    }

    if (range.startContainer) {
      if (
        range.startContainer === range.endContainer &&
        range.startOffset === range.endOffset
      ) {
        return true;
      }
    }

    return false;
  }
  // 保存当前的选区
  save() {
    this.ranges = this.getRanges();
  }
  // 恢复之前保存的选区
  restore() {
    this.setRanges(this.ranges);
  }
}
export default Editor;
