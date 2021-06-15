
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
            children.concat([_c('path',{attrs:{"d":"M18.88 19.46a.75.75 0 00.77 0l2.81-1.87a.75.75 0 00.33-.62V6.72a.75.75 0 00-.37-.64L12.38.11a.75.75 0 00-.77 0l-10 6a.75.75 0 00-.37.64v10.18a.75.75 0 00.33.62l2.81 1.87a.75.75 0 001.17-.62V9.09L12 5l6.49 4.12v9.68a.75.75 0 00.39.66zm-6.49-16a.75.75 0 00-.8 0L4.36 8a.75.75 0 00-.36.68v8.72l-1.31-.87V7.14L12 1.62l9.3 5.52v9.39l-1.3.87V8.68a.75.75 0 00-.36-.68z"}}),_c('path',{attrs:{"d":"M10.9 8a.76.76 0 00-.76 0L7.21 9.8a.75.75 0 00-.36.64v10a.75.75 0 00.34.63l4.21 2.78a.76.76 0 00.41.12.75.75 0 00.39-.11l4.6-2.78a.75.75 0 00.36-.64v-10a.75.75 0 00-.36-.64L13.85 8a.75.75 0 00-1.14.64v9.84l-.86.47-.58-.41V8.68A.75.75 0 0010.9 8zm.47 12.46a.75.75 0 00.8 0l1.66-.91a.75.75 0 00.39-.66V10l1.44.87V20l-3.83 2.32-3.48-2.3v-9.2L9.78 10v9a.75.75 0 00.31.61z"}})])
          )
        }
      }
    