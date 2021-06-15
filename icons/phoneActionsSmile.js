
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
            children.concat([_c('path',{attrs:{"d":"M14.788 24.021a5.26 5.26 0 01-2.854-.848A41.136 41.136 0 01.795 12.017c-1.323-2.077-1.026-4.76.728-6.514l.63-.629c.424-.424.989-.658 1.59-.658s1.167.234 1.591.659l2.652 2.651c.425.425.659.99.658 1.592 0 .602-.234 1.167-.659 1.591a.75.75 0 000 1.06c.142.142.219.33.219.531s-.078.389-.22.53a.746.746 0 01-1.06-.001 2.253 2.253 0 010-3.182.75.75 0 00.001-1.061l-2.651-2.65a.748.748 0 00-1.061 0l-.63.629a3.727 3.727 0 00-.511 4.666A39.666 39.666 0 0012.775 21.93a3.72 3.72 0 004.659-.517l.629-.629a.751.751 0 00.005-1.056l-2.658-2.656a.745.745 0 00-.531-.22c-.2 0-.389.078-.53.219-.425.424-.99.658-1.592.658s-1.166-.234-1.59-.658a.744.744 0 010-1.06.744.744 0 011.06 0c.141.141.33.219.53.219s.389-.078.53-.219c.425-.425.99-.658 1.591-.658.602 0 1.167.234 1.591.658l2.645 2.644c.433.433.666.998.666 1.6 0 .602-.234 1.167-.658 1.591l-.629.629a5.203 5.203 0 01-3.705 1.546z"}}),_c('path',{attrs:{"d":"M10.485 15.012a.749.749 0 01-.711-.987l1.419-4.256a6.782 6.782 0 01-.707-3.007c0-1.803.702-3.498 1.977-4.773A6.706 6.706 0 0117.236.012c.9 0 1.778.177 2.607.525a6.707 6.707 0 013.637 3.669 6.71 6.71 0 01-.023 5.166 6.739 6.739 0 01-6.232 4.139h-.001a6.683 6.683 0 01-2.294-.405l-4.14 1.84a.731.731 0 01-.305.066zm6.75-13.5c-1.402 0-2.72.546-3.712 1.538a5.218 5.218 0 00-1.537 3.712c0 .899.233 1.788.674 2.572a.75.75 0 01.058.605l-.982 2.947 2.872-1.276a.743.743 0 01.595-.007 5.246 5.246 0 006.873-2.81 5.217 5.217 0 00.018-4.018 5.217 5.217 0 00-2.828-2.854 5.24 5.24 0 00-2.031-.409z"}}),_c('path',{attrs:{"d":"M17.235 10.512a3.754 3.754 0 01-3.75-3.75.75.75 0 01.75-.75h6a.75.75 0 01.75.75 3.754 3.754 0 01-3.75 3.75zm-2.121-3c.313.879 1.159 1.5 2.121 1.5s1.808-.621 2.121-1.5h-4.242z"}})])
          )
        }
      }
    