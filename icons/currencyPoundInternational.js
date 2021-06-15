
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0a.75.75 0 010 1.5c-1.641 0-3.272 2.445-4.037 6h3.287a.75.75 0 010 1.5H7.702a22.242 22.242 0 000 6H9.75a.75.75 0 010 1.5H7.963c.766 3.555 2.396 6 4.037 6a.75.75 0 010 1.5zm-9.484-7.5a10.511 10.511 0 006.039 5.417C7.59 20.6 6.849 18.732 6.416 16.5h-3.9zM6.18 15c-.119-.975-.18-1.981-.18-3s.061-2.026.18-3H1.939a10.477 10.477 0 000 6H6.18zm.236-7.5c.433-2.232 1.174-4.1 2.139-5.417A10.514 10.514 0 002.516 7.5h3.9z"}}),_c('path',{attrs:{"d":"M12.75 21a.75.75 0 010-1.5A2.252 2.252 0 0015 17.25V13.5h-2.25a.75.75 0 010-1.5H15V7.5C15 5.019 17.019 3 19.5 3S24 5.019 24 7.5a.75.75 0 01-1.5 0c0-1.654-1.346-3-3-3s-3 1.346-3 3V12h5.25a.75.75 0 010 1.5H16.5v3.75c0 .823-.267 1.608-.75 2.25h7.5a.75.75 0 010 1.5h-10.5z"}})])
          )
        }
      }
    