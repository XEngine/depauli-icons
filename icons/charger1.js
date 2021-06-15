
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-2.253h-.75a2.252 2.252 0 01-2.25-2.25v-1.889a6.715 6.715 0 01-3-5.608v-4.5A2.252 2.252 0 017.5 4.5h.75V.75a.75.75 0 011.5 0V4.5h4.5V.75a.75.75 0 011.5 0V4.5h.75a2.252 2.252 0 012.25 2.25v4.5a6.715 6.715 0 01-3 5.608v1.889a2.252 2.252 0 01-2.25 2.25h-.75v2.253A.75.75 0 0112 24zm-2.25-5.253c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-1.134c-.722.257-1.476.387-2.25.387s-1.528-.13-2.25-.387v1.134zM7.5 6a.75.75 0 00-.75.75v4.5A5.256 5.256 0 0012 16.5a5.256 5.256 0 005.25-5.25v-4.5A.75.75 0 0016.5 6h-9z"}})])
          )
        }
      }
    