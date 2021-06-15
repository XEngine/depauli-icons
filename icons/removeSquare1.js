
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
            children.concat([_c('path',{attrs:{"d":"M15.182 15.931a.743.743 0 01-.53-.22L12 13.06l-2.652 2.651a.744.744 0 01-.53.22.75.75 0 01-.531-1.28L10.939 12 8.288 9.348a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53.141-.142.33-.22.53-.22s.389.078.53.22L12 10.939l2.652-2.651a.744.744 0 011.06 0 .744.744 0 010 1.06L13.061 12l2.652 2.651a.75.75 0 01-.531 1.28z"}}),_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}})])
          )
        }
      }
    