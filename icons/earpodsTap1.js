
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
            children.concat([_c('path',{attrs:{"d":"M16.5 10.5C14.019 10.5 12 8.481 12 6s2.019-4.5 4.5-4.5S21 3.519 21 6s-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}}),_c('circle',{attrs:{"cx":"6.75","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M10.5 24c-.827 0-1.5-.673-1.5-1.5V11.81a5.96 5.96 0 01-1.495.19 6.045 6.045 0 01-4.291-1.8A.751.751 0 013 9.674V2.326c0-.198.076-.384.215-.525A5.957 5.957 0 017.44.003h.043c1.59 0 3.088.609 4.216 1.716l.08.08a.747.747 0 01-.008 1.063.75.75 0 01-1.062-.011l-.064-.064a4.468 4.468 0 00-3.147-1.282A4.476 4.476 0 004.5 2.646v6.708a4.475 4.475 0 003 1.143A4.47 4.47 0 009 10.24V9a.75.75 0 011.5 0v13.5H12V12a.75.75 0 011.5 0v10.5c0 .827-.673 1.5-1.5 1.5h-1.5z"}})])
          )
        }
      }
    