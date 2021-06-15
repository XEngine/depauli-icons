
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
            children.concat([_c('path',{attrs:{"d":"M3.01 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 013.01.003h18a2.252 2.252 0 012.25 2.25v7.5a.75.75 0 01-1.5 0v-3.75H2.26v12.75c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M15.009 24.003a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879a2.26 2.26 0 011.5 2.121v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zm5.25-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25l4.5.75z"}}),_c('circle',{attrs:{"cx":"18.009","cy":"19.533","r":"1.125"}})])
          )
        }
      }
    