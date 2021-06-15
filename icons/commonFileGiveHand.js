
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6A.75.75 0 016 18h2.118A2.262 2.262 0 006 16.5H1.5V21h13.371zM12.583 16.5a2.085 2.085 0 01-2.083-2.083V2.083C10.5.934 11.434 0 12.583 0h6.781c.55 0 1.087.223 1.474.611l2.551 2.551c.388.387.611.925.611 1.474v9.781a2.085 2.085 0 01-2.083 2.083h-9.334zm0-15a.583.583 0 00-.583.583v12.334c0 .322.261.583.583.583h9.334a.583.583 0 00.583-.583V4.636a.586.586 0 00-.17-.412l-2.553-2.553a.586.586 0 00-.412-.171h-6.782z"}})])
          )
        }
      }
    