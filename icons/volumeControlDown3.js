
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
            children.concat([_c('path',{attrs:{"d":"M8.133 14.9a.75.75 0 01-.462-.16A8.334 8.334 0 015.41 12H2.25A2.252 2.252 0 010 9.75v-3A2.252 2.252 0 012.25 4.5h3.158A8.29 8.29 0 0112.75 0C13.99 0 15 1.009 15 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75 6.747 6.747 0 00-6.179 4.05.752.752 0 01-.688.45H2.25a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3.633c.297 0 .567.176.687.448a6.808 6.808 0 002.026 2.611.752.752 0 01-.463 1.341zM17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M14.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    