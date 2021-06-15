
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
            children.concat([_c('path',{attrs:{"d":"M7.125 21c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75S9.193 21 7.125 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S8.366 15 7.125 15z"}}),_c('circle',{attrs:{"cx":"7.125","cy":"17.25","r":"1.125"}}),_c('path',{attrs:{"d":"M2.625 24a2.252 2.252 0 01-2.25-2.25v-15a2.252 2.252 0 012.25-2.25h6.75v-.75A3.754 3.754 0 0113.125 0a3.754 3.754 0 013.75 3.75v13.5a2.252 2.252 0 002.25 2.25h3.75a.75.75 0 010 1.5h-3.75a3.754 3.754 0 01-3.75-3.75V3.75a2.252 2.252 0 00-2.25-2.25 2.252 2.252 0 00-2.25 2.25v.75h.75a2.252 2.252 0 012.25 2.25v15a2.252 2.252 0 01-2.25 2.25h-9zm-.75-2.25c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V12h-10.5v9.75zm10.5-11.25V6.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v3.75h10.5z"}})])
          )
        }
      }
    