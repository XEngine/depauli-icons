
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
            children.concat([_c('path',{attrs:{"d":"M3 23.995a.75.75 0 010-1.5h4.263a12.533 12.533 0 01-4.972-8.669c-.037-.569.117-1.059.432-1.394a1.374 1.374 0 011.027-.436h.195a8.929 8.929 0 01-.195-1.877C3.75 4.537 7.451-.005 12-.005s8.25 4.542 8.25 10.125a8.187 8.187 0 01-.211 1.875h.211c.403 0 .758.151 1.026.437.312.333.47.829.436 1.361a12.562 12.562 0 01-4.975 8.702H21a.75.75 0 010 1.5H3zm10.78-1.5a10.98 10.98 0 006.438-8.831.467.467 0 00-.021-.169H3.803a.585.585 0 00-.017.202c.416 3.844 2.879 7.214 6.434 8.798h3.56zm4.706-10.5a6.65 6.65 0 00.264-1.872c0-4.758-3.028-8.628-6.75-8.628S5.25 5.364 5.25 10.12a7.385 7.385 0 00.24 1.875h12.996z"}})])
          )
        }
      }
    