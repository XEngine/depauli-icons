
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20A2.252 2.252 0 010 17.75v-12A2.252 2.252 0 012.25 3.5h19.5A2.252 2.252 0 0124 5.75v12A2.252 2.252 0 0121.75 20H2.25zm19.5-1.5a.75.75 0 00.75-.75V12.5H21v.75a.75.75 0 01-1.5 0v-.75h-6.75v3h.75a.75.75 0 010 1.5h-.75v1.5h9zM1.5 17.75c0 .414.336.75.75.75h9V17h-.75a.75.75 0 010-1.5h.75v-3H4.5v.75a.75.75 0 01-1.5 0v-.75H1.5v5.25zm21-6.75V5.75a.75.75 0 00-.75-.75h-9v1.5h.75a.75.75 0 010 1.5h-.75v3h6.75v-.75a.75.75 0 011.5 0V11h1.5zm-11.25 0V8h-.75a.75.75 0 010-1.5h.75V5h-9a.75.75 0 00-.75.75V11H3v-.75a.75.75 0 011.5 0V11h6.75z"}})])
          )
        }
      }
    