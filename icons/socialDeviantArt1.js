
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
            children.concat([_c('path',{attrs:{"d":"M20.58 3.2V.75a.75.75 0 00-.75-.75h-5.38a.75.75 0 00-.64.35l-2.23 3.56H4.17a.75.75 0 00-.75.75v5.87a.75.75 0 00.75.75h3.68L3.5 20a.75.75 0 00-.08.34v2.93a.75.75 0 00.75.75h5.38a.75.75 0 00.67-.41L12 20.09h7.85a.75.75 0 00.75-.75v-5.87a.75.75 0 00-.75-.75h-4.16l4.81-9.17a.75.75 0 00.08-.35zm-1.5-.2l-5.3 10.12a.75.75 0 00.66 1.1h4.63v4.37h-7.56a.75.75 0 00-.67.41l-1.75 3.5H4.92v-2l4.81-9.62a.75.75 0 00-.67-1.09H4.92V5.41H12a.75.75 0 00.64-.35l2.22-3.56h4.21z"}})])
          )
        }
      }
    