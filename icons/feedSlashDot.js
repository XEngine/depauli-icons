
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M17.39 0H12a.75.75 0 00-.71.5L3.47 23a.75.75 0 00.71 1h5.39a.75.75 0 00.71-.5L18.1 1a.75.75 0 00-.71-1zM9 22.5H5.23l7.3-21h3.8zM14.18 20.8a3.2 3.2 0 103.2-3.2 3.2 3.2 0 00-3.2 3.2zm4.89 0a1.7 1.7 0 11-1.7-1.7 1.7 1.7 0 011.71 1.7z"}})])
          )
        }
      }
    