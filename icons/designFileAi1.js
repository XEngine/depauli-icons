
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.166.234 1.591.658l5.871 5.872c.425.425.659.99.659 1.591v4.629a.75.75 0 01-1.5 0V9h-5.25A2.252 2.252 0 0112 6.75V1.5H2.25a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h12a.75.75 0 010 1.5h-12zM13.5 6.75c0 .414.336.75.75.75h4.939L13.5 1.81v4.94zM23.25 24a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75V21H18v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25S21 16.009 21 17.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5z"}})])
          )
        }
      }
    