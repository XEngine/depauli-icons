
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75C0 1.682 1.682 0 3.75 0S7.5 1.682 7.5 3.75h14.25A2.252 2.252 0 0124 6v15.75A2.252 2.252 0 0121.75 24h-18zm18-1.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H7.5v15c0 .823-.267 1.607-.752 2.25H21.75zm-18-4.5c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S6 21.491 6 20.25 4.991 18 3.75 18zm0-16.5A2.252 2.252 0 001.5 3.75v13.502c.643-.485 1.427-.752 2.25-.752s1.607.267 2.25.752V3.75A2.252 2.252 0 003.75 1.5z"}}),_c('path',{attrs:{"d":"M10.5 19.5a.75.75 0 010-1.5h.75V9c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v9h.75a.75.75 0 010 1.5h-9zm6.75-1.5v-2.25H15a.75.75 0 010-1.5h2.25v-1.5H15a.75.75 0 010-1.5h2.25V9h-4.5v9h4.5z"}})])
          )
        }
      }
    