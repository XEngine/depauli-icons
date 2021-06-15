
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
            children.concat([_c('path',{attrs:{"d":"M6.25 24c-.965 0-1.75-.785-1.75-1.75V1.75C4.5.785 5.285 0 6.25 0h11.5c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75H6.25zM6 22.25c0 .138.112.25.25.25h11.5a.25.25 0 00.25-.25V19.5H6v2.75zM18 18V1.75a.25.25 0 00-.25-.25H6.25a.25.25 0 00-.25.25V18h12z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75V15h-1.5a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h1.5v-.75a.75.75 0 011.5 0v.75c1.654 0 3 1.346 3 3 0 .863-.38 1.685-1.019 2.25A3.02 3.02 0 0115.75 12c0 1.654-1.346 3-3 3v.75a.75.75 0 01-.75.75zm.75-3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H10.5v3h2.25zm0-4.5c.827 0 1.5-.673 1.5-1.5S13.577 6 12.75 6H10.5v3h2.25z"}})])
          )
        }
      }
    