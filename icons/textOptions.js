
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.998A2.252 2.252 0 010 21.748v-4.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H2.25zM15.709 13.498H15a.75.75 0 010-1.5v-3H9v3a.75.75 0 010 1.5H7.5a.75.75 0 010-1.5V4.5C7.5 2.019 9.519 0 12 0s4.5 2.019 4.5 4.5v7.498a.75.75 0 010 1.5h-.712l-.038.002a.657.657 0 01-.041-.002zm-.709-6V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v2.998h6z"}}),_c('path',{attrs:{"d":"M18 20.998a.743.743 0 01-.53-.22l-1.5-1.5a.749.749 0 01.53-1.28h3a.75.75 0 01.53 1.28l-1.5 1.5a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    