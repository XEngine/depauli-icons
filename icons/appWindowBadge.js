
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
            children.concat([_c('path',{attrs:{"d":"M2.26 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-2.25H1.51v12.75c0 .414.336.75.75.75h12a.75.75 0 010 1.5h-12zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M17.26 24.004a.752.752 0 01-.75-.75v-4.899a4.484 4.484 0 01-1.5-3.351c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5a4.484 4.484 0 01-1.5 3.351v4.899a.75.75 0 01-1.28.53l-1.72-1.72-1.72 1.72a.757.757 0 01-.53.22zm2.25-3.751c.2 0 .389.078.53.22l.97.97v-2.199c-.481.172-.983.26-1.5.26s-1.019-.087-1.5-.26v2.199l.97-.97a.743.743 0 01.53-.22zm0-8.25c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}}),_c('circle',{attrs:{"cx":"19.51","cy":"15.003","r":"1.125"}})])
          )
        }
      }
    