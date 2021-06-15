
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
            children.concat([_c('path',{attrs:{"d":"M2.75 24A2.754 2.754 0 010 21.25V2.75A2.754 2.754 0 012.75 0h18.5A2.754 2.754 0 0124 2.75v18.5A2.754 2.754 0 0121.25 24H2.75zm0-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25H2.75z"}}),_c('path',{attrs:{"d":"M17.25 15.75a.746.746 0 01-.592-.29L12 9.471 7.342 15.46a.751.751 0 01-1.184-.92l4.658-5.989a1.49 1.49 0 011.186-.578 1.484 1.484 0 011.182.578l4.658 5.99a.746.746 0 01-.592 1.209z"}})])
          )
        }
      }
    