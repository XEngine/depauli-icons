
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
            children.concat([_c('path',{attrs:{"d":"M12 11.25a.731.731 0 01-.261-.048l-.021-.007a.74.74 0 01-.249-.166L8.47 8.03c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.72 1.72V.75a.75.75 0 011.5 0v7.939l1.72-1.72a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-3 2.999a.74.74 0 01-.245.163l-.025.009a.714.714 0 01-.26.049zM4.5 21a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15z"}}),_c('circle',{attrs:{"cx":"19.125","cy":"17.625","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-6a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24H2.25zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    