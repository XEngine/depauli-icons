
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
            children.concat([_c('path',{attrs:{"d":"M12 23.997a.75.75 0 01-.75-.75V2.558l-2.47 2.47a.744.744 0 01-1.06 0c-.142-.142-.22-.33-.22-.531s.078-.389.22-.53L11.469.218a.74.74 0 01.245-.163l.025-.009a.733.733 0 01.521.001l.021.007c.097.04.179.095.25.166l3.749 3.749c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v20.689a.75.75 0 01-.75.749z"}})])
          )
        }
      }
    