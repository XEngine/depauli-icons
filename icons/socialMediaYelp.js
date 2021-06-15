
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
            children.concat([_c('path',{attrs:{"d":"M11.53.05L3.32 2.87A.75.75 0 003 4.09l7.63 8.22a.75.75 0 001.3-.47l.57-11a.75.75 0 00-1-.75zm-1 9.94L4.9 3.91 11 1.83zM13.63 13.78h.1l7-.94a.75.75 0 00.54-1.13l-3-5.12a.75.75 0 00-.63-.37.73.73 0 00-.64.34l-4 6.06a.75.75 0 00.63 1.16zm3.94-5.4l1.85 3.11-4.27.57zM12.73 15.75l2.6 6.59a.75.75 0 00.54.46h.16a.75.75 0 00.53-.22l4.24-4.19a.75.75 0 00-.28-1.24l-6.84-2.4a.75.75 0 00-.95 1zm6.16 2.44l-2.58 2.54-1.58-4zM11.58 15.31a.75.75 0 00-.79.18l-5 5.06a.75.75 0 00.26 1.22l5.55 2.17a.76.76 0 00.27.05.75.75 0 00.75-.81L12.08 16a.75.75 0 00-.5-.69zM7.7 20.78l3-3.07.36 4.39zM2.88 17.83a.75.75 0 001.12.62L10.34 15a.75.75 0 00-.1-1.36l-6.63-2.51a.75.75 0 00-1 .74zm5.31-3.39l-3.87 2.12-.17-3.62z"}})])
          )
        }
      }
    