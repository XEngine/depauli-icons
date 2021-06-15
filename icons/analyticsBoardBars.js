
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
            children.concat([_c('path',{attrs:{"d":"M3 21a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 013 3h18a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0121 21H3zM3 4.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.25A.75.75 0 0021 4.5H3z"}}),_c('path',{attrs:{"d":"M4.5 16.5a.75.75 0 01-.75-.75v-1.841a.75.75 0 011.5 0v1.841a.75.75 0 01-.75.75zM7.5 16.5a.75.75 0 01-.75-.75v-5.728a.75.75 0 011.5 0v5.728a.75.75 0 01-.75.75zM10.5 16.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM13.5 16.5a.75.75 0 01-.75-.75V13.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM16.5 16.5a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v6.75a.75.75 0 01-.75.75zM19.5 16.5a.75.75 0 01-.75-.75v-4.296a.75.75 0 011.5 0v4.296a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    