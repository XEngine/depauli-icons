
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75v-10.5A2.252 2.252 0 015.25 9H16.5V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 6 .75.75 0 016 6c0-3.308 2.692-6 6-6s6 2.692 6 6v3h.75A2.252 2.252 0 0121 11.25v10.5A2.252 2.252 0 0118.75 24H5.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M11.858 21c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125S12.478 21 11.858 21zM15.143 17.48a.748.748 0 01-.41-.122c-.857-.56-1.851-.856-2.875-.856s-2.018.296-2.875.856a.748.748 0 01-1.144-.782.745.745 0 01.324-.474c1.101-.719 2.379-1.1 3.695-1.1s2.594.381 3.695 1.1a.751.751 0 01-.41 1.378z"}}),_c('path',{attrs:{"d":"M6.75 15.11a.751.751 0 01-.738-.884.744.744 0 01.311-.482 9.686 9.686 0 015.534-1.717c1.996 0 3.91.594 5.535 1.717a.744.744 0 01.311.482.751.751 0 01-1.165.751c-1.373-.949-2.992-1.451-4.681-1.451s-3.308.502-4.682 1.451a.738.738 0 01-.425.133z"}})])
          )
        }
      }
    