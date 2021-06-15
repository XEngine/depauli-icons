
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-4.963 0-9-4.037-9-9V2.561L1.28 4.28c-.141.142-.33.22-.53.22s-.389-.078-.53-.22C.078 4.139 0 3.95 0 3.75s.078-.389.22-.53l2.999-3A.74.74 0 013.75 0c.089 0 .177.016.261.048l.021.007a.74.74 0 01.249.166L7.28 3.22c.142.141.22.33.22.53s-.078.389-.22.53c-.141.142-.33.22-.53.22s-.389-.078-.53-.22L4.5 2.561V15c0 4.135 3.365 7.5 7.5 7.5s7.5-3.365 7.5-7.5V2.561l-1.72 1.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3-3a.75.75 0 01.245-.163l.024-.009a.712.712 0 01.522-.001l.032.012a.74.74 0 01.238.16l3 3a.746.746 0 01-.001 1.06.749.749 0 01-1.06 0L21 2.561V15c0 4.963-4.037 9-9 9z"}})])
          )
        }
      }
    