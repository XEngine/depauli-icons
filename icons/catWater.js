
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
            children.concat([_c('path',{attrs:{"d":"M7.397 16.477c-4.026 0-7.349-3.276-7.407-7.303V2.5c.001-.392.151-.761.422-1.041a1.486 1.486 0 011.054-.457h.031c.387 0 .756.15 1.038.422l2.159 2.1a5.664 5.664 0 015.593 0l2.158-2.099a1.5 1.5 0 012.546 1.073v6.478a.75.75 0 01-1.5 0V2.5l-2.584 2.514a.743.743 0 01-.523.212.742.742 0 01-.44-.143 4.16 4.16 0 00-2.454-.798c-.885 0-1.733.276-2.453.798a.742.742 0 01-.44.143.742.742 0 01-.523-.213L1.49 2.5v6.662c.046 3.203 2.696 5.814 5.907 5.814l.082-.001c.419 0 .756.332.761.74a.751.751 0 01-.74.76l-.103.002z"}}),_c('path',{attrs:{"d":"M14.24 23.976a3.746 3.746 0 01-3.558-2.565.77.77 0 01-.029-.117l-.153-.948a.748.748 0 01.74-.87h3.75v-3a.75.75 0 01.75-.75h.75v-.75a2.252 2.252 0 00-2.247-2.232 2.26 2.26 0 00-2.178 1.674.75.75 0 11-1.45-.384 3.757 3.757 0 013.603-2.79h.027a3.73 3.73 0 012.985 1.492 3.724 3.724 0 013.005-1.515 3.75 3.75 0 013.638 2.818.75.75 0 01-1.453.373 2.249 2.249 0 00-3.773-1.029 2.236 2.236 0 00-.656 1.592v.751h.75a.75.75 0 01.75.75v3h3.75a.748.748 0 01.74.87l-.154.948a.714.714 0 01-.029.117 3.745 3.745 0 01-3.557 2.565H14.24zm-2.116-2.986a2.251 2.251 0 002.116 1.486h6c.948 0 1.795-.596 2.116-1.486l.002-.014H12.122l.002.014zm5.866-1.514v-2.25h-1.5v2.25h1.5z"}}),_c('path',{attrs:{"d":"M23.24 18.726a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM11.24 18.726a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    