
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
            children.concat([_c('path',{attrs:{"d":"M15.749 21.75a.75.75 0 010-1.5h4.5a.75.75 0 00.75-.75V9.727a3.59 3.59 0 01-.328.023 3.555 3.555 0 01-2.651-1.331 3.51 3.51 0 01-2.609 1.33h-.057a3.51 3.51 0 01-2.607-1.329 3.51 3.51 0 01-2.607 1.329h-.057a3.51 3.51 0 01-2.605-1.328A3.516 3.516 0 014.871 9.75c-1.51-.031-2.798-1-3.228-2.411a2.96 2.96 0 01.024-1.898l1.514-4.278A1.705 1.705 0 014.768 0h15.94a1.72 1.72 0 011.613 1.181l1.508 4.26a2.97 2.97 0 01.019 1.915 3.371 3.371 0 01-1.35 1.814V19.5a2.252 2.252 0 01-2.25 2.25h-4.499zM18.77 6.355a2 2 0 001.913 1.895c.789-.019 1.496-.561 1.736-1.349a1.488 1.488 0 00-.004-.96l-1.514-4.277c-.033-.102-.113-.163-.205-.164H4.788a.21.21 0 00-.186.146l-1.52 4.295c-.107.303-.11.638-.009.943A1.91 1.91 0 004.859 8.25c.992-.039 1.82-.87 1.868-1.894a3.966 3.966 0 01.001-.218c.014-.406.344-.724.75-.724s.735.318.75.724c.002.073.002.146 0 .218a2.003 2.003 0 001.885 1.893 2.003 2.003 0 001.885-1.894 3.172 3.172 0 01.001-.218c.014-.406.344-.724.75-.724s.735.318.75.724c.003.073.003.146.001.218a2.002 2.002 0 001.885 1.894 2.003 2.003 0 001.885-1.894 3.172 3.172 0 01.001-.218c.014-.406.344-.724.75-.724s.735.318.75.724c.001.074.001.146-.001.218z"}}),_c('path',{attrs:{"d":"M8.628 24.002a1.877 1.877 0 01-1.875-1.875v-.777a2.995 2.995 0 00-2.254-2.906v.305a.75.75 0 01-.75.75h-3a.75.75 0 010-1.499h2.25v-5.25H.749a.75.75 0 010-1.5h3c.368 0 .674.266.738.616l1.652-.472a3.737 3.737 0 011.025-.144h2.447a3.739 3.739 0 013.734 3.375l.152 2.58a3.01 3.01 0 01-2.266 3.072l-.75.164.022 1.686a1.877 1.877 0 01-1.875 1.875zm-4.129-7.089c2.131.361 3.754 2.247 3.754 4.438v.777a.375.375 0 00.75 0v-1.692c0-.69.467-1.288 1.137-1.455l.749-.164A1.494 1.494 0 0012 17.289l-.15-2.544c-.114-1.13-1.076-1.994-2.236-1.994h-2.45c-.208 0-.414.029-.613.086l-1.818.519a3.843 3.843 0 01-.235.059v3.498z"}})])
          )
        }
      }
    