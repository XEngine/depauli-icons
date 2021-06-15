
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
            children.concat([_c('path',{attrs:{"d":"M11.25 24a5.256 5.256 0 01-5.036-6.733 8.279 8.279 0 00-4.968 2.045.749.749 0 11-.991-1.125 9.774 9.774 0 016.471-2.437l.222.002a5.285 5.285 0 013.553-2.195V.75c0-.058.007-.116.022-.177l.014-.047a.775.775 0 01.158-.277l.024-.027a.759.759 0 01.302-.184l.044-.013a.717.717 0 01.14-.022L11.25 0a.7.7 0 01.318.073.256.256 0 01.037.017l8.254 4.502a.752.752 0 01-.102 1.364L12 8.775v4.783c2.511.363 4.441 2.518 4.499 5.074.292.029.579.044.855.044 2.014 0 3.77-.777 5.365-2.374a.748.748 0 011.061-.001.752.752 0 01.001 1.061c-1.885 1.887-3.976 2.804-6.393 2.804-.343 0-.701-.02-1.068-.058A5.262 5.262 0 0111.25 24zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75c1.65 0 3.102-1.09 3.582-2.641-.913-.206-1.9-.52-3.067-.973a.75.75 0 01.543-1.399c.787.306 1.703.641 2.669.877A3.754 3.754 0 0011.25 15zM12 7.179l5.683-2.066L12 2.013v5.166z"}})])
          )
        }
      }
    