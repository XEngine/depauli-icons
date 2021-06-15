
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
            children.concat([_c('path',{attrs:{"d":"M12 18c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5A4.505 4.505 0 007.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM15.75 5.25A.75.75 0 0115 4.5V2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V4.5a.75.75 0 01-1.5 0V2.25A2.252 2.252 0 019.75 0h4.5a2.252 2.252 0 012.25 2.25V4.5a.75.75 0 01-.75.75zM9.75 24a2.252 2.252 0 01-2.25-2.25V19.5a.75.75 0 011.5 0v2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V19.5a.75.75 0 011.5 0v2.25A2.252 2.252 0 0114.25 24h-4.5z"}}),_c('path',{attrs:{"d":"M11.25 13.5a.75.75 0 01-.75-.75V10.5a.75.75 0 011.5 0V12h1.5a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    