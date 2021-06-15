
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.5A2.252 2.252 0 010 20.25V3.75A2.252 2.252 0 012.25 1.5h19.5A2.252 2.252 0 0124 3.75v16.5a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V9h-21v11.25zm21-12.75V3.75a.75.75 0 00-.75-.75h-4.665L15.96 7.5h6.54zm-8.085 0L15.54 3H9.586L8.461 7.5h5.954zm-7.501 0L8.039 3H2.25a.75.75 0 00-.75.75V7.5h5.414z"}}),_c('path',{attrs:{"d":"M5.25 18a.75.75 0 010-1.5h5.25v-3a.75.75 0 011.5 0v3h6.75a.75.75 0 010 1.5H5.25z"}})])
          )
        }
      }
    