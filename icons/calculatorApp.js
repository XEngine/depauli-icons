
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
            children.concat([_c('path',{attrs:{"d":"M4.342 21.75a2.094 2.094 0 01-2.092-2.092V4.342c0-1.154.938-2.092 2.092-2.092h15.316c1.154 0 2.092.938 2.092 2.092v15.316a2.094 2.094 0 01-2.092 2.092H4.342zm15.316-1.5a.593.593 0 00.592-.592V12.75h-7.5v7.5h6.908zM3.75 19.658c0 .326.266.592.592.592h6.908v-7.5h-7.5v6.908zm16.5-8.408V4.342a.593.593 0 00-.592-.592H12.75v7.5h7.5zm-9 0v-7.5H4.342a.593.593 0 00-.592.592v6.908h7.5z"}}),_c('path',{attrs:{"d":"M7.5 9.75A.75.75 0 016.75 9v-.75H6a.75.75 0 010-1.5h.75V6a.75.75 0 011.5 0v.75H9a.75.75 0 010 1.5h-.75V9a.75.75 0 01-.75.75zM9 18.75a.743.743 0 01-.53-.22l-.97-.97-.97.97c-.141.142-.33.22-.53.22s-.389-.078-.53-.22a.752.752 0 010-1.061l.97-.97-.97-.97a.75.75 0 111.06-1.059l.97.97.97-.97c.141-.142.33-.22.53-.22s.389.078.53.22a.752.752 0 010 1.061l-.97.97.97.97A.75.75 0 019 18.75zM15 8.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM15 15.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM15 18.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    