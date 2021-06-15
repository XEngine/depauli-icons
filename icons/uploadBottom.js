
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
            children.concat([_c('path',{attrs:{"d":"M12.001 16.5a.75.75 0 01-.75-.75V5.561l-3.22 3.22a.746.746 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l4.499-4.5a.74.74 0 01.245-.163l.025-.009a.743.743 0 01.522 0l.02.007c.097.04.179.095.25.166l4.499 4.499c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-3.22-3.22v10.19a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M3.751 21a3.754 3.754 0 01-3.75-3.75v-1.5a.75.75 0 011.5 0v1.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-1.5a.75.75 0 011.5 0v1.5a3.754 3.754 0 01-3.75 3.75h-16.5z"}})])
          )
        }
      }
    