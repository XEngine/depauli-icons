
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
            children.concat([_c('path',{attrs:{"d":"M6.248 23.959a.75.75 0 01-.75-.75V.709a.75.75 0 01.75-.75c6.617 0 12 5.383 12 12s-5.383 12-12 12zm.75-1.526a10.455 10.455 0 009.75-10.474 10.455 10.455 0 00-9.75-10.474v20.948z"}})])
          )
        }
      }
    