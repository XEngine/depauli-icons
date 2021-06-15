
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
            children.concat([_c('path',{attrs:{"d":"M4.5 20.25a2.246 2.246 0 01-1.869-1.002L1.299 17.25H.75a.75.75 0 010-1.5h.858a10.51 10.51 0 018.356-8.795A2.252 2.252 0 0112 3.75 2.252 2.252 0 0114.25 6c0 .331-.074.655-.213.952a10.454 10.454 0 014.792 2.325 10.456 10.456 0 013.562 6.473h.859a.75.75 0 010 1.5h-.548l-1.329 1.998A2.247 2.247 0 0119.5 20.25h-15zm-.621-1.834a.749.749 0 00.622.334H19.5a.749.749 0 00.624-.334l.776-1.166H3.102l.777 1.166zm16.995-2.666a8.964 8.964 0 00-3.021-5.334 8.987 8.987 0 00-6.55-2.136c-4.115.319-7.489 3.431-8.177 7.47h17.748zM12 5.25a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    