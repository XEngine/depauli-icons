
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
            children.concat([_c('path',{attrs:{"d":"M2.26 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v7.5a.75.75 0 01-1.5 0v-3.75H1.51v12.75c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M17.26 24.003c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75a.75.75 0 010 1.5c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25a.75.75 0 011.5 0 6.758 6.758 0 01-6.75 6.75z"}}),_c('path',{attrs:{"d":"M17.259 19.192c-.4 0-.777-.156-1.06-.438l-1.72-1.724a.744.744 0 01-.219-.531.748.748 0 011.281-.528l1.719 1.722 5.47-5.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-5.47 5.47c-.283.282-.66.438-1.061.438z"}})])
          )
        }
      }
    