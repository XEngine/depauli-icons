
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13.507 24a2.239 2.239 0 01-1.756-.844L3.576 12.938a1.495 1.495 0 010-1.875L11.752.844A2.235 2.235 0 0113.507 0h5.219a1.496 1.496 0 011.501 1.498c0 .34-.116.674-.329.939L12.248 12l7.65 9.562c.25.313.364.704.32 1.102A1.498 1.498 0 0118.727 24h-5.22zm.001-22.5a.749.749 0 00-.586.282L4.747 12l8.175 10.219a.747.747 0 00.585.282h5.219L10.701 12.47a.745.745 0 010-.937L18.727 1.5h-5.219z"}})])
          )
        }
      }
    