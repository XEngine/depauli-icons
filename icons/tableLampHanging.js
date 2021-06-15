
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a.75.75 0 010-1.5h3.75V11.25a6.758 6.758 0 00-6.75-6.75H12v1.499A7.502 7.502 0 0115 12v.75a.75.75 0 01-.75.75H.75a.75.75 0 01-.75-.75V12a7.502 7.502 0 013-6.001V4.5C3 2.019 5.019 0 7.5 0a4.52 4.52 0 014.239 3h1.011C17.299 3 21 6.701 21 11.25V22.5h2.25a.75.75 0 010 1.5h-7.5zM13.5 12a5.981 5.981 0 00-2.666-4.989.75.75 0 01-.334-.624V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.887a.75.75 0 01-.334.624A5.981 5.981 0 001.5 12h12z"}})])
          )
        }
      }
    