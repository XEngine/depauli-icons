
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
            children.concat([_c('path',{attrs:{"d":"M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5C9.519 1.5 7.5 3.519 7.5 6s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM21.75 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    