
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
            children.concat([_c('path',{attrs:{"d":"M.74 24h22.5a.75.75 0 00.75-.75V.75a.75.75 0 00-.75-.75H.74A.75.75 0 000 .75v22.5a.75.75 0 00.74.75zm.75-22.5h21v21h-21z"}}),_c('path',{attrs:{"d":"M19.85 4.89h-4.33a.75.75 0 00-.72.53l-2.17 6.89-3.07-7a.75.75 0 00-.69-.45h-4.7a.75.75 0 00-.75.75V6a.75.75 0 00.17.48l.8 1c.44.52.77.92 1.06 1.3V15l-2.13 2.9a.75.75 0 00.6 1.2h4.64a.75.75 0 00.6-1.2L6.95 15v-3.77c.41.84.93 2 1.68 3.65l1.73 3.79a.75.75 0 00.68.44h.48a.75.75 0 00.72-.53l1.94-6.17v3.93l-1.12 1.58a.75.75 0 00.61 1.18h6.15a.75.75 0 00.57-1.23l-1.29-1.53V7.67l1.24-1.11A.75.75 0 0020.6 6v-.36a.75.75 0 00-.75-.75zM5.4 17.61l.81-1.09.79 1.09zm5.79-.72L10 14.26C7.6 9 7.56 8.88 5.54 6.47l-.07-.08h2.92L12 14.48zm6.76.43l.25.29h-3.08l.26-.37a1.08 1.08 0 00.29-.83V7.64l.39-1.25h2.22l-.28.23a1.12 1.12 0 00-.43 1v8.78a1.12 1.12 0 00.43.92z"}})])
          )
        }
      }
    