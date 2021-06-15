
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
            children.concat([_c('path',{attrs:{"d":"M8.2 13.88a.757.757 0 01-.403-.117L5.031 12H2.25A2.252 2.252 0 010 9.75v-3A2.252 2.252 0 012.25 4.5h2.781L11.425.431A2.252 2.252 0 0115 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-1.2-.6l-.046.032-6.601 4.201A.748.748 0 015.25 6h-3a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3c.143 0 .282.041.403.117l2.95 1.88A.75.75 0 018.2 13.88zM17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M14.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    