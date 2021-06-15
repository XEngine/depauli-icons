
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
            children.concat([_c('path',{attrs:{"d":"M2.75 24A2.754 2.754 0 010 21.25V2.75A2.754 2.754 0 012.75 0h18.5A2.754 2.754 0 0124 2.75v18.5A2.754 2.754 0 0121.25 24H2.75zm0-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25H2.75z"}}),_c('path',{attrs:{"d":"M15 18a.751.751 0 01-.46-.158l-5.989-4.658c-.316-.246-.517-.6-.567-.998a1.488 1.488 0 01.567-1.37l5.989-4.658a.747.747 0 011.053.132.743.743 0 01.152.553.742.742 0 01-.284.499L9.471 12l5.989 4.658a.746.746 0 01.132 1.052A.746.746 0 0115 18z"}})])
          )
        }
      }
    