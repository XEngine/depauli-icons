
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
            children.concat([_c('path',{attrs:{"d":"M.75 7.5A.75.75 0 010 6.75v-4.5A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v4.5a.75.75 0 01-.75.75H.75zM22.5 6V2.25a.75.75 0 00-.75-.75h-3.915L16.71 6h5.79zm-7.335 0l1.125-4.5H8.836L7.711 6h7.454zM6.164 6l1.125-4.5H2.25a.75.75 0 00-.75.75V6h4.664zM2.25 22.5A2.252 2.252 0 010 20.25V9.75a.75.75 0 011.5 0v10.5c0 .414.336.75.75.75h4.5a.75.75 0 010 1.5h-4.5zM23.25 11.31a.75.75 0 01-.75-.75v-.81a.75.75 0 011.5 0v.81a.75.75 0 01-.75.75zM22.498 23.25c-.325 0-.635-.104-.897-.3l-4-3a1.487 1.487 0 01-.585-1.412c.057-.397.265-.747.585-.988l4-3a1.502 1.502 0 012.4 1.2v6c0 .322-.106.641-.299.899a1.494 1.494 0 01-1.204.601zm-3.998-4.5l4 3v-6l-4 3zM12.5 24c-.827 0-1.5-.673-1.5-1.5V15c0-.827.673-1.5 1.5-1.5h1.501c.827 0 1.5.673 1.5 1.5v7.5c0 .827-.673 1.5-1.5 1.5H12.5zm0-1.5h1.501V15H12.5v7.5z"}})])
          )
        }
      }
    