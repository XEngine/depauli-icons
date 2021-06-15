
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V6a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6v12a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H2.25A.75.75 0 001.5 6v12c0 .414.336.75.75.75h2.536l1.293-2.585a.746.746 0 01.671-.415h10.5c.286 0 .543.159.671.415l1.293 2.585h2.536zm-4.213 0l-.75-1.5H7.214l-.75 1.5h11.073z"}}),_c('path',{attrs:{"d":"M6.75 14.25A3.754 3.754 0 013 10.5a3.754 3.754 0 013.75-3.75h10.5A3.754 3.754 0 0121 10.5a3.754 3.754 0 01-3.75 3.75H6.75zm10.5-1.5c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25h-2.244c-1 1.33-1 3.17 0 4.5h2.244zm-3.989 0a5.26 5.26 0 010-4.5h-2.522a5.26 5.26 0 010 4.5h2.522zM6.75 8.25c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25h2.244c1-1.33 1-3.17 0-4.5H6.75z"}})])
          )
        }
      }
    