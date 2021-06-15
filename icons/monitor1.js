
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
            children.concat([_c('path',{attrs:{"d":"M6 23.25a.75.75 0 01-.75-.75c0-1.96 2.555-3.529 6.002-3.728V17.25h-7.5a3.754 3.754 0 01-3.75-3.75v-9A3.754 3.754 0 013.752.75h16.5a3.754 3.754 0 013.75 3.75v9a3.754 3.754 0 01-3.75 3.75h-7.5v1.522c3.444.2 5.998 1.769 5.998 3.728a.75.75 0 01-.75.75H6zm10.902-1.5c-.731-.789-2.561-1.5-4.902-1.5s-4.171.711-4.902 1.5h9.804zM3.752 2.25a2.252 2.252 0 00-2.25 2.25v9a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-9a2.252 2.252 0 00-2.25-2.25h-16.5z"}})])
          )
        }
      }
    