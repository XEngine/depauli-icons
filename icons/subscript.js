
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
            children.concat([_c('path',{attrs:{"d":"M16.5 17.248a.743.743 0 01-.53-.22L8.625 9.684 1.28 17.028a.744.744 0 01-1.06 0 .752.752 0 010-1.061l7.345-7.345L.22 1.278C.078 1.137 0 .948 0 .748S.078.359.22.218c.141-.142.33-.22.53-.22s.389.078.53.22l7.345 7.345L15.97.218a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L9.686 8.623l7.345 7.345a.75.75 0 01-.531 1.28zM20.25 23.998a.753.753 0 01-.676-.426.754.754 0 01.091-.793l2.532-3.165a1.39 1.39 0 00.303-.866.75.75 0 00-1.5 0 .75.75 0 01-1.5 0c0-1.241 1.009-2.25 2.25-2.25S24 17.507 24 18.748c0 .653-.225 1.293-.632 1.803l-1.557 1.947h1.439a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    