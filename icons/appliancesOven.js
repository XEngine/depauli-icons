
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.25a.75.75 0 010-1.5h.75V2.25H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-.75v19.5h.75a.75.75 0 010 1.5H.75zM21 21.75V8.25H3v13.5h18zm0-15v-4.5H3v4.5h18z"}}),_c('path',{attrs:{"d":"M6.211 20.25A1.714 1.714 0 014.5 18.539v-7.078c0-.943.768-1.711 1.711-1.711h11.578c.943 0 1.711.768 1.711 1.711v7.078c0 .943-.768 1.711-1.711 1.711H6.211zm0-9a.212.212 0 00-.211.211v7.078c0 .116.095.211.211.211h11.578a.212.212 0 00.211-.211v-7.078a.212.212 0 00-.211-.211H6.211z"}}),_c('path',{attrs:{"d":"M9 14.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5H9z"}}),_c('circle',{attrs:{"cx":"5.25","cy":"4.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.25","cy":"4.5","r":"1.125"}}),_c('path',{attrs:{"d":"M13.5 5.25a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H13.5z"}})])
          )
        }
      }
    