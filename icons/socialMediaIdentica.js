
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
            children.concat([_c('path',{attrs:{"d":"M2.72 18.06a.74.74 0 00.37-.1l4.65-2.63a7.94 7.94 0 005.44.11 4.42 4.42 0 00-.18 1.28 4.53 4.53 0 002.7 4.22l1 2.59a.75.75 0 00.69.47.75.75 0 00.69-.46L19.16 21a4.54 4.54 0 00-1.6-8.76h-.24A8 8 0 0015.8 1.89a7.95 7.95 0 00-11.2.92 8 8 0 00-.72 9.28L2 17a.75.75 0 00.7 1zm14.82-4.31a3 3 0 01.85 5.94.75.75 0 00-.47.42l-.5 1.17-.49-1.21a.75.75 0 00-.45-.43 3 3 0 011-5.9zM5.33 11.58a6.45 6.45 0 014.8-10.05h.54a6.45 6.45 0 014.91 10.62A6.47 6.47 0 018 13.82a.75.75 0 00-.68 0l-3.17 1.82 1.27-3.38a.75.75 0 00-.09-.68z"}})])
          )
        }
      }
    