
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
            children.concat([_c('path',{attrs:{"d":"M6.177 18a2.252 2.252 0 01-2.012-3.256L7.5 8.073V6.75A2.252 2.252 0 019.75 4.5h1.5v-3H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-10.5v3h1.5a2.252 2.252 0 012.25 2.25v1.323l3.336 6.671c.269.538.312 1.148.122 1.718-.19.57-.59 1.032-1.128 1.301a2.269 2.269 0 01-1.007.237H6.177zm-.671-2.585a.751.751 0 00.671 1.085h11.646a.754.754 0 00.712-.513.743.743 0 00-.041-.572L15.287 9H8.714l-3.208 6.415zM15 7.5v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75h6zM12 24a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3A.75.75 0 0112 24zM5.25 24a.752.752 0 01-.671-1.085l1.5-3a.748.748 0 011.006-.336c.37.186.52.637.336 1.006l-1.5 3A.746.746 0 015.25 24zM18.75 24a.746.746 0 01-.671-.415l-1.5-3a.751.751 0 011.342-.67l1.5 3A.751.751 0 0118.75 24z"}})])
          )
        }
      }
    