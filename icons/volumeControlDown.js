
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
            children.concat([_c('path',{attrs:{"d":"M17.25 12.746a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM12.748 20.245c-.479 0-.936-.149-1.322-.43l-6.394-4.069H2.25A2.252 2.252 0 010 13.496v-3a2.252 2.252 0 012.25-2.25h2.781l6.394-4.069a2.235 2.235 0 012.331-.194A2.238 2.238 0 0115 5.997v12c0 .483-.16.963-.45 1.35a2.265 2.265 0 01-1.802.898zm-.495-1.682c.013.009.029.019.043.03.134.101.29.153.452.153a.753.753 0 00.751-.75v-12a.746.746 0 00-.415-.671.748.748 0 00-.785.071l-.046.032L6 9.408v5.177l6.253 3.978zM2.25 9.746a.75.75 0 00-.75.75v3c0 .414.336.75.75.75H4.5v-4.5H2.25z"}})])
          )
        }
      }
    