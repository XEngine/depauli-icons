
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
            children.concat([_c('path',{attrs:{"d":"M21.7 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-1.906.518-3.772 1.5-5.401V11.25a3.74 3.74 0 013.001-3.675L5.95 7.5V6c0-3.308 2.692-6 6-6s6 2.692 6 6v1.5l-.001.076a3.739 3.739 0 013.001 3.675v6.597a10.46 10.46 0 011.5 5.402.75.75 0 01-.75.75zm-9.75-11.25c2.846 0 5.528 1.141 7.5 3.16v-4.659c0-1.08-.778-2.001-1.815-2.205-.835 1.997-3.31 3.576-5.685 3.576-2.375 0-4.85-1.579-5.685-3.577A2.258 2.258 0 004.45 11.25v4.66a10.448 10.448 0 017.5-3.16zM7.534 8.101c.399 1.487 2.156 3.021 4.416 3.021 2.231 0 3.985-1.51 4.405-2.979a.795.795 0 01.031-.13c.043-.188.064-.356.064-.513 0-1.654-2.019-3-4.5-3s-4.5 1.346-4.5 3c0 .178.026.37.077.57l.007.031zM11.95 3c1.572 0 3.037.448 4.136 1.235A4.506 4.506 0 0011.95 1.5a4.507 4.507 0 00-4.136 2.735C8.913 3.448 10.378 3 11.95 3z"}}),_c('path',{attrs:{"d":"M15.325 23.122A2.629 2.629 0 0112.7 20.5a2.604 2.604 0 01.767-1.857 2.61 2.61 0 011.856-.771.65.65 0 01.077.004 2.64 2.64 0 012.55 2.624 2.63 2.63 0 01-2.622 2.622h-.003zm-.052-3.749a1.12 1.12 0 00-.744.329 1.126 1.126 0 101.921.796 1.126 1.126 0 00-1.177-1.125zM7.448 19.372a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM7.448 22.372a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    