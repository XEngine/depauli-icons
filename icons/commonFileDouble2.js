
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a2.252 2.252 0 01-2.25-2.25V8.25A2.252 2.252 0 014.5 6h2.25V2.25A2.252 2.252 0 019 0h7.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.59v10.63A2.252 2.252 0 0119.5 18h-2.25v3.75A2.252 2.252 0 0115 24H4.5zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V11.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H4.5zm15 9a.75.75 0 00.75-.75V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H9a.75.75 0 00-.75.75V6h3.879c.6 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.59v5.38h2.25z"}})])
          )
        }
      }
    