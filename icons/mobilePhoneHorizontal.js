
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
            children.concat([_c('path',{attrs:{"d":"M3.751 19.5a3.754 3.754 0 01-3.75-3.75v-7.5a3.754 3.754 0 013.75-3.75h16.5a3.754 3.754 0 013.75 3.75v7.5a3.754 3.754 0 01-3.75 3.75h-16.5zm16.5-1.5a2.252 2.252 0 002.25-2.25v-7.5A2.252 2.252 0 0020.251 6h-.75v12h.75zM3.751 6a2.252 2.252 0 00-2.25 2.25v7.5A2.252 2.252 0 003.751 18h14.25V6H3.751z"}})])
          )
        }
      }
    