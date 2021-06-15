
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h1.833a8.243 8.243 0 001.083-3H2.25A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25h-7.416a8.23 8.23 0 001.083 3h1.833a.75.75 0 010 1.5H6.75zm6.957-1.5a9.606 9.606 0 01-.889-3h-1.637a9.606 9.606 0 01-.889 3h3.415zM1.5 17.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V15h-21v2.25zm21-3.75V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V13.5h21z"}}),_c('path',{attrs:{"d":"M12 12a.747.747 0 01-.529-.218l-3.75-3.734a.752.752 0 01.529-1.282c.2 0 .388.078.529.218l3.186 3.173 5.429-6.138a.75.75 0 111.124.994l-5.956 6.734a.758.758 0 01-.539.253H12z"}})])
          )
        }
      }
    