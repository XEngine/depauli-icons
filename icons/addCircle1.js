
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
            children.concat([_c('path',{attrs:{"d":"M5.995 20.932a.763.763 0 01-.311-.067 9.753 9.753 0 01-4.807-4.807 9.69 9.69 0 01-.274-7.457 9.69 9.69 0 015.08-5.467.75.75 0 11.624 1.364 8.192 8.192 0 00-4.298 4.626 8.193 8.193 0 00.232 6.31A8.25 8.25 0 006.308 19.5a.752.752 0 01-.313 1.432z"}}),_c('path',{attrs:{"d":"M14.245 21.75c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75 9.75 4.374 9.75 9.75-4.373 9.75-9.75 9.75zm0-18c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25c4.549 0 8.25-3.701 8.25-8.25s-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M14.245 17.25a.75.75 0 01-.75-.75v-3.75h-3.75a.75.75 0 010-1.5h3.75V7.5a.75.75 0 011.5 0v3.75h3.75a.75.75 0 010 1.5h-3.75v3.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    