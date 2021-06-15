
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
            children.concat([_c('path',{attrs:{"d":"M12 1.13c-6.62 0-12 4.45-12 9.93a9 9 0 003.19 6.74l-1.64 3.28a1.24 1.24 0 001.63 1.68l4.94-2.3A14.32 14.32 0 0012 21c6.62 0 12-4.45 12-9.93s-5.38-9.94-12-9.94zm0 18.36A12.79 12.79 0 018.44 19a1.24 1.24 0 00-.87.07l-4.35 2 1.4-2.77a1.24 1.24 0 00-.3-1.5 7.59 7.59 0 01-2.82-5.74c0-4.65 4.71-8.43 10.5-8.43s10.5 3.78 10.5 8.43-4.71 8.43-10.5 8.43z"}}),_c('path',{attrs:{"d":"M9.3 7a.75.75 0 00-.75.75v5.87a.75.75 0 001.5 0V7.75A.75.75 0 009.3 7zM15.07 7a.75.75 0 00-.75.75v3.19l-2.17-3.58a.75.75 0 00-1.39.39v5.87a.75.75 0 001.5 0v-3.19L14.43 14a.75.75 0 00.64.36h.2a.75.75 0 00.55-.72V7.75a.75.75 0 00-.75-.75zM17.28 7a.75.75 0 00-.75.75v5.87a.75.75 0 00.75.75H20a.75.75 0 000-1.5h-2v-1.44h2a.75.75 0 100-1.5h-2V8.5h2A.75.75 0 1020 7zM7.25 12.87H5.31V7.75a.75.75 0 00-1.5 0v5.87a.75.75 0 00.75.75h2.69a.75.75 0 000-1.5z"}})])
          )
        }
      }
    