
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
            children.concat([_c('path',{attrs:{"d":"M18.75 17.998a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5A2.252 2.252 0 010 15.748v-4.5a2.252 2.252 0 012.25-2.25H4.5V1.787c0-.986.802-1.788 1.787-1.789h6.552c.473 0 .931.189 1.262.518l4.875 4.874c.337.341.521.79.52 1.267v.029a.43.43 0 010 .124v2.188h2.254a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25h-3zm-.754-9v-1.5h-4.208A1.79 1.79 0 0112 5.71V1.498H6.288A.289.289 0 006 1.787v7.211h11.996zM13.5 5.71c0 .159.129.288.288.288h3.675L13.5 2.036V5.71z"}}),_c('path',{attrs:{"d":"M12.75 23.998a.75.75 0 01-.75-.75v-8.25h-1.5v8.25a.75.75 0 01-1.5 0v-8.25H7.5v5.25a2.252 2.252 0 01-2.25 2.25H4.5a.75.75 0 010-1.5h.75a.75.75 0 00.75-.75v-5.25h-.75a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-.75v5.25c0 .414.336.75.75.75H18a.75.75 0 010 1.5h-.75a2.252 2.252 0 01-2.25-2.25v-5.25h-1.5v8.25a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"20.625","cy":"13.875","r":"1.125"}})])
          )
        }
      }
    