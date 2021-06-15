
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
            children.concat([_c('path',{attrs:{"d":"M20 5.25h2a.75.75 0 00.75-.75v-3A.75.75 0 0022 .75h-3.5a4.76 4.76 0 00-4.75 4.75v2.25h-4.5V6.5a1.25 1.25 0 011.25-1.25h2a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H9A4.76 4.76 0 004.25 5.5v2.25H1.5a.75.75 0 00-.75.75V12a.75.75 0 00.75.75h2.75v9.75a.75.75 0 00.75.75h3.5a.75.75 0 00.75-.75v-9.75h4.5v9.75a.75.75 0 00.75.75H18a.75.75 0 00.75-.75v-9.75h3.75a.75.75 0 00.75-.75V8.5a.75.75 0 00-.75-.75h-3.75V6.5A1.25 1.25 0 0120 5.25zm-2 4h3.75v2H18a.75.75 0 00-.75.75v9.75h-2V12a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v9.75h-2V12a.75.75 0 00-.75-.75H2.25v-2H5a.75.75 0 00.75-.75v-3A3.25 3.25 0 019 2.25h2.75v1.5H10.5A2.75 2.75 0 007.75 6.5v2a.75.75 0 00.75.75h6a.75.75 0 00.75-.75v-3a3.25 3.25 0 013.25-3.25h2.75v1.5H20a2.75 2.75 0 00-2.75 2.75v2a.75.75 0 00.75.75z"}})])
          )
        }
      }
    