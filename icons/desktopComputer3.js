
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
            children.concat([_c('circle',{attrs:{"cx":"14.228","cy":"15.75","r":"1.125"}}),_c('path',{attrs:{"d":"M2.808 24a2.253 2.253 0 01-2.135-2.961l2-6A2.247 2.247 0 014.807 13.5h1.169V2.25A2.255 2.255 0 018.228 0h7.5a2.252 2.252 0 012.25 2.25V13.5h1.169c.97 0 1.828.618 2.135 1.539l2 6A2.253 2.253 0 0121.146 24H2.808zm2-9a.75.75 0 00-.712.513l-2 6a.75.75 0 00.712.987h18.338a.752.752 0 00.712-.987l-2-6a.749.749 0 00-.712-.513h-1.169v3.75a2.252 2.252 0 01-2.25 2.25h-7.5a2.252 2.252 0 01-2.25-2.25V15H4.808zm10.92 4.5a.75.75 0 00.75-.75V10.5h-4.5v9h3.75zm-7.5-18a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h2.25v-18h-2.25zm8.25 7.5V6h-4.5v3h4.5zm0-4.5V2.25a.75.75 0 00-.75-.75h-3.75v3h4.5z"}})])
          )
        }
      }
    