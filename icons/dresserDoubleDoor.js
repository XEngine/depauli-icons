
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 01-.75-.75v-.75H5.25v.75a.75.75 0 01-1.5 0v-.768a1.753 1.753 0 01-1.5-1.732V1.5H1.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-.75v19.25c0 .88-.653 1.611-1.5 1.732v.768a.75.75 0 01-.75.75zM3.75 20.75c0 .138.112.25.25.25h16a.25.25 0 00.25-.25V16.5H3.75v4.25zM20.25 15V1.5h-7.5l7.5 13.5zm-9 0V1.5h-7.5V15h7.5z"}}),_c('path',{attrs:{"d":"M10.5 19.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('circle',{attrs:{"cx":"9","cy":"7.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"7.5","r":"1.125"}})])
          )
        }
      }
    