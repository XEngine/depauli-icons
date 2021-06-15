
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25v19.5A2.252 2.252 0 0118.75 24H5.25zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V13.5h-15v8.25zm15-9.75V9h-15v3h15zm0-4.5V2.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75V7.5h3.129a2.231 2.231 0 01-.129-.75v-1.5A2.252 2.252 0 019.75 3h4.5a2.252 2.252 0 012.25 2.25v1.5c0 .259-.044.511-.129.75H19.5zm-9.75-3a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5z"}})])
          )
        }
      }
    