
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M5.25 14.25a.752.752 0 01-.53-1.281l.75-.75A.746.746 0 016 12a.752.752 0 01.53 1.281l-.75.75a.746.746 0 01-.53.219zM8.25 14.25a.752.752 0 01-.53-1.281l.75-.75A.746.746 0 019 12a.752.752 0 01.53 1.281l-.75.75a.746.746 0 01-.53.219zM15 14.25a.752.752 0 01-.53-1.281l.75-.75a.744.744 0 01.53-.22.752.752 0 01.53 1.281l-.75.75a.743.743 0 01-.53.22zM18 14.25a.752.752 0 01-.53-1.281l.75-.75a.744.744 0 01.53-.22.752.752 0 01.53 1.281l-.75.75a.743.743 0 01-.53.22zM13.875 19.5A2.619 2.619 0 0112 18.711a2.623 2.623 0 01-4.5-1.836.75.75 0 011.5 0c0 .62.505 1.125 1.125 1.125s1.125-.505 1.125-1.125a.75.75 0 011.5 0c0 .62.505 1.125 1.125 1.125S15 17.495 15 16.875a.75.75 0 011.5 0 2.627 2.627 0 01-2.625 2.625zM17.539 10.257a4.479 4.479 0 01-3.956-2.416.746.746 0 01.667-1.091c.283 0 .54.157.668.409a2.968 2.968 0 002.62 1.599c.195 0 .39-.02.581-.058a.753.753 0 01.884.585.746.746 0 01-.585.884 4.397 4.397 0 01-.879.088zM6.485 10.265c-.307 0-.614-.033-.913-.098a.75.75 0 11.322-1.465 2.805 2.805 0 001.837-.23 2.825 2.825 0 001.347-1.304.747.747 0 011.004-.341.748.748 0 01.341 1.005 4.31 4.31 0 01-2.041 1.991 4.282 4.282 0 01-1.897.442z"}})])
          )
        }
      }
    