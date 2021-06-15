
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
            children.concat([_c('path',{attrs:{"d":"M3 23.998a2.252 2.252 0 01-2.25-2.25v-19.5A2.252 2.252 0 013-.002h15c.591 0 1.148.227 1.572.639l2.996 2.879c.435.425.683 1.013.682 1.615v16.617a2.252 2.252 0 01-2.25 2.25H3zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.131a.753.753 0 00-.226-.537l-2.995-2.879a.754.754 0 00-.528-.217H3z"}}),_c('path',{attrs:{"d":"M15.002 19.498a.743.743 0 01-.53-.22l-1.72-1.72v1.189a.75.75 0 01-1.5 0v-1.189l-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l2.78-2.78v-.439h-4c-.689 0-1.25-.561-1.25-1.25v-6.5c0-.689.561-1.25 1.25-1.25h9.5c.689 0 1.25.561 1.25 1.25v6.5c0 .689-.561 1.25-1.25 1.25h-4v.439l2.78 2.78a.752.752 0 01-.53 1.281zm1.5-6v-6h-9v6h9z"}})])
          )
        }
      }
    