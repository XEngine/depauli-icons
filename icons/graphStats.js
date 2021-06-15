
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
            children.concat([_c('path',{attrs:{"d":"M15.08 20.746a1.502 1.502 0 01-1.421-1.016L8.921 4.993l-2.596 6.128A2.241 2.241 0 014.25 12.5H.75a.75.75 0 010-1.5h3.5a.748.748 0 00.693-.462l2.602-6.12a1.498 1.498 0 011.967-.792c.392.167.695.493.833.896l4.738 14.738 2.579-6.851A2.256 2.256 0 0119.748 11h3.5a.75.75 0 010 1.5h-3.5a.748.748 0 00-.693.462l-2.586 6.843a1.524 1.524 0 01-.907.861c-.156.053-.318.08-.482.08z"}})])
          )
        }
      }
    