
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.5a.743.743 0 01-.53-.22L.22 12.53C.078 12.389 0 12.2 0 12s.078-.389.22-.53l3.75-3.75c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L1.811 12l3.22 3.22A.75.75 0 014.5 16.5zM19.5 16.5a.752.752 0 01-.53-1.281l3.22-3.22-3.22-3.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.748.748 0 011.06.001l3.75 3.75a.747.747 0 010 1.061l-3.75 3.75a.746.746 0 01-.53.219zM12 13.125c-.62 0-1.125-.505-1.125-1.125 0-.599.468-1.09 1.067-1.121l.03-.003-.026.002a.51.51 0 01.054-.004 1.127 1.127 0 010 2.251z"}}),_c('circle',{attrs:{"cx":"16.5","cy":"12","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"12","r":"1.125"}})])
          )
        }
      }
    