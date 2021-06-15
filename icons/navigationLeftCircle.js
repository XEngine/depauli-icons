
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
            children.concat([_c('path',{attrs:{"d":"M12 23.997c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M15 17.997a.75.75 0 010-1.5c1.654 0 3-1.346 3-3s-1.346-3-3-3H7.061l1.72 1.72a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-3-3a.74.74 0 01-.163-.245l-.01-.026a.738.738 0 010-.521l.007-.021a.74.74 0 01.166-.249L7.72 6.217a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72H15c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5z"}})])
          )
        }
      }
    