
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
            children.concat([_c('path',{attrs:{"d":"M11.981 24.019a10.46 10.46 0 01-5.502-1.573 10.43 10.43 0 01-4.698-6.52 10.557 10.557 0 010-4.822.747.747 0 01.902-.558c.402.095.653.5.558.902a9.044 9.044 0 000 4.133 8.94 8.94 0 004.027 5.589 8.965 8.965 0 006.799 1.104 9.007 9.007 0 003.742-1.882l-2.589-2.59a.744.744 0 010-1.06.749.749 0 011.06 0l2.589 2.589c.289-.342.552-.705.786-1.084a8.94 8.94 0 001.104-6.799.75.75 0 011.461-.344 10.43 10.43 0 01-1.289 7.932 10.66 10.66 0 01-.997 1.359l.846.846a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-.847-.847a10.517 10.517 0 01-4.461 2.279c-.801.189-1.618.285-2.431.285zM18 9.022a2.252 2.252 0 01-2.25-2.25.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75A2.252 2.252 0 016 9.022H2.25A2.252 2.252 0 010 6.772v-.89A5.217 5.217 0 014.111.755a41.428 41.428 0 017.884-.76 41.371 41.371 0 017.894.762A5.219 5.219 0 0124 5.882v.89a2.252 2.252 0 01-2.25 2.25H18zm-3-4.5a2.252 2.252 0 012.25 2.25c0 .414.336.75.75.75h3.75a.75.75 0 00.75-.75v-.89a3.73 3.73 0 00-2.894-3.651l-.035-.006a39.98 39.98 0 00-7.576-.73 39.992 39.992 0 00-7.603.735A3.73 3.73 0 001.5 5.882v.89c0 .414.336.75.75.75H6a.75.75 0 00.75-.75A2.252 2.252 0 019 4.522h6z"}}),_c('path',{attrs:{"d":"M12 16.522c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 1.655-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('circle',{attrs:{"cx":"6","cy":"13.522","r":"1.125"}}),_c('path',{attrs:{"d":"M12 20.647c-.62 0-1.125-.505-1.125-1.125A1.121 1.121 0 0112 18.397c.62 0 1.125.505 1.125 1.125S12.62 20.647 12 20.647zM7.757 18.89c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125a.78.78 0 01.128.011c.57.065.997.541.997 1.114 0 .621-.505 1.125-1.125 1.125z"}}),_c('circle',{attrs:{"cx":"18","cy":"13.522","r":"1.125"}})])
          )
        }
      }
    