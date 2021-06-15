
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
            children.concat([_c('path',{attrs:{"d":"M.751 20.751a.75.75 0 010-1.5h10.083a7.077 7.077 0 006.851-5.303l2.192-8.47-1.944 1.2a.744.744 0 01-1.032-.244.747.747 0 01.244-1.032l3.531-2.18a.6.6 0 01.026-.015c.029-.016.056-.028.083-.04l.025-.011a.74.74 0 01.122-.033l.033-.006a.656.656 0 01.134-.007.587.587 0 01.072.008c.022.003.04.005.058.009l.026.005a.605.605 0 01.068.023.567.567 0 01.128.06.673.673 0 01.223.204c.01.011.022.029.033.047l2.181 3.532a.747.747 0 01-.244 1.033.75.75 0 01-1.032-.244L21.355 5.75l-2.219 8.574a8.576 8.576 0 01-8.303 6.427H.751z"}})])
          )
        }
      }
    