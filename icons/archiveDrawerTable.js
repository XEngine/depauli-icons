
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75v-.75H6v.75a.75.75 0 01-1.5 0v-.827a3.743 3.743 0 01-3-3.673V1.5H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-.75v17.25a3.743 3.743 0 01-3 3.673v.827a.75.75 0 01-.75.75zM3 18.75A2.252 2.252 0 005.25 21h13.5A2.252 2.252 0 0021 18.75v-9H3v9zm18-10.5V1.5H3v6.75h18z"}}),_c('path',{attrs:{"d":"M12 6.375c-.62 0-1.125-.505-1.125-1.125 0-.418.213-.783.57-.978.252-.137.497-.148.566-.148A1.124 1.124 0 0112 6.375zM12 15c-.62 0-1.125-.505-1.125-1.125 0-.418.213-.783.57-.978.252-.137.496-.148.566-.148A1.124 1.124 0 0112 15z"}})])
          )
        }
      }
    