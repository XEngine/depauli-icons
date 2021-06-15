
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-3.757 0-6-2.243-6-6 0-1.332.563-2.843 1.675-4.5H4.171a2.235 2.235 0 01-1.591-.659 2.235 2.235 0 01-.592-2.136l2.25-9A2.247 2.247 0 016.421 0h11.158c1.034 0 1.932.701 2.183 1.704l2.25 9a2.252 2.252 0 01-2.183 2.796h-3.502C17.437 15.16 18 16.671 18 18c0 3.757-2.243 6-6 6zM9.522 13.5C8.198 15.228 7.5 16.782 7.5 18c0 2.902 1.598 4.5 4.5 4.5s4.5-1.598 4.5-4.5c0-1.215-.697-2.768-2.018-4.5h-4.96zm-3.101-12a.75.75 0 00-.728.568l-2.25 9a.75.75 0 00.198.712c.141.142.329.22.53.22h15.658a.751.751 0 00.727-.932l-2.25-9a.748.748 0 00-.727-.568H6.421z"}})])
          )
        }
      }
    