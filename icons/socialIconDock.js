
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
            children.concat([_c('path',{attrs:{"d":"M7.09 12.34a.75.75 0 00-.63-.5l-5.63-.59a.75.75 0 00-.81.89l1 5.19a.75.75 0 001.27.38l.93-.93 8.27 7a.75.75 0 001 0l8.27-7 .93.93a.75.75 0 001.27-.38l1-5.19a.75.75 0 00-.81-.89l-5.64.59a.75.75 0 00-.45 1.28l.65.65L14.22 16V9.79a5.15 5.15 0 10-4.44 0V16l-3.56-2.19.7-.7a.75.75 0 00.17-.77zm3 5.68a.75.75 0 001.15-.64V9.29a.75.75 0 00-.5-.71 3.65 3.65 0 112.43 0 .75.75 0 00-.5.71v8.09a.75.75 0 001.15.63l5.45-3.48a.75.75 0 00.13-1.16l-.2-.2 3.06-.32-.56 2.82-.42-.42a.75.75 0 00-1 0L12 22.27 3.69 15.2a.75.75 0 00-1 0l-.42.42-.56-2.82 3.06.32-.25.25a.75.75 0 00.13 1.17z"}}),_c('path',{attrs:{"d":"M14.25 5.15A2.25 2.25 0 1012 7.4a2.25 2.25 0 002.25-2.25zm-3 0a.75.75 0 11.75.75.75.75 0 01-.75-.75z"}})])
          )
        }
      }
    