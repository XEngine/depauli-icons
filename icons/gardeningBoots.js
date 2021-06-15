
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
            children.concat([_c('path',{attrs:{"d":"M5.371 24c-.33 0-.648-.041-.957-.122a3.717 3.717 0 01-2.288-1.732 3.755 3.755 0 01-.513-1.797.663.663 0 01.002-.216c.009-.288.048-.568.117-.831C2.749 15.56 5.241 13.5 8.75 13.5h1.5V2.25A2.252 2.252 0 0112.5 0H20a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0120 24H5.371zm-2.132-3a2.235 2.235 0 002.136 1.5H20a.75.75 0 00.75-.75V21H3.239zm17.511-1.5V2.25A.75.75 0 0020 1.5h-7.5a.75.75 0 00-.75.75v12A.75.75 0 0111 15H8.75c-3.445 0-4.901 2.403-5.515 4.5H20.75z"}}),_c('path',{attrs:{"d":"M16.25 8.25C15.009 8.25 14 7.241 14 6s1.009-2.25 2.25-2.25S18.5 4.759 18.5 6s-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    