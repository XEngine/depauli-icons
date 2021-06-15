
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24C1.682 24 0 22.318 0 20.25s1.682-3.75 3.75-3.75a3.743 3.743 0 013.673 3h6.827a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V21H12v.75a.75.75 0 01-1.5 0V21H7.423a3.743 3.743 0 01-3.673 3zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S6 21.491 6 20.25 4.991 18 3.75 18z"}}),_c('path',{attrs:{"d":"M17.25 24a.75.75 0 010-1.5h4.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H8.25a.75.75 0 00-.75.75V15A.75.75 0 016 15v-3.75A2.252 2.252 0 018.25 9H9V6c0-3.308 2.692-6 6-6s6 2.692 6 6v3h.75A2.252 2.252 0 0124 11.25v10.5A2.252 2.252 0 0121.75 24h-4.5zM19.5 9V6c0-2.481-2.019-4.5-4.5-4.5S10.5 3.519 10.5 6v3h9z"}}),_c('path',{attrs:{"d":"M16.522 18.906a.748.748 0 01-.749-.782.743.743 0 01.242-.521 1.505 1.505 0 00.375-1.667 1.495 1.495 0 00-1.953-.828 1.49 1.49 0 00-.819.805c-.156.369-.16.777-.009 1.148a.747.747 0 01-.415.977.746.746 0 01-.976-.414 2.982 2.982 0 01.019-2.296 2.975 2.975 0 011.637-1.61 2.985 2.985 0 011.122-.219 2.99 2.99 0 012.785 1.875 3.012 3.012 0 01-.751 3.334.749.749 0 01-.508.198z"}})])
          )
        }
      }
    