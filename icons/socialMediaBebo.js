
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
            children.concat([_c('path',{attrs:{"d":"M11.5 20.75h2a5.75 5.75 0 000-11.5H9a.75.75 0 000 1.5h4.5a4.25 4.25 0 010 8.5h-2A5.26 5.26 0 016.25 14V4a.75.75 0 00-1.5 0v10a6.76 6.76 0 006.75 6.75z"}})])
          )
        }
      }
    