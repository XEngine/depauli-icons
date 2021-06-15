
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M9.857 16.5c-.173 0-.345-.028-.511-.084a1.59 1.59 0 01-.927-.806 1.617 1.617 0 01-.169-.716V9.106a1.607 1.607 0 012.322-1.437l5.79 2.896a1.607 1.607 0 010 2.872l-5.788 2.895a1.613 1.613 0 01-.717.168zM9.856 9a.106.106 0 00-.106.106v5.788a.108.108 0 00.072.101.112.112 0 00.081-.006l5.788-2.895a.105.105 0 000-.188l-5.79-2.895A.094.094 0 009.856 9z"}})])
          )
        }
      }
    