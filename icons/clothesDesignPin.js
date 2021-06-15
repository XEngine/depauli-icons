
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
            children.concat([_c('path',{attrs:{"d":"M14.856 24.005a3.885 3.885 0 01-3.586-2.376L3.84 7.856a.75.75 0 011.32-.712l6.263 11.61c.587-1.333 1.929-2.254 3.432-2.254.883 0 1.728.314 2.394.868V8.872a2.26 2.26 0 01-1.5-2.121v-1.5a.75.75 0 00-1.5 0v1.5A2.25 2.25 0 019.75 6.75v-1.5A5.256 5.256 0 0115 0a5.256 5.256 0 015.25 5.25v1.5c0 .96-.615 1.808-1.5 2.121v11.235a3.898 3.898 0 01-3.888 3.899h-.006zm0-6.005c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S16.097 18 14.856 18zM15 3a2.252 2.252 0 012.25 2.25v1.5a.75.75 0 001.5 0v-1.5c0-2.068-1.682-3.75-3.75-3.75s-3.75 1.682-3.75 3.75v1.5a.75.75 0 001.5 0v-1.5C12.75 4.01 13.759 3 15 3z"}})])
          )
        }
      }
    