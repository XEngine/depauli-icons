
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
            children.concat([_c('circle',{attrs:{"cx":"17.251","cy":"20.625","r":"1.125"}}),_c('path',{attrs:{"d":"M17.251 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M13.025 24a2.527 2.527 0 01-2.258-3.652l4.226-8.452a2.507 2.507 0 011.459-1.266 2.522 2.522 0 011.927.136c.486.242.887.644 1.13 1.13l4.226 8.452c.301.603.35 1.288.136 1.927a2.504 2.504 0 01-1.266 1.459 2.535 2.535 0 01-1.128.266h-8.452zm4.227-12.001a1.018 1.018 0 00-.918.567l-4.226 8.452a1.025 1.025 0 00.916 1.481h8.452a1.028 1.028 0 00.972-.7 1.014 1.014 0 00-.055-.781l-4.226-8.452a1.037 1.037 0 00-.458-.459 1.033 1.033 0 00-.457-.108z"}}),_c('path',{attrs:{"d":"M2.251 21a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.251 0H12.88c.601 0 1.166.234 1.59.659l2.872 2.872c.425.425.659.99.659 1.59V8.25a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53L13.41 1.719a.756.756 0 00-.53-.219H2.251a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M6.001 15c-1.682 0-3-.988-3-2.25s1.318-2.25 3-2.25c.495 0 .974.087 1.4.252l-.194-3.894a.75.75 0 01.67-.783l1.062-.113a3.457 3.457 0 013.304 1.64.744.744 0 01.086.568.746.746 0 01-.727.57.752.752 0 01-.642-.363 1.945 1.945 0 00-1.861-.924l-.359.039.261 5.258c0 1.262-1.318 2.25-3 2.25zm0-3c-.845 0-1.5.403-1.5.75s.655.75 1.5.75c.843 0 1.498-.403 1.5-.749-.007-.35-.663-.751-1.5-.751z"}})])
          )
        }
      }
    