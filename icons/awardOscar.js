
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24c-1.654 0-3-1.346-3-3s1.346-3 3-3h1.256l-2.177-7.632a2.236 2.236 0 01.197-1.711 2.237 2.237 0 011.879-1.156A4.49 4.49 0 017.5 4.5C7.5 2.019 9.519 0 12 0s4.5 2.019 4.5 4.5a4.499 4.499 0 01-1.154 3.002c.57.022 1.102.255 1.506.661.424.426.657.992.655 1.592 0 .207-.029.413-.086.613L15.244 18H16.5c1.654 0 3 1.346 3 3s-1.346 3-3 3h-9zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-9zm6.184-1.5l2.295-8.044a.746.746 0 00-.19-.735A.743.743 0 0015.26 9H8.74a.75.75 0 00-.719.956L10.316 18h3.368zM12 1.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    