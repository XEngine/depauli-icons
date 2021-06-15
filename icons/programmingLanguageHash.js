
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
            children.concat([_c('path',{attrs:{"d":"M3 22.5a2.252 2.252 0 01-2.25-2.25V3.75A2.252 2.252 0 013 1.5h18a2.252 2.252 0 012.25 2.25v16.5A2.252 2.252 0 0121 22.5H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.5H2.25v12.75zM21.75 6V3.75A.75.75 0 0021 3H3a.75.75 0 00-.75.75V6h19.5z"}}),_c('path',{attrs:{"d":"M12 19.5a.747.747 0 01-.712-.988l.671-2.013H9.791l-.829 2.487a.75.75 0 11-1.424-.474l.671-2.012H6.75a.75.75 0 010-1.5h1.959l.5-1.5H8.25a.75.75 0 010-1.5h1.459l.829-2.487a.75.75 0 011.424.475L11.291 12h2.169l.829-2.487a.746.746 0 01.95-.474.748.748 0 01.473.948L15.041 12h2.209a.75.75 0 010 1.5h-2.709l-.5 1.5h1.709a.75.75 0 010 1.5h-2.209l-.829 2.487A.75.75 0 0112 19.5zm.459-4.5l.5-1.5H10.79l1.669 1.5z"}})])
          )
        }
      }
    