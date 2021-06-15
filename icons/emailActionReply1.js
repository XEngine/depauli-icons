
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
            children.concat([_c('path',{attrs:{"d":"M2.25 16.5A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h18a2.252 2.252 0 012.25 2.25v9a.75.75 0 01-1.5 0V2.504l-7.249 5.543c-.692.62-1.58.961-2.501.961s-1.809-.342-2.501-.962L1.5 2.505V14.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm7.435-9.627a.723.723 0 01.051.043c.417.38.955.59 1.514.59a2.25 2.25 0 001.516-.591.683.683 0 01.051-.043L19.843 1.5H2.655l7.03 5.373z"}}),_c('path',{attrs:{"d":"M17.25 21.75a.753.753 0 01-.45-.15l-6-4.5a.753.753 0 010-1.2l6-4.5a.753.753 0 01.786-.07A.744.744 0 0118 12v1.5h3.75A2.252 2.252 0 0124 15.75v1.5a2.252 2.252 0 01-2.25 2.25H18V21a.746.746 0 01-.75.75zm-.75-2.25v-.75a.75.75 0 01.75-.75h4.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 01-.75-.75v-.75l-4 3 4 3z"}})])
          )
        }
      }
    