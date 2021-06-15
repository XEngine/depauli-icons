
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
            children.concat([_c('path',{attrs:{"d":"M11.251 24a.743.743 0 01-.53-.22.745.745 0 01-.205-.677l.75-3.75a.748.748 0 01.205-.384l7.63-7.63a2.844 2.844 0 012.026-.839c.763 0 1.48.296 2.02.832 1.09 1.119 1.099 2.89.036 4.045a.447.447 0 01-.021.022l-7.63 7.63a.744.744 0 01-.384.205l-3.749.75a.684.684 0 01-.148.016zm.956-1.706l2.424-.485 7.463-7.463c.499-.548.504-1.426-.001-1.945l-.021-.022a1.34 1.34 0 00-.945-.379l-.001-.375V12c-.364 0-.707.142-.964.4l-7.47 7.47-.485 2.424zM2.251 21a2.252 2.252 0 01-2.25-2.25V2.25C.001 1.009 1.011 0 2.251 0H12.88c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.59v3.13a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53L13.41 1.719a.748.748 0 00-.53-.219H2.251a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('circle',{attrs:{"cx":"5.251","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M3.751 15a.747.747 0 01-.674-1.078l1.937-3.981a.784.784 0 01.049-.085 1.492 1.492 0 011.25-.67c.339 0 .672.117.937.329l.608.487 1.541-2.197a1.492 1.492 0 011.227-.639c.504 0 .972.25 1.25.669l1.761 2.809a.746.746 0 01-.237 1.034.752.752 0 01-1.034-.237l-1.75-2.792-1.989 2.869a.754.754 0 01-.614.319.747.747 0 01-.469-.165l-1.226-.982L4.95 13.5h4.801a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    