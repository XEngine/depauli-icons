
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-5.376 0-9.75-4.374-9.75-9.75a9.69 9.69 0 014.5-8.212V2.25A2.252 2.252 0 019 0h6a2.252 2.252 0 012.25 2.25v3.788a9.69 9.69 0 014.5 8.212c0 5.376-4.374 9.75-9.75 9.75zm0-18c-4.549 0-8.25 3.701-8.25 8.25S7.451 22.5 12 22.5s8.25-3.701 8.25-8.25S16.549 6 12 6zm0-1.5a9.62 9.62 0 013.75.751V2.25A.75.75 0 0015 1.5H9a.75.75 0 00-.75.75v3.001A9.62 9.62 0 0112 4.5z"}}),_c('path',{attrs:{"d":"M10.5 20.811a.738.738 0 01-.187-.024 6.792 6.792 0 01-4.572-4.006.752.752 0 01.695-1.032c.307 0 .58.184.695.468a5.287 5.287 0 003.557 3.117.751.751 0 01-.188 1.477z"}})])
          )
        }
      }
    