
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
            children.concat([_c('path',{attrs:{"d":"M12 23.997c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M9 17.997a4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5h7.939l-1.72-1.72c-.141-.141-.219-.329-.219-.53s.078-.389.22-.53a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257l-2.999 2.999a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72H9c-1.654 0-3 1.346-3 3s1.346 3 3 3a.75.75 0 010 1.501z"}})])
          )
        }
      }
    