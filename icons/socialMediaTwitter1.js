
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
            children.concat([_c('path',{attrs:{"d":"M11.73 24h5.55a3.75 3.75 0 000-7.5h-4.55a2.25 2.25 0 01-2.25-2.25V12.5h6.8a3.75 3.75 0 000-7.5h-6.8V3.75a3.75 3.75 0 00-7.5 0v11.5A8.76 8.76 0 0011.73 24zM4.48 3.75a2.25 2.25 0 014.5 0v2a.75.75 0 00.75.75h7.55a2.25 2.25 0 010 4.5H9.73a.75.75 0 00-.75.75v2.5A3.75 3.75 0 0012.73 18h4.55a2.25 2.25 0 010 4.5h-5.55a7.26 7.26 0 01-7.25-7.25z"}})])
          )
        }
      }
    