
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V12.311L12 1.811l-10.5 10.5V23.25a.75.75 0 01-1.5 0V12c0-.2.078-.389.22-.53L11.47.22C11.611.078 11.8 0 12 0s.389.078.53.22l11.25 11.25c.142.142.22.33.22.53v11.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M12 18a4.88 4.88 0 01-4.875-4.875A4.88 4.88 0 0112 8.25a4.88 4.88 0 014.875 4.875A4.88 4.88 0 0112 18zm0-8.25a3.379 3.379 0 00-3.375 3.375A3.379 3.379 0 0012 16.5a3.379 3.379 0 003.375-3.375A3.379 3.379 0 0012 9.75z"}}),_c('path',{attrs:{"d":"M5.635 24.001A.752.752 0 014.928 23 7.467 7.467 0 019.5 18.428a7.443 7.443 0 015.733.303A7.448 7.448 0 0119.072 23a.75.75 0 01-1.414.5 5.961 5.961 0 00-3.072-3.415 5.95 5.95 0 00-4.587-.243A5.975 5.975 0 006.341 23.5a.75.75 0 01-.706.501z"}})])
          )
        }
      }
    