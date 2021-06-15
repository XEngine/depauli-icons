
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
            children.concat([_c('path',{attrs:{"d":"M17.249 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75a.75.75 0 010 1.5c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25a.75.75 0 011.5 0 6.758 6.758 0 01-6.75 6.75z"}}),_c('path',{attrs:{"d":"M17.249 19.188a1.49 1.49 0 01-1.061-.439L14.47 17.03a.375.375 0 010-.53l.53-.53a.375.375 0 01.53 0l1.718 1.719 5.47-5.469a.744.744 0 011.06 0 .752.752 0 010 1.061l-5.47 5.469a1.488 1.488 0 01-1.059.438z"}}),_c('path',{attrs:{"d":"M3.75 24a.753.753 0 01-.75-.75V19.5h-.75A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h1.5a.75.75 0 01.75.75v3.001L7.773 19.3a.747.747 0 011.05.15c.12.161.171.358.142.556a.74.74 0 01-.293.494L4.2 23.85a.753.753 0 01-.45.15z"}})])
          )
        }
      }
    