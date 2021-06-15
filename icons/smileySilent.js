
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"9","r":"1.125"}}),_c('path',{attrs:{"d":"M14.25 18.752a.743.743 0 01-.53-.22L12 16.812l-1.72 1.718a.744.744 0 01-1.06 0 .744.744 0 010-1.06l1.719-1.719-1.72-1.72a.752.752 0 01.531-1.28c.2 0 .389.078.53.22L12 14.69l1.719-1.719a.744.744 0 011.06 0 .749.749 0 010 1.061l-1.719 1.719 1.72 1.72c.142.142.22.33.22.53a.745.745 0 01-.22.531.743.743 0 01-.53.22z"}})])
          )
        }
      }
    