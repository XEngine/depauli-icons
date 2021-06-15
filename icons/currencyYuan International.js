
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0a.75.75 0 010 1.5c-1.641 0-3.272 2.445-4.037 6h3.287a.75.75 0 010 1.5H7.702a22.242 22.242 0 000 6h3.548a.75.75 0 010 1.5H7.963c.766 3.555 2.396 6 4.037 6a.75.75 0 010 1.5zm-9.484-7.5a10.511 10.511 0 006.039 5.417C7.59 20.6 6.849 18.732 6.416 16.5h-3.9zM6.18 15c-.119-.975-.18-1.981-.18-3s.061-2.026.18-3H1.939a10.477 10.477 0 000 6H6.18zm.236-7.5c.433-2.232 1.174-4.1 2.139-5.417A10.514 10.514 0 002.516 7.5h3.9zM20.25 22.5a.75.75 0 01-.75-.75V16.5h-2.25a.75.75 0 010-1.5h2.25v-1.5h-2.25a.75.75 0 010-1.5h2.25v-1.577a3.744 3.744 0 01-3-3.673v-4.5a.75.75 0 011.5 0v4.5C18 7.991 19.009 9 20.25 9s2.25-1.009 2.25-2.25v-4.5a.75.75 0 011.5 0v4.5a3.743 3.743 0 01-3 3.673V12h2.25a.75.75 0 010 1.5H21V15h2.25a.75.75 0 010 1.5H21v5.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    