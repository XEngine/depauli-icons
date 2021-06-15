
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM15 16.5a.75.75 0 01-.75-.75v-7.5A.75.75 0 0115 7.5h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5S16.577 9 15.75 9v3zM7.5 16.5a.75.75 0 01-.624-.334A9.651 9.651 0 015.25 10.8V8.25a.75.75 0 011.5 0v2.55a8.19 8.19 0 00.75 3.418 8.194 8.194 0 00.75-3.419V8.25a.75.75 0 011.5 0v2.55a9.651 9.651 0 01-1.626 5.366.75.75 0 01-.624.334z"}})])
          )
        }
      }
    