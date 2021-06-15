
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
            children.concat([_c('path',{attrs:{"d":"M7.49 6.05a.75.75 0 00-1.24.57v16.26a.75.75 0 001.5 0V8.11a7.55 7.55 0 008.5-.11v14.88a.75.75 0 001.5 0V6.63a.75.75 0 00-1.2-.6c-3.24 2.44-6.2 2.45-9.06.02zM8 .38a2.25 2.25 0 102.25 2.25A2.25 2.25 0 008 .38zm0 3a.75.75 0 11.75-.75.75.75 0 01-.75.75zM18.25 2.63A2.25 2.25 0 1016 4.88a2.25 2.25 0 002.25-2.25zm-3 0a.75.75 0 11.75.75.75.75 0 01-.75-.75z"}})])
          )
        }
      }
    