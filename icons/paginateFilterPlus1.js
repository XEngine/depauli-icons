
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.996A2.252 2.252 0 013 18.746v-16.5a2.252 2.252 0 012.25-2.25h16.5A2.252 2.252 0 0124 2.246v16.5a2.252 2.252 0 01-2.25 2.25H5.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-16.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M2.25 23.996A2.252 2.252 0 010 21.746v-18a.75.75 0 011.5 0v18c0 .414.336.75.75.75h18a.75.75 0 010 1.5h-18zM15.75 14.996a.75.75 0 010-1.5h.75V7.5l-1.8 1.35a.747.747 0 01-1.05-.15.75.75 0 01.15-1.05l1.8-1.35A1.504 1.504 0 0118 7.498v5.998h.75a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M9.75 14.996a.75.75 0 01-.75-.75v-2.25H6.75a.75.75 0 010-1.5H9v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H10.5v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    