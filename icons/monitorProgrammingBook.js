
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
            children.concat([_c('path',{attrs:{"d":"M17.25 21.753a.736.736 0 01-.45-.152 8.818 8.818 0 00-4.897-1.481l-.209.003a1.2 1.2 0 01-1.194-1.16v-6.549c.005-.359.176-.694.458-.903a1.318 1.318 0 01.85-.259c2.45.087 4.435.681 5.442 1.61 1.007-.931 2.995-1.524 5.455-1.606l.058-.001c.28 0 .559.094.786.265.277.205.447.538.452.888v6.563a1.209 1.209 0 01-1.213 1.159l-.192-.002c-1.751 0-3.45.514-4.913 1.487a.728.728 0 01-.433.138zm5.25-8.989c-2.701.137-4.5.968-4.5 1.688v5.257a10.433 10.433 0 014.5-1.081v-5.864zM12 18.621c1.561.018 3.103.391 4.5 1.085v-5.254c0-.718-1.795-1.549-4.496-1.691L12 18.621z"}}),_c('path',{attrs:{"d":"M4.663 21.753a.75.75 0 010-1.5H7.5v-2.25H1.75A1.77 1.77 0 010 16.232V4.021A1.765 1.765 0 011.74 2.25h16.01a1.769 1.769 0 011.75 1.773v5.085a.75.75 0 01-1.5 0v-5.09a.264.264 0 00-.259-.268H1.75a.263.263 0 00-.25.265v12.221a.264.264 0 00.259.267H8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H4.663z"}}),_c('path',{attrs:{"d":"M3.75 12.003a.75.75 0 01-.45-1.35l2.2-1.65-2.2-1.65a.75.75 0 01.899-1.2l3 2.25a.753.753 0 010 1.2l-3 2.25a.74.74 0 01-.449.15zM9.75 9.753a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5H9.75z"}})])
          )
        }
      }
    