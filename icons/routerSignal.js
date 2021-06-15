
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
            children.concat([_c('path',{attrs:{"d":"M8.25 7.501a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM4.5 9.001a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM.75 10.501a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9a.75.75 0 01-.75.75zM15.75 7.501a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM19.5 9.001a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM23.25 10.501a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"14.25","cy":"18.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"18.75","cy":"18.375","r":"1.125"}}),_c('path',{attrs:{"d":"M19.875 24.001a.75.75 0 01-.75-.75v-.75H4.875v.75a.75.75 0 01-1.5 0v-.818A4.11 4.11 0 010 18.376a4.13 4.13 0 014.125-4.125h7.125v-9a.75.75 0 011.5 0v9h7.125A4.13 4.13 0 0124 18.376a4.11 4.11 0 01-3.375 4.057v.818a.75.75 0 01-.75.75zm0-3c1.448 0 2.625-1.177 2.625-2.625s-1.177-2.625-2.625-2.625H10.5v5.25h9.375zm-15.75-5.25c-1.447 0-2.625 1.177-2.625 2.625s1.178 2.625 2.625 2.625H9v-5.25H4.125z"}})])
          )
        }
      }
    