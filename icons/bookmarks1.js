
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
            children.concat([_c('path',{attrs:{"d":"M9.768 23.156c-.4 0-.776-.156-1.059-.438a1.512 1.512 0 01-.441-1.063l-.276-5.648-5.686-.278c-.365 0-.744-.16-1.023-.439a1.485 1.485 0 01-.438-1.06c0-.4.156-.776.438-1.059L12.951 1.504a2.237 2.237 0 011.59-.656c.599 0 1.163.232 1.586.653l6.37 6.371c.424.424.658.989.658 1.591s-.234 1.167-.658 1.591L10.829 22.716c-.282.283-.659.44-1.06.44h-.001zM14.54 2.347c-.2 0-.389.077-.53.218L2.344 14.231l6.4.312a.747.747 0 01.712.712l.31 6.364.003.04L21.436 9.993a.742.742 0 00.219-.53c0-.2-.078-.389-.219-.53L15.07 2.565a.75.75 0 00-.53-.218z"}})])
          )
        }
      }
    