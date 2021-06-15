
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M14.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM4.5 16.5A4.505 4.505 0 010 12a.75.75 0 01.75-.75h1.5v-9A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v9h6a.75.75 0 010 1.5H1.594A2.997 2.997 0 004.5 15h3.75a.75.75 0 010 1.5H4.5z"}})])
          )
        }
      }
    