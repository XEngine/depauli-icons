
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
            children.concat([_c('path',{attrs:{"d":"M14.254 22.924a.75.75 0 01-.75-.75v-6a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v6a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-8.25a.75.75 0 011.5 0v7.5h4.5v-5.25a2.252 2.252 0 012.25-2.25h1.5a2.252 2.252 0 012.25 2.25v5.25h4.5v-7.5a.75.75 0 011.5 0v8.25a.75.75 0 01-.75.75h-6z"}}),_c('path',{attrs:{"d":"M.754 13.174a.752.752 0 01-.53-1.281l10.19-10.189a2.235 2.235 0 011.591-.658c.601 0 1.166.234 1.591.658l2.206 2.206a.751.751 0 01.702-.487h3.75a.75.75 0 01.75.75v4.939l2.78 2.78a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22L12.535 2.766a.748.748 0 00-1.061 0L1.284 12.955a.746.746 0 01-.53.219zm18.75-5.56v-2.69h-2.25v.439l2.25 2.251z"}})])
          )
        }
      }
    