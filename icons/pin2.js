
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.999a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.979 10.96A6.738 6.738 0 0110.5 6.749c0-3.722 3.028-6.75 6.75-6.75S24 3.027 24 6.749s-3.028 6.75-6.75 6.75a6.734 6.734 0 01-4.21-1.479L1.28 23.779a.743.743 0 01-.53.22zm16.5-22.5c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M14.25 8.25a.75.75 0 01-.75-.75c0-1.202.468-2.332 1.317-3.182a4.468 4.468 0 013.182-1.319c.207 0 .375.168.375.375l.001.75A.376.376 0 0118 4.5a2.98 2.98 0 00-2.122.879A2.98 2.98 0 0015 7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    