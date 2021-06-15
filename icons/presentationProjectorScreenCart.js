
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
            children.concat([_c('path',{attrs:{"d":"M.751 18a.75.75 0 010-1.5h.75v-12c-.827 0-1.5-.673-1.5-1.5V1.5c0-.827.673-1.5 1.5-1.5h19.5c.827 0 1.5.673 1.5 1.5V3c0 .827-.673 1.5-1.5 1.5V9a.75.75 0 01-1.5 0V4.5h-16.5v12h6a.75.75 0 010 1.5H.751zm.75-15h19.5V1.5h-19.5V3z"}}),_c('path',{attrs:{"d":"M15.522 21a1.506 1.506 0 01-1.405-.989l-1.995-5.486a.766.766 0 01-.019-.054l-.806-2.215a.751.751 0 01.704-1.006c.314 0 .598.199.705.494l.639 1.756h9.156a1.497 1.497 0 011.389.944c.148.372.143.78-.015 1.147l-1.59 4.456c-.248.587-.793.953-1.395.953h-5.368zm.004-1.5h5.363l1.59-4.457c.016-.04.017-.049.017-.049L13.89 15l1.636 4.5z"}}),_c('circle',{attrs:{"cx":"19.876","cy":"22.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.126","cy":"22.875","r":"1.125"}})])
          )
        }
      }
    