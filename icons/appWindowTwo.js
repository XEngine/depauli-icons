
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
            children.concat([_c('path',{attrs:{"d":"M8.26 21.75a2.252 2.252 0 01-2.25-2.25v-2.247H2.26a2.252 2.252 0 01-2.25-2.25v-10.5a2.252 2.252 0 012.25-2.25h13.5a2.252 2.252 0 012.25 2.25V6.75h3.75c1.24 0 2.25 1.009 2.25 2.25v10.5a2.252 2.252 0 01-2.25 2.25H8.26zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-6.747h-4.5v2.25a2.252 2.252 0 01-2.25 2.25H7.51V19.5zm-6-4.497c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-6.75h-15v6.75zm21-3.75V9a.75.75 0 00-.75-.75h-3.75v3.003h4.5zm-6-4.5v-2.25a.75.75 0 00-.75-.75H2.26a.75.75 0 00-.75.75v2.25h15z"}})])
          )
        }
      }
    