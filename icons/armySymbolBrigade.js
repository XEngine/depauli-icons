
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-12A2.252 2.252 0 012.25 7.5h19.5A2.252 2.252 0 0124 9.75v12A2.252 2.252 0 0121.75 24H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25zM14.25 6a.743.743 0 01-.53-.22L12 4.061l-1.72 1.72a.746.746 0 01-1.06-.001C9.078 5.639 9 5.45 9 5.25s.078-.389.22-.53L10.939 3 9.22 1.28C9.078 1.139 9 .95 9 .75s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22L12 1.939l1.72-1.72a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53L13.061 3l1.72 1.72a.746.746 0 01-.001 1.06.749.749 0 01-.53.22z"}})])
          )
        }
      }
    