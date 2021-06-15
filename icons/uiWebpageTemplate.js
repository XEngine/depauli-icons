
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
            children.concat([_c('path',{attrs:{"d":"M2.25 8.25A2.252 2.252 0 010 6V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25V6a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5A.75.75 0 0022.5 6V2.25a.75.75 0 00-.75-.75H16.5v5.25h5.25zM2.25 1.5a.75.75 0 00-.75.75V6c0 .414.336.75.75.75H15V1.5H2.25z"}}),_c('path',{attrs:{"d":"M19.5 6a.743.743 0 01-.53-.22l-1.5-1.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.97.97.97-.97c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-1.5 1.5a.743.743 0 01-.53.22zM2.25 24A2.252 2.252 0 010 21.75v-9a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 12.75v9A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V18h-21v3.75zm21-5.25v-3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h21z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"20.294","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"14.206","r":"1.125"}})])
          )
        }
      }
    