
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM19.5 16.5a3.754 3.754 0 01-3.75-3.75v-1.5A3.754 3.754 0 0119.5 7.5a.75.75 0 010 1.5 2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 0019.5 15a.75.75 0 010 1.5zM7.5 16.5a.75.75 0 01-.75-.75V13.5h-1.5v2.25a.75.75 0 01-1.5 0v-6C3.75 8.509 4.759 7.5 6 7.5s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zM6.75 12V9.75a.75.75 0 00-1.5 0V12h1.5zM13.5 16.5a.75.75 0 01-.75-.75V13.5h-1.5v2.25a.75.75 0 01-1.5 0v-6A2.252 2.252 0 0112 7.5a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.5V9.75a.75.75 0 00-1.5 0V12h1.5z"}})])
          )
        }
      }
    