
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.497A2.252 2.252 0 010 20.247v-16.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 3.747v16.5a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V7.497h-21v12.75zm21-14.25v-2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v2.25h21z"}}),_c('path',{attrs:{"d":"M6.75 17.997A3.754 3.754 0 013 14.247a3.754 3.754 0 013.75-3.75h10.5a3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75H6.75zm10.5-1.5c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25h-4.665l-1.125 4.5h5.79zm-7.336 0l1.125-4.5H8.836l-1.125 4.5h2.203zm-3.164-4.5a2.252 2.252 0 00-2.25 2.25c0 1.039.704 1.924 1.683 2.177l1.107-4.427h-.54z"}})])
          )
        }
      }
    