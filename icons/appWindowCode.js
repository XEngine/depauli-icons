
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M12.01 18.003a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM7.51 18.003a.752.752 0 01-.53-1.281l2.47-2.47-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3 3a.752.752 0 010 1.061l-3 3a.744.744 0 01-.53.22z"}})])
          )
        }
      }
    