
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24.01A3.754 3.754 0 010 20.26V3.76A3.754 3.754 0 013.75.01h16.5A3.754 3.754 0 0124 3.76v11.507a3.64 3.64 0 01-.06.656 3.719 3.719 0 01-1.039 1.997l-4.992 4.992a3.715 3.715 0 01-2.094 1.053c-.188.03-.378.046-.558.046H3.75zm0-22.5A2.252 2.252 0 001.5 3.76v16.5a2.252 2.252 0 002.25 2.25H15v-3.75a3.754 3.754 0 013.75-3.75h3.75V3.76a2.252 2.252 0 00-2.25-2.25H3.75zm15 15a2.252 2.252 0 00-2.25 2.25v3.375c.125-.082.241-.177.349-.285l4.992-4.992c.107-.107.202-.224.285-.349H18.75z"}}),_c('path',{attrs:{"d":"M12 14.26a.75.75 0 01-.75-.75v-3h-3a.75.75 0 010-1.5h3v-3a.75.75 0 011.5 0v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    