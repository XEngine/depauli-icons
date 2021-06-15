
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
            children.concat([_c('path',{attrs:{"d":"M12 24A12 12 0 100 12a12 12 0 0012 12zm0-22.5A10.5 10.5 0 111.5 12 10.51 10.51 0 0112 1.5z"}}),_c('path',{attrs:{"d":"M12 19.11A7.12 7.12 0 0019.1 12v-.68a.75.75 0 00-1.14-.57 3.41 3.41 0 01-4.69-4.69.75.75 0 00-.57-1.14h-.68a7.11 7.11 0 100 14.22zm-.54-12.69a4.91 4.91 0 006.12 6.12 5.61 5.61 0 11-6.12-6.12z"}})])
          )
        }
      }
    