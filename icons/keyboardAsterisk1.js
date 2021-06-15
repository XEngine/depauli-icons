
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
            children.concat([_c('path',{attrs:{"d":"M12.001 23.247a.75.75 0 01-.75-.75v-9.231L1.862 18.43a.75.75 0 01-.723-1.315l9.305-5.118-9.305-5.118a.75.75 0 01.723-1.314l9.388 5.163V1.497a.75.75 0 011.5 0v9.231l9.389-5.164a.752.752 0 011.018.295.745.745 0 01-.296 1.018l-9.305 5.118 9.305 5.118a.748.748 0 11-.722 1.314l-9.389-5.164v9.231a.75.75 0 01-.749.753z"}})])
          )
        }
      }
    