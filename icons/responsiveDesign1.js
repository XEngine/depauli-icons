
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
            children.concat([_c('path',{attrs:{"d":"M15 19.5a.75.75 0 010-1.5h.615l-.604-3.626a.567.567 0 01-.006-.071.185.185 0 01-.005-.053l.002-.037.005-.052.01-.069a.6.6 0 01.022-.076c.007-.022.014-.044.023-.064.011-.025.021-.043.031-.062a.842.842 0 01.04-.067c.014-.02.029-.038.043-.055l.046-.051c.021-.021.04-.036.059-.051a.604.604 0 01.115-.076c.031-.016.052-.027.075-.036a1.175 1.175 0 01.174-.047.394.394 0 01.051-.003.244.244 0 01.052-.004h6a.75.75 0 00.75-.75V12h-6.75a.75.75 0 01.002-1.5h6.75V2.25a.75.75 0 00-.75-.75H5.25c-.414 0-.75.336-.75.75a.75.75 0 01-1.5 0A2.252 2.252 0 015.25 0h16.5A2.252 2.252 0 0124 2.25v10.5A2.252 2.252 0 0121.75 15h-5.115l.5 3h1.615a.75.75 0 010 1.5H15zM2.25 24A2.252 2.252 0 010 21.75v-9a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 019 12.75v9A2.252 2.252 0 016.75 24h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V21h-6v.75zm6-2.25v-6.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6.75h6z"}}),_c('path',{attrs:{"d":"M11.25 18a.75.75 0 010-1.5.75.75 0 00.75-.75V15h-.75a.75.75 0 010-1.5H12V9H3.75A.75.75 0 013 8.25v-1.5A2.252 2.252 0 015.25 4.5h6a2.252 2.252 0 012.25 2.25v9A2.252 2.252 0 0111.25 18zM12 7.5v-.75a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v.75H12z"}})])
          )
        }
      }
    