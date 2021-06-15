
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
            children.concat([_c('path',{attrs:{"d":"M1.409 21.25A1.411 1.411 0 010 19.84V7a3.721 3.721 0 011.099-2.651l.025-.023A3.718 3.718 0 013.75 3.25h16.5c.989 0 1.92.382 2.627 1.076l.034.032.016.018A3.735 3.735 0 0124 7v12.84a1.409 1.409 0 01-2.314 1.083l-3.208-2.673H5.521l-3.208 2.673a1.414 1.414 0 01-.904.327c.001 0 0 0 0 0zm.312-15.218A2.221 2.221 0 001.5 7v12.648l3-2.5V8.811L1.721 6.032zM22.5 19.648V7c0-.339-.076-.667-.221-.968L19.5 8.811v8.338l3 2.499zM18 16.75v-1.5h-3v1.5h3zm-4.5 0v-1.5h-3v1.5h3zm-4.5 0v-1.5H6v1.5h3zm9-3v-1.5h-3v1.5h3zm-4.5 0v-1.5h-3v1.5h3zm-4.5 0v-1.5H6v1.5h3zm9-3v-1.5h-3v1.5h3zm-4.5 0v-1.5h-3v1.5h3zm-4.5 0v-1.5H6v1.5h3zm9.439-3l2.779-2.779a2.221 2.221 0 00-.968-.221H3.75c-.339 0-.667.076-.968.221L5.561 7.75h12.878z"}})])
          )
        }
      }
    