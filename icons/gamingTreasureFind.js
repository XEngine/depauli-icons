
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.499A2.252 2.252 0 010 17.249v-13.5a3.754 3.754 0 013.75-3.75h15a3.754 3.754 0 013.75 3.75v6a.75.75 0 01-1.5 0v-.75H6.75v9h1.5a.75.75 0 010 1.5h-6zm-.75-2.25c0 .414.336.75.75.75h3v-9H1.5v8.25zM21 7.499v-1.5H1.5v1.5H21zm0-3v-.75a2.252 2.252 0 00-2.25-2.25h-1.5v3H21zm-5.25 0v-3h-9v3h9zm-10.5 0v-3h-1.5a2.252 2.252 0 00-2.25 2.25v.75h3.75z"}}),_c('path',{attrs:{"d":"M17.25 23.999c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.527 24 17.249s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M16.417 20.424a1.48 1.48 0 01-1.057-.437l-1.502-1.502a.744.744 0 010-1.06.749.749 0 011.06 0l1.5 1.5 2.906-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.874a1.491 1.491 0 01-1.202.599z"}})])
          )
        }
      }
    