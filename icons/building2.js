
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
            children.concat([_c('path',{attrs:{"d":"M5.25 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM9.75 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM18.75 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM5.25 16.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM9.75 16.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 16.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM18.75 16.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M2.25 24a.75.75 0 01-.75-.75V7.5H.75a.75.75 0 010-1.5h.914l1.074-4.296A2.248 2.248 0 014.921 0h14.158c1.034 0 1.932.701 2.182 1.704L22.335 6h.915a.75.75 0 010 1.5h-.75v15.75a.75.75 0 01-.75.75H2.25zM21 22.5v-15H3v15h6v-2.25A2.252 2.252 0 0111.25 18h1.5A2.252 2.252 0 0115 20.25v2.25h6zm-7.5 0v-2.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v2.25h3zM20.79 6l-.983-3.932a.75.75 0 00-.728-.568H4.921a.75.75 0 00-.728.568L3.211 6H20.79z"}}),_c('path',{attrs:{"d":"M5.25 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM18.75 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    