
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
            children.concat([_c('path',{attrs:{"d":"M9.194 24.017a.745.745 0 01-.531-.22L.201 15.323a.75.75 0 011.062-1.059l.527.528L15.009 1.553A5.203 5.203 0 0118.681.058a5.26 5.26 0 013.136 1.033l.596-.597a.748.748 0 011.061-.001.752.752 0 01.001 1.061l-.595.596c1.529 2.045 1.354 4.973-.458 6.814L9.196 22.208l.529.529a.75.75 0 01-.531 1.28zm-1.058-2.87l13.22-13.238a3.744 3.744 0 00-.046-5.287 3.716 3.716 0 00-2.624-1.067c-.991 0-1.922.378-2.621 1.064L2.85 15.853l5.286 5.294z"}}),_c('path',{attrs:{"d":"M13.956 8.662a.748.748 0 01-.75-.749c0-.2.078-.389.219-.53l3.7-3.707c.277-.28.626-.482 1.009-.583a.752.752 0 01.917.532.75.75 0 01-.533.917.721.721 0 00-.329.191l-3.702 3.709a.748.748 0 01-.531.22z"}})])
          )
        }
      }
    