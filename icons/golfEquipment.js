
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
            children.concat([_c('path',{attrs:{"d":"M8 24.004a2.754 2.754 0 01-2.75-2.75v-11.5a.75.75 0 01.75-.75h3v-3H6.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25h3a.75.75 0 01.75.75v6.75h3.387l-1.341-7.569a.75.75 0 01.607-.869l2.954-.527c.132-.023.264-.034.394-.034a2.25 2.25 0 012.227 1.869 2.253 2.253 0 01-1.84 2.596l-2.211.392.733 4.142H18a.75.75 0 01.75.75v11.5a2.754 2.754 0 01-2.75 2.75H8zm-1.25-2.75c0 .689.561 1.25 1.25 1.25h8c.689 0 1.25-.561 1.25-1.25v-7.75H6.75v7.75zm10.5-9.25v-1.5H6.75v1.5h10.5zm-10.5-9a.75.75 0 000 1.5H9v-1.5H6.75zm7.664.381l2.216-.392a.75.75 0 10-.248-1.479l-2.229.398.261 1.473z"}}),_c('path',{attrs:{"d":"M9.75 20.254a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-4.5zm3.75-1.5v-1.5h-3v1.5h3z"}})])
          )
        }
      }
    