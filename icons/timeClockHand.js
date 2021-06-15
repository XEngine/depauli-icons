
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
            children.concat([_c('path',{attrs:{"d":"M16.5 13.5c-3.722 0-6.75-3.028-6.75-6.75S12.778 0 16.5 0s6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25S13.605 12 16.5 12s5.25-2.355 5.25-5.25S19.395 1.5 16.5 1.5z"}}),_c('path',{attrs:{"d":"M18.422 9.75a.743.743 0 01-.53-.22L15.97 7.608a.744.744 0 01-.22-.53V5.016a.75.75 0 011.5 0v1.751l1.702 1.702c.142.141.22.33.22.53s-.078.389-.22.53a.74.74 0 01-.53.221zM1.5 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15h6c1.8 0 3.324 1.268 3.675 3H15a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H2.25v.75a.75.75 0 01-.75.75zm15.621-3A2.264 2.264 0 0015 19.5H7.5a.75.75 0 010-1.5h2.868a2.262 2.262 0 00-2.118-1.5h-6V21h14.871z"}})])
          )
        }
      }
    