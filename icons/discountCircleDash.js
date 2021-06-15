
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M8.36 16.39a.752.752 0 01-.53-1.281l7.424-7.425a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L8.89 16.17a.741.741 0 01-.53.22z"}}),_c('circle',{attrs:{"cx":"8.625","cy":"8.48","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.519","cy":"15.375","r":"1.125"}})])
          )
        }
      }
    