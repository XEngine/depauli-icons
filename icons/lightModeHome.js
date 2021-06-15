
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
            children.concat([_c('path',{attrs:{"d":"M.75 19.692a.75.75 0 010-1.5h.75V9.191c0-.235.112-.459.3-.6l5.1-3.825a2.26 2.26 0 012.7 0l5.1 3.825c.188.141.3.366.3.6v9.001h8.25a.75.75 0 010 1.5H.75zm12.75-1.5V9.566l-4.8-3.6a.755.755 0 00-.9 0L3 9.566v8.626h3v-2.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v2.25h3zm-4.5 0v-2.25a.75.75 0 00-1.5 0v2.25H9z"}}),_c('path',{attrs:{"d":"M17.25 12.942a.743.743 0 01-.53-.22.743.743 0 01-.22-.53c0-.2.078-.389.22-.53l2.25-2.251a.748.748 0 011.06-.001.75.75 0 010 1.061l-2.25 2.251a.743.743 0 01-.53.22zM18.75 16.692a.752.752 0 01-.53-1.281l4.5-4.501a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-4.5 4.501a.74.74 0 01-.53.221z"}})])
          )
        }
      }
    