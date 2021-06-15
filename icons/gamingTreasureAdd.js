
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.999c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.527 24 17.249s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M17.25 20.999a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H18v2.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M2.25 19.499A2.252 2.252 0 010 17.249v-13.5a3.754 3.754 0 013.75-3.75h15a3.754 3.754 0 013.75 3.75v6a.75.75 0 01-1.5 0v-.75H6.75v9h1.5a.75.75 0 010 1.5h-6zm-.75-2.25c0 .414.336.75.75.75h3v-9H1.5v8.25zM21 7.499v-1.5H1.5v1.5H21zm0-3v-.75a2.252 2.252 0 00-2.25-2.25h-1.5v3H21zm-5.25 0v-3h-9v3h9zm-10.5 0v-3h-1.5a2.252 2.252 0 00-2.25 2.25v.75h3.75z"}})])
          )
        }
      }
    