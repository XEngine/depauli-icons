
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
            children.concat([_c('path',{attrs:{"d":"M18.105 24l-.057.001a2.692 2.692 0 01-2.698-2.597A3.525 3.525 0 0011.679 18h-.837a3.535 3.535 0 00-3.692 3.403A2.699 2.699 0 014.44 24h-.061l-.081.001A2.791 2.791 0 011.5 21.375V19.5c.035-1.81.439-3.55 1.202-5.178a.68.68 0 00-.092-.697 12.63 12.63 0 01-2.608-6.82C0 6.784 0 6.763 0 6.742a6.828 6.828 0 012.19-4.938A6.778 6.778 0 017.076.007a6.79 6.79 0 014.175 1.65A6.874 6.874 0 0115.691 0a.75.75 0 01.001 1.5 5.311 5.311 0 00-3.891 1.708.749.749 0 01-1.102.001 5.27 5.27 0 00-3.903-1.708 5.277 5.277 0 00-3.589 1.406A5.32 5.32 0 001.5 6.727c.165 2.18.958 4.246 2.293 5.977a2.18 2.18 0 01.272 2.243A11.2 11.2 0 003 19.514v1.824c.073.664.63 1.163 1.303 1.163l.081-.002.05.001c.657 0 1.192-.507 1.217-1.155a5.03 5.03 0 015.218-4.846h.782a5.022 5.022 0 015.199 4.846 1.194 1.194 0 001.193 1.155l.075-.002.089.002c.669 0 1.223-.499 1.297-1.163V19.5a.75.75 0 011.5 0v1.875A2.792 2.792 0 0118.105 24z"}}),_c('path',{attrs:{"d":"M17.25 16.5a6.758 6.758 0 01-6.75-6.75C10.5 6.028 13.528 3 17.25 3S24 6.028 24 9.75a6.758 6.758 0 01-6.75 6.75zm0-12C14.355 4.5 12 6.855 12 9.75S14.355 15 17.25 15s5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M16.416 12.929a1.485 1.485 0 01-1.058-.439l-1.501-1.501c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l1.5 1.5 2.906-3.874a.753.753 0 011.049-.15.75.75 0 01.151 1.05l-2.905 3.874a1.493 1.493 0 01-1.202.6z"}})])
          )
        }
      }
    