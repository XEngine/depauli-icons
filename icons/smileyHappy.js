
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12.007 21.006A8.267 8.267 0 014.22 15.5a1.502 1.502 0 01.353-1.561 1.49 1.49 0 011.061-.439h12.732a1.5 1.5 0 011.415 2 8.212 8.212 0 01-5.036 5.036 8.223 8.223 0 01-2.738.47zM5.633 15a6.766 6.766 0 006.373 4.506c.762 0 1.515-.13 2.239-.385A6.718 6.718 0 0018.365 15H5.633z"}}),_c('circle',{attrs:{"cx":"16.5","cy":"8.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"8.25","r":"1.125"}})])
          )
        }
      }
    