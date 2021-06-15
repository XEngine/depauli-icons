
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
            children.concat([_c('path',{attrs:{"d":"M19.483 23.998c-.329 0-.636-.129-.865-.365L3.684 8.637l-2.072 1.746a1.053 1.053 0 01-.685.269.915.915 0 01-.382-.083C.417 10.509 0 10.266 0 9.634V1.24A1.246 1.246 0 011.243-.001l8.393.037c.424.001.772.206.931.547.059.128.222.582-.182 1.065L8.684 3.669l14.944 14.472c.483.476.506 1.245.054 1.75l-3.29 3.698a1.215 1.215 0 01-.909.409zM3.729 6.869a.74.74 0 01.531.221l15.212 15.276 2.945-3.309L7.138 4.26a.752.752 0 01-.052-1.022l1.437-1.705L1.501 1.5v7.015l1.745-1.47a.748.748 0 01.483-.176z"}})])
          )
        }
      }
    