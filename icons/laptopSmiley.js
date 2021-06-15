
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
            children.concat([_c('path',{attrs:{"d":"M12 14.236a6.312 6.312 0 01-4.255-1.657.75.75 0 111.011-1.109 4.81 4.81 0 003.245 1.265 4.81 4.81 0 003.245-1.265.747.747 0 011.059.049.75.75 0 01-.049 1.06A6.317 6.317 0 0112 14.236zM9.75 9.75A.75.75 0 019 9V7.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75zM14.25 9.75A.75.75 0 0113.5 9V7.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M21 14.25a.75.75 0 01-.75-.75V5.25a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v8.25a.75.75 0 01-1.5 0V5.25A2.252 2.252 0 014.5 3h15a2.252 2.252 0 012.25 2.25v8.25a.75.75 0 01-.75.75zM4.5 21A4.505 4.505 0 010 16.5a.75.75 0 01.75-.75h22.5a.75.75 0 01.75.75c0 2.481-2.019 4.5-4.5 4.5h-15zm-2.906-3.75A2.997 2.997 0 004.5 19.5h15a2.997 2.997 0 002.906-2.25H1.594z"}})])
          )
        }
      }
    