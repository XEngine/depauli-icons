
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
            children.concat([_c('path',{attrs:{"d":"M19 3.16a.73.73 0 00-.15-.09A14.24 14.24 0 0012 1.39 12.92 12.92 0 001.75 6a.72.72 0 00-.11.16A7.93 7.93 0 000 10.85a8.4 8.4 0 003.17 6.42L.93 21.51a.75.75 0 001 1l6.19-2.71a14.94 14.94 0 003.88.5 13.71 13.71 0 008.55-2.83h.06A8.51 8.51 0 0024 10.85c0-3.17-2-5.97-5-7.69zm-7-.27A13.06 13.06 0 0117.22 4l-5.08 4.56-3.56 3.22-5.33-5.32A11.66 11.66 0 0112 2.89zm-10.5 8a6.32 6.32 0 01.87-3.16l5.1 5.1L4 16a6.87 6.87 0 01-2.5-5.15zm6.77 7.44a.75.75 0 00-.51 0l-4.49 2 1.52-2.89a.74.74 0 00.08-.25l7.73-7L19 16.8a12.51 12.51 0 01-7 2 13.35 13.35 0 01-3.73-.51zm11.87-2.42l-6.43-6.75 4.94-4.47a7.41 7.41 0 013.86 6.16 6.87 6.87 0 01-2.37 5.02z"}})])
          )
        }
      }
    