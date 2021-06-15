
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
            children.concat([_c('path',{attrs:{"d":"M8.25 18A2.252 2.252 0 016 15.75v-4.5c0-.96.615-1.808 1.5-2.121V7.5C7.5 5.019 9.519 3 12 3s4.5 2.019 4.5 4.5v1.629A2.258 2.258 0 0118 11.25v4.5A2.252 2.252 0 0115.75 18h-7.5zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-7.5zM15 9V7.5c0-1.654-1.346-3-3-3s-3 1.346-3 3V9h6z"}}),_c('path',{attrs:{"d":"M12 14.625c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.923-.794A1.126 1.126 0 0112 14.625z"}}),_c('path',{attrs:{"d":"M12 24a.744.744 0 01-.194-.026C4.083 21.914 0 17.255 0 10.5V.75A.75.75 0 01.75 0h22.5a.75.75 0 01.75.75v9.75c0 6.755-4.083 11.414-11.807 13.475A.774.774 0 0112 24zM1.5 10.5c0 6.031 3.532 10.059 10.5 11.973 6.968-1.915 10.5-5.942 10.5-11.973v-9h-21v9z"}})])
          )
        }
      }
    