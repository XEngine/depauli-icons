
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-5.376 0-9.75-4.374-9.75-9.75a9.718 9.718 0 019-9.719V1.5h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v3.031a9.644 9.644 0 015.177 1.982l.911-.911a.743.743 0 01.132-.882.749.749 0 011.06 0l.75.75c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-.882.133l-.855.855a9.657 9.657 0 012.707 6.733C21.75 19.626 17.376 24 12 24zm0-18c-4.549 0-8.25 3.701-8.25 8.25S7.451 22.5 12 22.5s8.25-3.701 8.25-8.25S16.549 6 12 6z"}}),_c('path',{attrs:{"d":"M12 15.75a.75.75 0 01-.556-.247l-3.75-4.151a.75.75 0 011.114-1.005l3.75 4.151A.75.75 0 0112 15.75z"}})])
          )
        }
      }
    