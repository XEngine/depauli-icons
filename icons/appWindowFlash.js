
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
            children.concat([_c('path',{attrs:{"d":"M2.257 21.003a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-1.5 0v-.75h-19.5v12.75c0 .414.336.75.75.75h12a.75.75 0 010 1.5h-12zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M17.26 24.003a.753.753 0 01-.75-.75v-5.25h-1.875c-.266 0-.524-.095-.726-.267a1.115 1.115 0 01-.394-.764 1.12 1.12 0 01.262-.821l5.915-6.887a.75.75 0 011.319.488v5.25h1.875c.265.001.521.095.722.263.231.195.373.467.398.766a1.12 1.12 0 01-.26.822l-5.916 6.888a.75.75 0 01-.57.262zm0-7.5a.75.75 0 01.75.75v3.976l4.06-4.727-1.809.001a.75.75 0 01-.75-.75v-3.975l-4.06 4.727 1.809-.002z"}})])
          )
        }
      }
    