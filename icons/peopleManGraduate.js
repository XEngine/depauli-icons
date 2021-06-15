
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75 8.962 8.962 0 00-3.974-7.459l-4.566 3.551a.75.75 0 01-.921 0l-4.566-3.551A8.963 8.963 0 003 23.25a.75.75 0 01-1.5 0c0-3.648 1.945-7.09 5.076-8.987a.658.658 0 01.121-.07 10.474 10.474 0 0110.725.069c3.132 1.897 5.077 5.339 5.077 8.988a.749.749 0 01-.749.75zM12 17.8l3.597-2.797c-1.136-.5-2.343-.752-3.597-.752s-2.461.253-3.597.752L12 17.8zM12 12c-3.308 0-6-2.692-6-6V1.5H3v6.75a.75.75 0 01-1.5 0V1.5H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H18V6c0 3.308-2.692 6-6 6zM7.5 6c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5h-9zm9-1.5v-3h-9v3h9z"}})])
          )
        }
      }
    