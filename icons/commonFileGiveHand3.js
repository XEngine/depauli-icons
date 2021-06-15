
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
            children.concat([_c('path',{attrs:{"d":"M23.25 19.5a.75.75 0 01-.75-.75V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H8.25a.75.75 0 00-.75.75V12A.75.75 0 016 12V2.25A2.252 2.252 0 018.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V18.75a.75.75 0 01-.75.75zM.75 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3c.96 0 1.808.615 2.121 1.5H10.5c1.8 0 3.324 1.268 3.675 3h3.075A3.754 3.754 0 0121 21.75a.75.75 0 01-.75.75H5.871A2.258 2.258 0 013.75 24h-3zm18.621-3a2.264 2.264 0 00-2.121-1.5H10.5a.75.75 0 010-1.5h2.118a2.262 2.262 0 00-2.118-1.5H6V21h13.371z"}}),_c('circle',{attrs:{"cx":"2.625","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    