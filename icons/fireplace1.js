
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25a.75.75 0 01-.75-.75V8.25H.75A.75.75 0 010 7.5v-3a.75.75 0 01.75-.75h22.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-.75V19.5a.75.75 0 01-.75.75H2.25zM21 18.75v-1.5h-2.25a.75.75 0 01-.75-.75v-2.25h-.75a.75.75 0 010-1.5H21v-1.5h-4.5V12a.75.75 0 01-1.5 0v-.75H7.5v2.25a.75.75 0 01-.75.75H6v2.25a.75.75 0 01-.75.75H3v1.5h4.5v-1.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v1.5H21zm-6 0v-1.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.5h6zm6-3v-1.5h-1.5v1.5H21zm-16.5 0v-1.5H3v1.5h1.5zm1.5-3v-1.5H3v1.5h3zm15-3v-1.5h-1.5v1.5H21zm-3 0v-1.5h-3v1.5h3zm-4.5 0v-1.5h-3v1.5h3zm-4.5 0v-1.5H6v1.5h3zm-4.5 0v-1.5H3v1.5h1.5zm18-3v-1.5h-21v1.5h21z"}})])
          )
        }
      }
    