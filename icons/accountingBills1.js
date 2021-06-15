
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
            children.concat([_c('circle',{attrs:{"cx":"4.5","cy":"11.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"18.75","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 23.25A2.252 2.252 0 010 21V9a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 9v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15A.75.75 0 001.5 9v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M12 18.75c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25zM2.25 5.25a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25zM5.25 2.25a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H5.25z"}})])
          )
        }
      }
    