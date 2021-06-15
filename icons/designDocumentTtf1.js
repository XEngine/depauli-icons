
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V21a.75.75 0 011.5 0v.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V21a.75.75 0 011.5 0v.75A2.252 2.252 0 0121.75 24H2.25zM23.25 8.25a.75.75 0 01-.75-.75V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V7.5a.75.75 0 01-1.5 0V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25V7.5a.75.75 0 01-.75.75zM16.5 18.75a.75.75 0 01-.75-.75v-6A2.252 2.252 0 0118 9.75h1.5a.75.75 0 010 1.5H18a.75.75 0 00-.75.75v2.25h1.5a.75.75 0 010 1.5h-1.5V18a.75.75 0 01-.75.75zM6 18.75a.75.75 0 01-.75-.75v-6.75H4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75V18a.75.75 0 01-.75.75zM12 18.75a.75.75 0 01-.75-.75v-6.75h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75V18a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    