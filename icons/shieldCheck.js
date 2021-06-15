
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.74.74 0 01-.124-.01A14.213 14.213 0 010 9.938V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v7.688A14.213 14.213 0 0112.125 23.99.761.761 0 0112 24zM1.5 9.938A12.725 12.725 0 0012 22.489 12.725 12.725 0 0022.5 9.938V6h-21v3.938zm21-5.438V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V4.5h21z"}}),_c('path',{attrs:{"d":"M11.25 16.188c-.4 0-.776-.156-1.059-.438L8.47 14.03a.75.75 0 111.06-1.06l1.72 1.719 5.469-5.47a.744.744 0 011.06 0c.143.141.221.33.221.53s-.078.389-.22.53l-5.47 5.47a1.487 1.487 0 01-1.06.439z"}})])
          )
        }
      }
    