
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.46 13.62a.75.75 0 001-.23 6.49 6.49 0 10-11 0 .75.75 0 101.27-.8 5 5 0 118.47 0 .75.75 0 00.26 1.03z"}}),_c('path',{attrs:{"d":"M19.45 16.86a10.07 10.07 0 10-14.87 0 .75.75 0 101.1-1 8.57 8.57 0 1112.65 0 .75.75 0 001.11 1z"}}),_c('path',{attrs:{"d":"M8.06 16.68l.55 4.91A2.71 2.71 0 0011.3 24h1.4a2.71 2.71 0 002.7-2.41l.55-4.91a2.71 2.71 0 00-2.7-3h-2.49a2.71 2.71 0 00-2.7 3zm1.79-1.11a1.22 1.22 0 01.9-.4h2.48a1.21 1.21 0 011.21 1.35l-.55 4.91a1.21 1.21 0 01-1.2 1.08H11.3a1.21 1.21 0 01-1.21-1.08l-.55-4.91a1.22 1.22 0 01.31-.95zM15.2 10a3.2 3.2 0 10-3.2 3.2 3.21 3.21 0 003.2-3.2zm-4.9 0a1.7 1.7 0 111.7 1.7 1.71 1.71 0 01-1.7-1.7z"}})])
          )
        }
      }
    