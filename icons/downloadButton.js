
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
            children.concat([_c('path',{attrs:{"d":"M12.002 16.501a.729.729 0 01-.385-.108.655.655 0 01-.146-.112l-4.5-4.5a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l3.22 3.22V.751a.75.75 0 011.5 0v13.19l3.22-3.22a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-4.5 4.5a.791.791 0 01-.24.162.517.517 0 01-.063.021.712.712 0 01-.226.037z"}}),_c('path',{attrs:{"d":"M6 24a3.754 3.754 0 01-3.75-3.75V7.5A3.754 3.754 0 016 3.75h2.25a.75.75 0 010 1.5H6A2.252 2.252 0 003.75 7.5v12.75A2.252 2.252 0 006 22.5h12a2.252 2.252 0 002.25-2.25V7.5A2.252 2.252 0 0018 5.25h-2.248a.75.75 0 010-1.5H18a3.754 3.754 0 013.75 3.75v12.75A3.754 3.754 0 0118 24H6z"}})])
          )
        }
      }
    