
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6A.75.75 0 016 18h2.118A2.262 2.262 0 006 16.5H1.5V21h13.371zM15.75 16.5a8.21 8.21 0 01-4.427-1.293.739.739 0 01-.166-.108 8.243 8.243 0 01.134-13.785A8.208 8.208 0 0115.75 0C20.299 0 24 3.701 24 8.25c0 .271-.014.547-.041.823a8.303 8.303 0 01-3.954 6.243l-.021.012A8.24 8.24 0 0115.75 16.5zm-2.845-2.132a6.73 6.73 0 005.847-.074l-.481-2.345a2.255 2.255 0 011.5-2.58l2.725-.908A6.758 6.758 0 0015.75 1.5c-.915 0-1.823.188-2.659.547l3.161 2.137c.624.416.998 1.115.998 1.869V7.77a2.255 2.255 0 01-1.809 2.206l-1.772.355.353 1.413a2.262 2.262 0 01-.6 2.14l-.517.484zm-1.248-11.48A6.768 6.768 0 009 8.25a6.77 6.77 0 002.582 5.303l.8-.749a.753.753 0 00.185-.698l-.543-2.174a.752.752 0 01.58-.917l2.544-.509a.753.753 0 00.603-.736V6.053a.75.75 0 00-.334-.624l-3.76-2.541zm8.586 7.904a.752.752 0 00-.502.859l.359 1.753a6.706 6.706 0 002.131-3.275l-1.988.663z"}})])
          )
        }
      }
    