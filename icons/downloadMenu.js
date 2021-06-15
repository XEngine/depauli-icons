
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
            children.concat([_c('path',{attrs:{"d":"M12 11.25a.731.731 0 01-.261-.048l-.021-.007a.74.74 0 01-.249-.166L7.72 7.28c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.47 2.47V.75a.75.75 0 011.5 0v7.939l2.47-2.47a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-3.75 3.749a.74.74 0 01-.245.163l-.025.009a.714.714 0 01-.26.049zM.75 24a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 19.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 15a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    