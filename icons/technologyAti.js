
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
            children.concat([_c('path',{attrs:{"d":"M.45 17.25a.75.75 0 001.06 0l9-8.32v7.77a.75.75 0 001.5 0V7.26a.75.75 0 00-1.26-.55L.49 16.19a.75.75 0 00-.04 1.06zM22.25 7.26v9.48a.75.75 0 001.5 0V7.26a.75.75 0 00-1.5 0zM20.2 7.26a.75.75 0 00-.75-.75h-5.71a.75.75 0 100 1.5h2.12v8.73a.75.75 0 101.5 0V8h2.1a.75.75 0 00.74-.74z"}})])
          )
        }
      }
    