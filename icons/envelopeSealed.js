
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
            children.concat([_c('path',{attrs:{"d":"M6 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0118 24H6zm1.5-4.5a2.252 2.252 0 00-2.25 2.25c0 .414.336.75.75.75h12a.75.75 0 00.75-.75 2.252 2.252 0 00-2.25-2.25h-9zm-2.25-.748A3.725 3.725 0 017.5 18h3.75V6H7.5a3.725 3.725 0 01-2.25-.752v13.504zM16.5 18c.823 0 1.607.267 2.25.752V5.248A3.725 3.725 0 0116.5 6h-3.75v12h3.75zM6 1.5a.75.75 0 00-.75.75A2.252 2.252 0 007.5 4.5h9a2.252 2.252 0 002.25-2.25.75.75 0 00-.75-.75H6z"}})])
          )
        }
      }
    