
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75h11.25A2.252 2.252 0 0115 3.75V6h7.5a1.502 1.502 0 011.118 2.5l-3.998 4.503a.751.751 0 00-.001.998l4 4.5a1.498 1.498 0 01-1.119 2.496H9.8a.343.343 0 01-.099 0H9a2.252 2.252 0 01-2.25-2.25V16.5H1.5v6.75a.75.75 0 01-.75.75zm21.749-4.503l-4-4.5a2.25 2.25 0 010-2.991l4-4.504L15 7.5v8.25a.75.75 0 01-.75.75c-1.779 0-3.318 1.287-3.672 2.997h11.921zm-14.249-.75c0 .414.336.75.75.75h.059a5.27 5.27 0 011.529-2.997H8.25v2.247zM13.5 15V3.75a.75.75 0 00-.75-.75H1.5v12h5.95c.012-.001.031-.003.05-.003l.049.003H13.5z"}})])
          )
        }
      }
    