
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
            children.concat([_c('path',{attrs:{"d":"M23.08 10.54c-1.49-1-4.51-.3-6.85.53-.42.14-1.28.44-1.34 1.25a.76.76 0 000 .11c.05.75.78 1 1.35 1.26a16.86 16.86 0 004.67.88 3.89 3.89 0 002.25-.57 1.93 1.93 0 00.84-1.62 2.13 2.13 0 00-.92-1.84zm-.79 2.26c-.82.59-3.47.12-5.24-.42 3-1 4.62-1 5.17-.61a.65.65 0 01.26.61.45.45 0 01-.2.41zM15.88 9.89c.53-.11 5.22-1.17 6.13-3.24a1.93 1.93 0 00-.13-1.82 2.13 2.13 0 00-1.7-1.13c-1.81-.15-4 2-5.63 3.94-.29.33-.88 1-.52 1.76l.05.09a1.17 1.17 0 001 .48 4.7 4.7 0 00.8-.08zM20 5.19h.06c.15 0 .34.07.53.4a.45.45 0 01.05.46c-.4.91-3 1.88-4.73 2.3C17.89 6 19.29 5.19 20 5.19zM14.59 17.17c1.5 1.8 3.63 3.9 5.41 3.9h.18a2.13 2.13 0 001.7-1.13.75.75 0 00.08-.2 2.14 2.14 0 00-.08-1.86c-.68-1.31-2.64-2.29-6-3-.56-.09-1.33-.22-1.76.41l-.05.09c-.36.73.23 1.43.52 1.76zm6 1.39a.65.65 0 010 .63v.05a.61.61 0 01-.49.33c-.67.07-2.1-.75-4.14-3.16 3.54.8 4.39 1.76 4.59 2.14zM3.55 18.17H2.28a2.25 2.25 0 100 4.5h1.27a5.23 5.23 0 004.85-3.24l1-2.53 5.21-12.45a2.25 2.25 0 10-4.16-1.72l-3.07 7.4-3-7.39A2.25 2.25 0 001.43 1.5 2.25 2.25 0 00.2 4.44L4.94 16l-.7 1.68a.75.75 0 01-.69.49zm2.89-2.42L1.59 3.87A.75.75 0 013 3.3l3.71 9.08a.75.75 0 00.69.47.75.75 0 00.69-.46l3.75-9.09a.75.75 0 011.39.57l-5.14 12.4v.07L7 18.85a3.74 3.74 0 01-3.46 2.31H2.28a.75.75 0 010-1.5h1.27a2.24 2.24 0 002.08-1.39l.81-2a.75.75 0 00.01-.53z"}})])
          )
        }
      }
    