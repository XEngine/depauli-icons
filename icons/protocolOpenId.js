
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
            children.concat([_c('path',{attrs:{"d":"M23.6 7.66a.75.75 0 00-.77 0L21 8.91a18.81 18.81 0 00-5.82-2V1.73A.75.75 0 0014 1.09l-3.9 2.45a.75.75 0 00-.35.64v2.61C4.48 7.41.24 10.72 0 14.54-.1 16.43.73 21 10.88 23H11a.75.75 0 00.41-.12l3.42-2.24a.75.75 0 00.37-.64v-8.37a17.35 17.35 0 012 .62l-.73.47a.75.75 0 00.26 1.37l6.34 1.23a.75.75 0 00.89-.74V8.32a.75.75 0 00-.36-.66zm-1.1 6L18.9 13l.36-.23a.75.75 0 00-.09-1.32 19 19 0 00-4.6-1.45.77.77 0 00-.61.17.75.75 0 00-.27.57v8.92l-2.83 1.85c-6.05-1.23-9.55-3.78-9.36-6.85s4.28-6.1 9.1-6.44a.75.75 0 00.7-.75V4.59l2.4-1.5v4.47a.75.75 0 00.65.74 17.32 17.32 0 016.34 2.13.75.75 0 00.79 0l1-.69z"}}),_c('path',{attrs:{"d":"M10.54 9.94c-3.77 0-7 2.1-7.15 4.69-.08 1.19.44 4.06 7 5h.1a.75.75 0 00.75-.75v-8.19a.75.75 0 00-.7-.75zm-.75 8c-3.15-.57-5-1.78-4.9-3.23s2.09-3 4.9-3.26z"}})])
          )
        }
      }
    