
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
            children.concat([_c('path',{attrs:{"d":"M12 11.25a.742.742 0 01-.223-.036l-.034-.011a.775.775 0 01-.212-.118l-3.75-3a.75.75 0 01.937-1.171l2.532 2.025V.75a.75.75 0 011.5 0v8.189l2.531-2.025a.75.75 0 11.938 1.171l-3.75 3a.74.74 0 01-.469.165z"}}),_c('path',{attrs:{"d":"M12 24a.733.733 0 01-.192-.025.52.52 0 01-.078-.029.61.61 0 01-.103-.045l-10.5-6a.753.753 0 01-.377-.651V8.24a.476.476 0 01.012-.102.51.51 0 01.049-.176.637.637 0 01.099-.17.611.611 0 01.14-.138.58.58 0 01.074-.053l.045-.024 7.495-3.748a.747.747 0 011.007.335.752.752 0 01-.335 1.007L3.089 8.294 12 13.386l8.911-5.092-6.251-3.126a.75.75 0 01.67-1.342l7.506 3.754.047.026c.021.012.045.03.068.05a.793.793 0 01.067.054.731.731 0 01.064.072.64.64 0 01.104.171.606.606 0 01.055.199.467.467 0 01.01.081v9.018a.752.752 0 01-.378.651L12.375 23.9a.713.713 0 01-.114.051.36.36 0 01-.061.023.796.796 0 01-.2.026zm.75-2.042l9-5.143V9.542l-9 5.143v7.273zm-1.5 0v-7.272l-9-5.143v7.272l9 5.143z"}})])
          )
        }
      }
    