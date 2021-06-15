
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.75 21a.75.75 0 01-.746-.825l.667-6.675H8.508a1.502 1.502 0 01-1.436-1.932l1.8-5.999A1.507 1.507 0 0110.307 4.5h4.978a1.502 1.502 0 011.342 2.17L15.463 9h1.787a.75.75 0 01.611 1.185l-7.5 10.5A.753.753 0 019.75 21zm.556-15l-1.798 6H10.5a.753.753 0 01.747.824l-.47 4.698 5.016-7.022H14.25a.745.745 0 01-.638-.356.748.748 0 01-.033-.73L15.286 6h-4.979-.001z"}})])
          )
        }
      }
    