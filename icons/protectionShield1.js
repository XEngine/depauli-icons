
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
            children.concat([_c('path',{attrs:{"d":"M12 24.001a3.74 3.74 0 01-1.346-.25l-1.041-.4C4.76 21.484 1.5 16.737 1.5 11.538V3.924A2.239 2.239 0 012.806 1.88 22.305 22.305 0 0111.788 0l.219.001.186-.001c3.115 0 6.14.631 8.989 1.875A2.246 2.246 0 0122.5 3.929v7.609c0 5.199-3.26 9.946-8.113 11.813l-1.041.4a3.74 3.74 0 01-1.346.25zM11.8 1.5a20.84 20.84 0 00-8.382 1.749.732.732 0 00-.418.67v7.619c0 4.583 2.874 8.768 7.151 10.413l1.041.4a2.24 2.24 0 001.616.001l1.041-.4C18.126 20.305 21 16.121 21 11.538V3.924a.742.742 0 00-.43-.68A20.807 20.807 0 0012.194 1.5l-.187.001L11.8 1.5z"}}),_c('path',{attrs:{"d":"M11.996 20.463c-.344 0-.682-.063-1.004-.187l-.712-.275a8.909 8.909 0 01-5.78-8.277V5.917c-.004-.69.4-1.324 1.029-1.613A16.123 16.123 0 0111.896 3h.175c1.782 0 3.535.288 5.211.857a.737.737 0 01.198.068c.37.131.677.249.964.372a1.781 1.781 0 011.048 1.625v2.301a.775.775 0 010 .118v3.376a8.916 8.916 0 01-5.784 8.287l-.707.273a2.793 2.793 0 01-1.005.186zm-2.087-2.28c.299.163.603.303.907.418l.715.276a1.299 1.299 0 00.931-.001l.71-.274a7.42 7.42 0 004.82-6.895V10.1l-8.083 8.083zm-2.751-2.552c.406.64.904 1.208 1.485 1.696l9.349-9.349V5.917a.268.268 0 00-.155-.248 14.03 14.03 0 00-.507-.204L7.158 15.631zM11.886 4.5c-1.988 0-3.923.396-5.75 1.176A.264.264 0 006 5.911v5.805c.01.855.164 1.692.459 2.492l9.261-9.257a14.413 14.413 0 00-3.576-.452l-.258.001z"}})])
          )
        }
      }
    