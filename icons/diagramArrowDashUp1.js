
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
            children.concat([_c('path',{attrs:{"d":"M8.752 14.25a.75.75 0 01-.75-.75V8.25H5.641c-.644 0-.88-.426-.937-.557-.057-.13-.208-.593.231-1.066L10.622.49a1.503 1.503 0 012.269.048l5.324 6.102c.424.458.272.919.215 1.05-.057.13-.293.556-.938.556h-1.989v5.25a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75h1.563L11.748 1.51 6.869 6.75h1.883a.75.75 0 01.75.75v6a.75.75 0 01-.75.75zM8.752 19.5a.75.75 0 01-.75-.75V16.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM8.752 24a.75.75 0 01-.75-.75V21a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM14.752 19.5a.75.75 0 01-.75-.75V16.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM14.752 24a.75.75 0 01-.75-.75V21a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    