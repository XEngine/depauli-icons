
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
            children.concat([_c('path',{attrs:{"d":"M6.36 18.13a.75.75 0 00.34-.08l3.58-1.79 3.58 1.79a.74.74 0 00.3.07.75.75 0 00.34-.08l3.91-2a.75.75 0 00.41-.67V6.62a.75.75 0 00-1.09-.67l-3.54 1.79-3.58-1.79a.75.75 0 00-.29-.08h-.05a.74.74 0 00-.28.06L6 7.91a.75.75 0 00-.41.67v8.8A.75.75 0 006 18a.74.74 0 00.36.13zm7.08-2L11 15V7.83L13.44 9zM14.94 9l2.41-1.21V15l-2.41 1.21zM7.11 9l2.42-1.17V15l-2.42 1.17z"}}),_c('path',{attrs:{"d":"M12 24A12 12 0 100 12a12 12 0 0012 12zm0-22.5A10.5 10.5 0 111.49 12 10.51 10.51 0 0112 1.5z"}})])
          )
        }
      }
    