
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
            children.concat([_c('path',{attrs:{"d":"M18.687 21.088a1.49 1.49 0 01-1.059-.436l-3.183-3.184-2.917 2.917a1.49 1.49 0 01-1.06.44c-.61 0-1.155-.365-1.388-.928L2.769 4.569a1.496 1.496 0 010-1.142 1.496 1.496 0 011.958-.816l15.326 6.311a1.493 1.493 0 01.928 1.388c0 .401-.156.778-.439 1.061l-2.917 2.917 3.182 3.182a1.502 1.502 0 010 2.122l-1.06 1.061c-.283.28-.659.435-1.06.435zm-4.242-5.431c.2 0 .389.078.53.22l3.712 3.713 1.06-1.061-3.712-3.713c-.14-.14-.22-.333-.22-.53s.08-.391.22-.53l3.447-3.447L4.156 3.998l6.311 15.327 3.447-3.448c.14-.14.333-.22.531-.22z"}})])
          )
        }
      }
    