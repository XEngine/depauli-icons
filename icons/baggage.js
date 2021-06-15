
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.499A3.754 3.754 0 010 18.749v-9a3.754 3.754 0 013.75-3.75H7.5v-2.25a2.252 2.252 0 012.25-2.25h4.5a2.252 2.252 0 012.25 2.25v2.25h3.75A3.754 3.754 0 0124 9.749v9a3.754 3.754 0 01-3.75 3.75H3.75zm16.5-1.5a2.252 2.252 0 002.25-2.25v-9a2.252 2.252 0 00-2.25-2.25H18v13.5h2.25zm-3.75 0v-13.5h-9v13.5h9zM3.75 7.499a2.252 2.252 0 00-2.25 2.25v9a2.252 2.252 0 002.25 2.25H6v-13.5H3.75zM15 5.999v-2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v2.25h6z"}})])
          )
        }
      }
    