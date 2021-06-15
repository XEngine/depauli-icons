
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h15c.59 0 1.147.227 1.571.639l2.996 2.879c.435.424.683 1.012.683 1.615V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.133a.754.754 0 00-.227-.537l-2.996-2.879A.747.747 0 0018 1.5H3z"}}),_c('path',{attrs:{"d":"M9.857 17.25c-.173 0-.345-.028-.511-.084a1.59 1.59 0 01-.927-.806 1.617 1.617 0 01-.169-.716V9.856a1.608 1.608 0 012.322-1.437l5.79 2.896a1.607 1.607 0 010 2.872l-5.788 2.895a1.613 1.613 0 01-.717.168zm-.001-7.5a.106.106 0 00-.106.106v5.788a.108.108 0 00.072.101.106.106 0 00.034.006.115.115 0 00.047-.011l5.789-2.895a.105.105 0 00.001-.188l-5.79-2.895a.097.097 0 00-.047-.012z"}})])
          )
        }
      }
    