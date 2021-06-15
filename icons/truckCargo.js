
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
            children.concat([_c('path',{attrs:{"d":"M18.75 20.463c-.96 0-1.808-.615-2.121-1.5H7.371c-.314.885-1.162 1.5-2.121 1.5s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 16.713V6.463c0-.965.785-1.75 1.75-1.75h17c1.112 0 1.949.35 2.488 1.04.892 1.142.534 2.716.49 2.892a.75.75 0 01-.728.568h-.392l1.002 2.505 1.388.926A2.246 2.246 0 0124 14.516v2.2a2.252 2.252 0 01-2.25 2.25h-.88a2.26 2.26 0 01-2.12 1.497zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-13.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm16.5.003a.75.75 0 00.75-.75v-2.2a.749.749 0 00-.334-.624l-1.393-.929H15v4.5h1.629a2.26 2.26 0 012.121-1.5c.961 0 1.81.616 2.122 1.503h.878zm-8.25-.003v-3h-12v2.25c0 .414.336.75.75.75h.879c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5H13.5zm0-4.5v-6.75H1.75a.25.25 0 00-.25.25v6.5h12zm6.392-1.5l-.9-2.25H15v2.25h4.892zm.441-3.75c.004-.332-.048-.744-.28-1.039-.24-.306-.678-.461-1.304-.461H15v1.5h5.333z"}})])
          )
        }
      }
    