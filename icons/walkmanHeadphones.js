
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
            children.concat([_c('path',{attrs:{"d":"M11.25 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM21.75 19.5a2.252 2.252 0 01-2.25-2.25v-3a2.252 2.252 0 013-2.121V12c0-5.79-4.71-10.5-10.5-10.5S1.5 6.21 1.5 12v.129a2.252 2.252 0 013 2.121v3c0 1.241-1.009 2.25-2.25 2.25S0 18.491 0 17.25V12C0 5.383 5.383 0 12 0s12 5.383 12 12v5.25a2.252 2.252 0 01-2.25 2.25zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zm-19.5 0a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75z"}}),_c('path',{attrs:{"d":"M9.75 24a2.252 2.252 0 01-2.25-2.25V16.5h-.75a.75.75 0 010-1.5h.75v-1.5h-.75a.75.75 0 010-1.5h.75v-.75A2.252 2.252 0 019.75 9h6A2.252 2.252 0 0118 11.25v10.5A2.252 2.252 0 0115.75 24h-6zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75h-6z"}}),_c('circle',{attrs:{"cx":"14.625","cy":"16.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.625","cy":"13.125","r":"1.125"}})])
          )
        }
      }
    