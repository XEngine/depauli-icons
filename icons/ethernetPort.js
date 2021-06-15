
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M10.5 18.75a2.252 2.252 0 01-2.25-2.25v-.75H6a2.252 2.252 0 01-2.25-2.25v-6A2.252 2.252 0 016 5.25h12a2.252 2.252 0 012.25 2.25v6A2.252 2.252 0 0118 15.75h-2.25v.75a2.252 2.252 0 01-2.25 2.25h-3zM6 6.75a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h3a.75.75 0 01.75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 01.75-.75h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-1.5v3a.75.75 0 01-1.5 0v-3h-2.25v3a.75.75 0 01-1.5 0v-3H9v3a.75.75 0 01-1.5 0v-3H6z"}})])
          )
        }
      }
    