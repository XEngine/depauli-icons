
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
            children.concat([_c('path',{attrs:{"d":"M12.72 12a5.64 5.64 0 105.64-5.64A5.65 5.65 0 0012.72 12zm9.78 0a4.14 4.14 0 11-4.14-4.14A4.15 4.15 0 0122.5 12zM0 12a5.64 5.64 0 105.64-5.64A5.65 5.65 0 000 12zm9.78 0a4.14 4.14 0 11-4.14-4.14A4.15 4.15 0 019.78 12z"}})])
          )
        }
      }
    