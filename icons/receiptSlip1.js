
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
            children.concat([_c('path',{attrs:{"d":"M3 24a.75.75 0 01-.75-.75v-21A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v21a.75.75 0 01-1.28.53L18 21.311l-2.47 2.47a.746.746 0 01-1.06-.001L12 21.311l-2.47 2.47a.746.746 0 01-1.06-.001L6 21.311l-2.47 2.47A.744.744 0 013 24zm3-4.5c.2 0 .389.078.53.22L9 22.189l2.47-2.47a.744.744 0 011.06 0l2.47 2.47 2.47-2.47a.744.744 0 011.06 0l1.72 1.72V2.25a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v19.189l1.72-1.72A.746.746 0 016 19.5z"}}),_c('path',{attrs:{"d":"M6 6.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5H6zM6 11.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5H6zM6 15.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5H6z"}}),_c('circle',{attrs:{"cx":"17.625","cy":"5.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"10.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"14.625","r":"1.125"}})])
          )
        }
      }
    