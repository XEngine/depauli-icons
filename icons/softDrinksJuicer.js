
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
            children.concat([_c('path',{attrs:{"d":"M6.75 21.751a2.252 2.252 0 01-2.25-2.25v-1.266L.24 12.063a1.493 1.493 0 01.198-1.87 1.49 1.49 0 011.06-.443h5.204c-.005-2.094.926-4.276 2.837-6.657a2.227 2.227 0 011.652-.838c.02-.002.039-.004.059-.004a5.744 5.744 0 01.262.01 2.233 2.233 0 011.52.809c1.905 2.313 2.841 4.558 2.787 6.681h4.431a.75.75 0 01.75.75v.75h.75a2.252 2.252 0 012.25 2.25v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 00-.75-.75H21v6.75a2.252 2.252 0 01-2.25 2.25h-12zm-.883-4.176a.746.746 0 01.133.426v1.5c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-8.25H1.502l4.365 6.324zm8.45-7.824c.056-1.719-.723-3.592-2.317-5.573l-.004 5.573h2.321zm-3.821 0l.004-5.453C8.954 6.292 8.2 8.082 8.204 9.751h2.292z"}})])
          )
        }
      }
    