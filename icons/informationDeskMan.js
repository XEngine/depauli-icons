
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
            children.concat([_c('path',{attrs:{"d":"M12 8.25c-2.275 0-4.125-1.85-4.125-4.125S9.725 0 12 0c2.274 0 4.125 1.85 4.125 4.125S14.274 8.25 12 8.25zm0-6.75c-1.447 0-2.625 1.178-2.625 2.625S10.553 6.75 12 6.75c1.448 0 2.625-1.178 2.625-2.625S13.448 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-7.5a2.252 2.252 0 012.25-2.25h3.132a6.79 6.79 0 016.632-5.249c1.494 0 2.917.483 4.114 1.396a6.786 6.786 0 012.497 3.853h3.126a2.252 2.252 0 012.25 2.25v7.5a.75.75 0 01-.75.75H.75zm21.75-1.5v-6.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v6.75h21zm-5.428-9a5.302 5.302 0 00-1.854-2.66 5.242 5.242 0 00-3.205-1.088A5.318 5.318 0 006.931 13.5h10.141z"}})])
          )
        }
      }
    