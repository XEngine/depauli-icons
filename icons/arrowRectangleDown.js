
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2.75 24A2.754 2.754 0 010 21.25V2.75A2.754 2.754 0 012.75 0h18.5A2.754 2.754 0 0124 2.75v18.5A2.754 2.754 0 0121.25 24H2.75zm0-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25H2.75z"}}),_c('path',{attrs:{"d":"M11.999 16.028a1.485 1.485 0 01-1.182-.578L6.158 9.46a.75.75 0 011.184-.921L12 14.529l4.658-5.989a.751.751 0 011.335.367.743.743 0 01-.152.553l-4.658 5.989a1.487 1.487 0 01-1.184.579z"}})])
          )
        }
      }
    