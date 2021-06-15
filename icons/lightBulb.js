
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
            children.concat([_c('path',{attrs:{"d":"M12 16.5c-4.549 0-8.25-3.701-8.25-8.25S7.451 0 12 0s8.25 3.701 8.25 8.25S16.549 16.5 12 16.5zm.75-1.542a6.746 6.746 0 006-6.708c0-3.722-3.028-6.75-6.75-6.75S5.25 4.528 5.25 8.25a6.745 6.745 0 006 6.708V12.31l-2.03-2.03c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22L12 10.94l1.72-1.72c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-2.03 2.03v2.648zM9 19.5A.75.75 0 019 18h6a.75.75 0 010 1.5H9zM12 24a.75.75 0 01-.75-.75v-.75H9A.75.75 0 019 21h6a.75.75 0 010 1.5h-2.25v.75A.75.75 0 0112 24z"}})])
          )
        }
      }
    