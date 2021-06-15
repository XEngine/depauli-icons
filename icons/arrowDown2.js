
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-.393 0-.763-.151-1.044-.426l-7.301-7.402A2.274 2.274 0 013 14.568V2.271A2.263 2.263 0 015.245 0H18.75A2.266 2.266 0 0121 2.274v12.297a2.27 2.27 0 01-.653 1.601l-7.283 7.382a1.48 1.48 0 01-1.049.446H12zM5.252 1.5a.76.76 0 00-.752.766v12.303a.78.78 0 00.224.551l7.28 7.381 7.273-7.38a.777.777 0 00.223-.548V2.271a.763.763 0 00-.755-.771H5.252z"}})])
          )
        }
      }
    