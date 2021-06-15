
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
            children.concat([_c('path',{attrs:{"d":"M2.71 18.59a.75.75 0 00-.75.75v2.79a.75.75 0 00.25.56l1.27 1.13A.75.75 0 004 24h12.43a.75.75 0 00.38-.1l1.93-1.12a.75.75 0 00.37-.65V18.2l3.81-6.58a.75.75 0 00.1-.38V3a.75.75 0 00-1.42-.34L19.11 7.6V1.88a.75.75 0 00-.37-.65L16.81.1a.75.75 0 00-.38-.1H3.62a.74.74 0 00-.38.11L1.35 1.23a.75.75 0 00-.35.65v13.05a.75.75 0 00.15.46l1.13 1.47a.75.75 0 00.6.29h10.91v1.43zm11.84-2.93H3.22l-.75-1V2.3l1.35-.8h12.4l1.38.81v8.45a.75.75 0 001.42.34l2.49-4.94V11l-3.81 6.58a.75.75 0 00-.1.38v3.69l-1.38.81h-12l-.81-.71v-1.7h11.13a.75.75 0 00.75-.75v-2.9a.75.75 0 00-.75-.75z"}}),_c('path',{attrs:{"d":"M15.29 4.49a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v8.18a.75.75 0 00.75.75h9a.75.75 0 00.75-.75zm-1.5 7.43h-7.5V5.24h7.5z"}})])
          )
        }
      }
    