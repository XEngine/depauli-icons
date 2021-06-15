
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
            children.concat([_c('path',{attrs:{"d":"M11.749 24.001a1.494 1.494 0 01-1.101-.482L4.57 17.39c-.455-.492-.304-.954-.247-1.085s.293-.556.938-.556h2.742V2.25c0-1.24 1.009-2.25 2.25-2.25h3a2.252 2.252 0 012.25 2.25v13.5h2.739c.645 0 .881.426.938.557s.209.593-.23 1.066l-6.117 6.167c-.253.274-.63.446-1.025.461h-.059zm.013-1.488l5.2-5.262h-2.208a.75.75 0 01-.75-.75V2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V16.5a.75.75 0 01-.75.75H6.543l5.219 5.263z"}})])
          )
        }
      }
    