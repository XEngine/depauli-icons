
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
            children.concat([_c('path',{attrs:{"d":"M6.75 4a3.34 3.34 0 103.34 3.34A3.35 3.35 0 006.75 4zm0 5.18a1.84 1.84 0 110-3.68 1.82 1.82 0 011.84 1.88 1.84 1.84 0 01-1.84 1.84zM23 13.44c-3.19-1.72-8.25-2.48-12.87-1.93-3.32.41-8.51 2.13-9.65 4.68a2.71 2.71 0 00.89 3.26A2.58 2.58 0 002.9 20a3 3 0 002-.81c1.85-1.6 7.48-6.48 17.49-3.22a1 1 0 001.29-.56 1.6 1.6 0 00-.68-1.97zM3.89 18a1.23 1.23 0 01-1.62.23 1.23 1.23 0 01-.42-1.44c.75-1.68 5.09-3.39 8.47-3.81a24.48 24.48 0 019.3.68A17.65 17.65 0 003.89 18z"}})])
          )
        }
      }
    