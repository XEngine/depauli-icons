
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
            children.concat([_c('path',{attrs:{"d":"M3.75 19.511A3.754 3.754 0 010 15.761v-7.5a3.754 3.754 0 013.75-3.75h9a3.754 3.754 0 013.75 3.75v7.5a3.754 3.754 0 01-3.75 3.75h-9zm0-13.5a2.252 2.252 0 00-2.25 2.25v7.5a2.252 2.252 0 002.25 2.25h9a2.252 2.252 0 002.25-2.25v-7.5a2.252 2.252 0 00-2.25-2.25h-9zM22.499 17.548c-.233 0-.458-.053-.669-.159l-3.416-1.707a.75.75 0 01.67-1.343l3.416 1.708V7.974l-3.415 1.708a.753.753 0 01-1.006-.335.75.75 0 01.335-1.006l3.415-1.707a1.502 1.502 0 011.732.281c.284.283.439.659.439 1.06v8.073a1.49 1.49 0 01-1.024 1.422 1.518 1.518 0 01-.477.078z"}})])
          )
        }
      }
    