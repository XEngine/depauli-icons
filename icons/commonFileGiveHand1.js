
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
            children.concat([_c('path',{attrs:{"d":"M16.5 16.5a.75.75 0 010-1.5h5.417a.583.583 0 00.583-.583V4.636a.586.586 0 00-.17-.412l-2.553-2.553a.586.586 0 00-.412-.171h-6.782a.583.583 0 00-.583.583V12.75a.75.75 0 01-1.5 0V2.083C10.5.934 11.434 0 12.583 0h6.781c.55 0 1.087.223 1.474.611l2.551 2.551c.388.387.611.925.611 1.474v9.781a2.085 2.085 0 01-2.083 2.083H16.5zM.75 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3c.96 0 1.808.615 2.121 1.5H10.5c1.8 0 3.324 1.268 3.675 3h3.075A3.754 3.754 0 0121 21.75a.75.75 0 01-.75.75H5.871A2.258 2.258 0 013.75 24h-3zm18.621-3a2.264 2.264 0 00-2.121-1.5H10.5a.75.75 0 010-1.5h2.118a2.262 2.262 0 00-2.118-1.5H6V21h13.371z"}}),_c('circle',{attrs:{"cx":"2.625","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    