
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
            children.concat([_c('path',{attrs:{"d":"M12 3a.743.743 0 01-.53-.22l-1.5-1.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.97.969.97-.97a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-1.5 1.5A.743.743 0 0112 3zM13.5 24a.743.743 0 01-.53-.22l-.97-.969-.97.97a.746.746 0 01-1.06-.001.752.752 0 010-1.061l1.5-1.5a.746.746 0 011.06.001l1.5 1.5a.752.752 0 010 1.061.746.746 0 01-.53.219zM9.75 15.75A.75.75 0 019 15v-1.5H6.75a.75.75 0 01-.75-.75V12a3.754 3.754 0 013.75-3.75.75.75 0 01.75.75v6a.75.75 0 01-.75.75zM9 12V9.879A2.264 2.264 0 007.5 12H9zM17.25 15.75a.75.75 0 01-.75-.75v-3.292l-.857 1.428c-.134.224-.381.364-.643.364s-.509-.14-.643-.365l-.857-1.427V15a.75.75 0 01-1.5 0V9a.752.752 0 01.75-.75c.262 0 .509.14.644.364L15 11.292l1.607-2.678a.755.755 0 01.842-.337c.325.09.551.387.551.723v6a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    