
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-9a2.252 2.252 0 012.25-2.25H6V2.25A2.252 2.252 0 018.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V18.75A2.252 2.252 0 0121.75 21H19.5v.75A2.252 2.252 0 0117.25 24h-15zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-9a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5zm19.5 7.5a.75.75 0 00.75-.75V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H8.25a.75.75 0 00-.75.75v8.379A2.258 2.258 0 019 12.75v.75h8.25a2.252 2.252 0 012.25 2.25v3.75h2.25z"}}),_c('path',{attrs:{"d":"M11.25 6a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM11.25 10.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    