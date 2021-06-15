
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
            children.concat([_c('path',{attrs:{"d":"M20.25 23.999a.75.75 0 01-.75-.75v-.75H15v.75a.75.75 0 01-1.5 0v-.75h-1.25c-.965 0-1.75-.785-1.75-1.75v-13c0-.965.785-1.75 1.75-1.75h1.25v-3.75a2.252 2.252 0 012.25-2.25h3A2.252 2.252 0 0121 2.249v3.75h1.25c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75H21v.75a.75.75 0 01-.75.75zm-8-16.5a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h10a.25.25 0 00.25-.25v-13a.25.25 0 00-.25-.25h-10zm7.25-1.5v-3.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3.75h4.5z"}}),_c('path',{attrs:{"d":"M15 17.999a.75.75 0 01-.75-.75v-5.25a.75.75 0 011.5 0v5.25a.75.75 0 01-.75.75zM19.5 17.999a.75.75 0 01-.75-.75v-5.25a.75.75 0 011.5 0v5.25a.75.75 0 01-.75.75zM5.25 13.499a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3 17.999a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H3zM.75 22.499a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    