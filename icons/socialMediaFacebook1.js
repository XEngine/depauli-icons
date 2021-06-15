
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24h10.4a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75H9.9v-2.5h2.25a.75.75 0 00.75-.75V9.69a4.94 4.94 0 014.94-4.94h1.56v2.5h-1.56a2.44 2.44 0 00-2.44 2.44v1.06a.75.75 0 00.75.75h2.65l-.31 2.5h-2.34a.75.75 0 00-.75.75v8.5a.75.75 0 00.75.75h6.1A1.75 1.75 0 0024 22.25V1.75A1.75 1.75 0 0022.25 0H1.75A1.75 1.75 0 000 1.75v20.5A1.75 1.75 0 001.75 24zM1.5 1.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v20.5a.25.25 0 01-.25.25H16.9v-7h1.81a1.25 1.25 0 001.24-1.09l.38-3A1.25 1.25 0 0019.08 10H16.9v-.31a.94.94 0 01.94-.94h1.81A1.25 1.25 0 0020.9 7.5v-3a1.25 1.25 0 00-1.25-1.25h-1.81a6.44 6.44 0 00-6.44 6.44V10H9.65a1.25 1.25 0 00-1.25 1.25v3a1.25 1.25 0 001.25 1.25h1.75v7H1.75a.25.25 0 01-.25-.25z"}})])
          )
        }
      }
    