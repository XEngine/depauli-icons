
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h11.379a2.23 2.23 0 01.94.208c.24.109.461.262.65.451l6.622 6.622a2.246 2.246 0 01.659 1.59V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V9H16.5a2.252 2.252 0 01-2.25-2.25V1.5H3zm12.75 5.25c0 .414.336.75.75.75h4.189L15.75 2.561V6.75z"}}),_c('path',{attrs:{"d":"M9 19.5a.75.75 0 01-.75-.75v-4.099l-.334.223a.747.747 0 01-1.04-.208.751.751 0 01.208-1.04l4.5-3a.75.75 0 01.832 0l4.5 3A.748.748 0 0116.5 15a.75.75 0 01-.416-.126l-.334-.222v4.099a.75.75 0 01-.75.75H9zm5.25-1.5v-4.349l-2.25-1.5-2.25 1.5V18h4.5z"}})])
          )
        }
      }
    