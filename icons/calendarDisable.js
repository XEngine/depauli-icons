
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z"}}),_c('path',{attrs:{"d":"M15 20.25a.743.743 0 01-.53-.22L12 17.561l-2.47 2.47a.746.746 0 01-1.06-.001.752.752 0 010-1.061l2.47-2.47-2.47-2.47a.75.75 0 111.06-1.059L12 15.44l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.47 2.47 2.47 2.47A.75.75 0 0115 20.25z"}})])
          )
        }
      }
    