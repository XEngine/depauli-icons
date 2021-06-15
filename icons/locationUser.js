
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
            children.concat([_c('path',{attrs:{"d":"M12 24.005c-6.729 0-12-2.638-12-6.005 0-2.001 1.817-3.788 4.986-4.902a.751.751 0 01.926 1.032.744.744 0 01-.428.383C3.026 15.377 1.5 16.713 1.5 18c0 2.4 4.906 4.505 10.5 4.505s10.5-2.103 10.5-4.5c0-1.293-1.537-2.633-4.011-3.497a.746.746 0 01-.46-.955.751.751 0 01.956-.461C22.171 14.206 24 15.996 24 18.005c0 3.365-5.271 6-12 6zM12 6.75c-1.861 0-3.375-1.514-3.375-3.375S10.139 0 12 0s3.375 1.514 3.375 3.375S13.861 6.75 12 6.75zm0-5.25c-1.034 0-1.875.841-1.875 1.875S10.966 5.25 12 5.25s1.875-.841 1.875-1.875S13.034 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M10.5 19.5a.751.751 0 01-.744-.657L9.088 13.5H8.25a.75.75 0 01-.75-.75V10.5C7.5 8.019 9.519 6 12 6s4.5 2.019 4.5 4.5v2.245a.751.751 0 01-.748.75l-.84.003-.668 5.345a.751.751 0 01-.744.657h-3zm2.338-1.5l.668-5.343a.752.752 0 01.741-.657l.753-.002V10.5c0-1.654-1.346-3-3-3s-3 1.346-3 3V12h.75c.377 0 .697.282.744.657L11.162 18h1.676z"}})])
          )
        }
      }
    