
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
            children.concat([_c('path',{attrs:{"d":"M2.25 13.5A2.252 2.252 0 010 11.25v-9A2.252 2.252 0 012.25 0h18a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v9c0 .414.336.75.75.75H9a.75.75 0 010 1.5H2.25z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M19.5 20.249a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72 1.72 1.72a.752.752 0 01-.53 1.281zM5.25 7.875a1.127 1.127 0 01-.798-1.919 1.127 1.127 0 011.922.794c0 .62-.504 1.125-1.124 1.125zM11.25 7.875a1.127 1.127 0 01-.798-1.919 1.127 1.127 0 011.922.794c0 .62-.504 1.125-1.124 1.125zM17.25 7.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"}})])
          )
        }
      }
    