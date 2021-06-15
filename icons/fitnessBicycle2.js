
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
            children.concat([_c('path',{attrs:{"d":"M15 21.25a.75.75 0 010-1.5h3.733L17.678 16H7.654l-1.816 3.75H9.75a.75.75 0 010 1.5h-9a.75.75 0 010-1.5h3.422l3.998-8.256L6.426 7.75H4.5a.75.75 0 010-1.5H9a.75.75 0 010 1.5h-.919l1.322 2.839 6.21-1.93-.489-1.737a2.693 2.693 0 011.743-3.288l1.159-.387a.749.749 0 11.474 1.422l-1.159.387a1.197 1.197 0 00-.772 1.46l3.722 13.234h2.959a.75.75 0 010 1.5H15zm2.256-6.75l-1.236-4.396-6.487 2.016-1.152 2.38h8.875z"}})])
          )
        }
      }
    