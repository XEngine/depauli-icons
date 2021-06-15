
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h16.5c1.241 0 2.25-1.009 2.25-2.25S21.491 15 20.25 15h-5.379a2.26 2.26 0 01-2.121 1.5H2.25A2.252 2.252 0 010 14.25V9c0-4.135 3.365-7.5 7.5-7.5S15 4.865 15 9v4.5h5.25c2.068 0 3.75 1.682 3.75 3.75S22.318 21 20.25 21H4.5v.75a.75.75 0 01-.75.75zM7.5 3c-3.308 0-6 2.692-6 6v5.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V9c0-3.308-2.692-6-6-6z"}}),_c('path',{attrs:{"d":"M7.5 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5C6.673 7.5 6 8.173 6 9s.673 1.5 1.5 1.5S9 9.827 9 9s-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    