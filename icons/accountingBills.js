
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
            children.concat([_c('circle',{attrs:{"cx":"4.125","cy":"7.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.875","cy":"13.125","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 17.25A2.252 2.252 0 010 15V6a2.252 2.252 0 012.25-2.25h16.5A2.252 2.252 0 0121 6v9a2.252 2.252 0 01-2.25 2.25H2.25zm0-12A.75.75 0 001.5 6v9c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M10.5 14.25a3.754 3.754 0 01-3.75-3.75 3.754 3.754 0 013.75-3.75 3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25zM5.25 20.25a.75.75 0 010-1.5h16.5a.75.75 0 00.75-.75V9A.75.75 0 0124 9v9a2.252 2.252 0 01-2.25 2.25H5.25z"}})])
          )
        }
      }
    