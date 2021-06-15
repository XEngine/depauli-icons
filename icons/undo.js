
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998a.76.76 0 01-.75-.75c0-.413.337-.75.75-.75h.007c5.786 0 10.496-4.708 10.5-10.494.003-5.79-4.704-10.503-10.494-10.506a10.464 10.464 0 00-9.492 6H8.25a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v5.461C3.588 2.437 7.624-.002 12.007-.002c6.624.004 12.004 5.39 12 12.007-.004 6.613-5.387 11.993-12 11.993H12z"}})])
          )
        }
      }
    