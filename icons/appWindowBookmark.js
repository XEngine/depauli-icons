
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503h-1.5v9.75a.75.75 0 01-1.28.53l-1.939-1.939c-.142-.142-.33-.219-.531-.219s-.389.078-.53.219l-1.94 1.939a.745.745 0 01-.818.163.75.75 0 01-.463-.693v-9.75H2.26v12.75zm14.25-6.128c.602 0 1.167.234 1.591.658l.659.659V7.503h-4.5v7.939l.659-.659a2.235 2.235 0 011.591-.658zm5.25-8.122v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}})])
          )
        }
      }
    