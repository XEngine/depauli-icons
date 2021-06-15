
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
            children.concat([_c('path',{attrs:{"d":"M.773 19.003a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.773zM17.924 13.889a.755.755 0 01-.641-.36.757.757 0 01-.025-.735 5.9 5.9 0 000-5.432 5.885 5.885 0 00-5.245-3.18c-.935 0-1.871.229-2.706.662a5.862 5.862 0 00-2.905 3.453 5.86 5.86 0 00.387 4.497c.12.231.11.512-.025.735a.756.756 0 01-.641.361H.773a.75.75 0 010-1.5h4.223a7.407 7.407 0 01-.024-4.546 7.348 7.348 0 013.645-4.332 7.406 7.406 0 013.395-.83 7.38 7.38 0 016.577 3.989 7.377 7.377 0 01.461 5.718h4.225a.75.75 0 010 1.5h-5.351z"}})])
          )
        }
      }
    