
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
            children.concat([_c('path',{attrs:{"d":"M3.75 18.749a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 15.749a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 8.999a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 5.999a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M22.865 23.999a1.135 1.135 0 01-.483-.114l-3.044-1.387H1.75c-.965 0-1.75-.785-1.75-1.75v-17.5c0-.965.785-1.75 1.75-1.75h17.587L22.396.104c.135-.068.304-.108.475-.108A1.12 1.12 0 0124 1.107V22.88A1.133 1.133 0 0122.875 24h-.01zm-.365-1.708V1.702L20.25 2.73v18.536l2.25 1.025zm-3.75-1.292v-3.75H15v3.75h3.75zm-5.25 0v-4c0-.689.561-1.25 1.25-1.25h1.75v-1.5h-6v6.75h3zm-11.75-18a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25H9v-18H1.75zm17 12.75v-4.5H10.5v1.5h6c.841 0 1.5.566 1.5 1.289v1.711h.75zm0-6v-3.75h-1.5v3.75h1.5zm-3 0v-1.5H13.5v1.5h2.25zm-3.75 0v-3.75h-1.5v3.75H12zm3.75-3v-1c0-.689.561-1.25 1.25-1.25h1.75v-1.5H10.5v1.5h1.75c.689 0 1.25.561 1.25 1.25v1h2.25z"}})])
          )
        }
      }
    