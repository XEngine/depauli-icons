
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
            children.concat([_c('path',{attrs:{"d":"M20.25 21.75a.75.75 0 01-.75-.75v-2.25h-15V21A.75.75 0 013 21v-2.25H1.75C.785 18.75 0 17.965 0 17V4c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75H21V21a.75.75 0 01-.75.75zm2-4.5a.25.25 0 00.25-.25V4a.25.25 0 00-.25-.25H16.5v13.5h5.75zM1.75 3.75A.25.25 0 001.5 4v13c0 .138.112.25.25.25H15V3.75H1.75z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"13.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"9","r":"1.125"}})])
          )
        }
      }
    