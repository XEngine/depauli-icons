
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
            children.concat([_c('circle',{attrs:{"cx":"9","cy":"17","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"17","r":"1.125"}}),_c('path',{attrs:{"d":"M19.5 23.75a.75.75 0 01-.75-.75v-.75H5.25V23a.75.75 0 01-1.5 0v-.879A2.258 2.258 0 012.25 20v-6c0-.96.615-1.808 1.5-2.121V8.75H3a.75.75 0 010-1.5h.75v-3H3a.75.75 0 010-1.5h.75V.5a.75.75 0 011.5 0v2.25h13.5V.5a.75.75 0 011.5 0v2.25H21a.75.75 0 010 1.5h-.75v3H21a.75.75 0 010 1.5h-.75v3.129A2.26 2.26 0 0121.75 14v6c0 .96-.615 1.808-1.5 2.121V23a.75.75 0 01-.75.75zm0-3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-6.75v7.5h6.75zm-15-7.5a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6.75v-7.5H4.5zm14.25-1.5v-3H5.25v3h13.5zm0-4.5v-3H5.25v3h13.5z"}})])
          )
        }
      }
    