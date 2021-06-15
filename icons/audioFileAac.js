
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l5.872 5.872c.425.425.659.99.659 1.591v4.629a.75.75 0 01-1.5 0V9h-5.25A2.252 2.252 0 0112 6.75V1.5H2.25a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3zM13.5 6.75c0 .414.336.75.75.75h4.939L13.5 1.811V6.75zM23.25 24a3.754 3.754 0 01-3.75-3.75v-1.5A3.754 3.754 0 0123.25 15a.75.75 0 010 1.5A2.252 2.252 0 0021 18.75v1.5a2.252 2.252 0 002.25 2.25.75.75 0 010 1.5z"}}),_c('path',{attrs:{"d":"M11.25 24a.75.75 0 01-.75-.75V21H9v2.25a.75.75 0 01-1.5 0v-6C7.5 16.009 8.509 15 9.75 15S12 16.009 12 17.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5zM17.25 24a.75.75 0 01-.75-.75V21H15v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25S18 16.009 18 17.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5z"}})])
          )
        }
      }
    