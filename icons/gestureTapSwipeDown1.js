
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
            children.concat([_c('path',{attrs:{"d":"M.75 13.498a.75.75 0 010-1.5h4.209c1.104 0 2.037-.79 2.219-1.88l.332-1.993a.747.747 0 01.74-.627h4.5a.75.75 0 000-1.5H6a.745.745 0 01-.638-.356.745.745 0 01-.033-.73l.587-1.174a.882.882 0 00-.033-.854.88.88 0 00-.759-.429.898.898 0 00-.694.333L1.331 6.582a.748.748 0 01-1.327-.399.75.75 0 01.165-.55l3.094-3.789A2.402 2.402 0 015.7 1.025 2.39 2.39 0 017.258 4.41l-.044.088h5.536c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25H8.886l-.228 1.367a3.74 3.74 0 01-3.699 3.133H.75zM15.75 23.998a.767.767 0 01-.258-.046l-.017-.006a.748.748 0 01-.256-.167l-3.75-3.75a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47v-5.689a.75.75 0 011.5 0v5.689l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.74.74 0 01-.245.163l-.026.01a.765.765 0 01-.258.046z"}}),_c('path',{attrs:{"d":"M15.75 13.498a6.706 6.706 0 01-4.773-1.977.744.744 0 010-1.06.743.743 0 01.53-.22c.2 0 .389.078.53.22a5.215 5.215 0 003.712 1.538 5.216 5.216 0 003.712-1.537A5.216 5.216 0 0021 6.749a5.213 5.213 0 00-1.538-3.712 5.215 5.215 0 00-3.712-1.538 5.213 5.213 0 00-3.712 1.538.744.744 0 01-1.06 0 .744.744 0 010-1.06A6.706 6.706 0 0115.751 0c1.803 0 3.498.702 4.773 1.977A6.703 6.703 0 0122.5 6.749a6.706 6.706 0 01-1.977 4.773 6.709 6.709 0 01-4.773 1.976z"}})])
          )
        }
      }
    