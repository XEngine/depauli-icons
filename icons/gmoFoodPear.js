
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
            children.concat([_c('path',{attrs:{"d":"M12.409 24c-.142 0-.285-.002-.429-.005a15 15 0 01-.381.005c-3.015 0-5.591-.826-7.067-2.266-1.018-.994-1.534-2.245-1.534-3.719a8.251 8.251 0 012.446-5.511 8.472 8.472 0 002.431-4.672l.01-.073c.304-1.741 1.662-3.032 3.363-3.256a3.004 3.004 0 00-3-2.987.75.75 0 010-1.5 4.504 4.504 0 014.5 4.486 3.917 3.917 0 013.36 3.233l.017.114a8.45 8.45 0 002.427 4.655 8.225 8.225 0 012.445 5.476c.001 1.505-.516 2.764-1.536 3.758C17.987 23.175 15.416 24 12.409 24zm-.41-1.505c.14.004.279.005.417.005 2.614 0 4.801-.67 5.999-1.838.719-.701 1.083-1.592 1.083-2.648a6.699 6.699 0 00-1.998-4.443 9.96 9.96 0 01-2.857-5.494l-.016-.107a2.436 2.436 0 00-2.578-1.999l-.051.002-.05-.002a2.442 2.442 0 00-2.581 2.022l-.009.067a9.983 9.983 0 01-2.861 5.512 6.726 6.726 0 00-2 4.478c.001 1.026.365 1.91 1.083 2.61 1.198 1.17 3.386 1.841 6.001 1.84.132 0 .265-.002.399-.005h.019z"}}),_c('path',{attrs:{"d":"M14.541 20.848a.743.743 0 01-.53-.22l-1.061-1.061-1.061 1.061a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.061-1.061-1.591-1.591-1.061 1.061a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.061-1.061-1.061-1.061a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.061 1.061 1.061-1.061a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.061 1.061 1.591 1.591 1.061-1.061a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.061 1.061 1.061 1.061a.752.752 0 01-.53 1.281z"}})])
          )
        }
      }
    