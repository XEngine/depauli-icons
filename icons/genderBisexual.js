
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
            children.concat([_c('path',{attrs:{"d":"M12.75 24a.75.75 0 010-1.5h1.615l.646-3.873A.747.747 0 0115.75 18h1.959l-1.921-5.763C14.886 9.53 13.991 9 12.75 9a.75.75 0 010-1.5c2.679 0 3.759 2.155 4.461 4.263l2.25 6.75a.75.75 0 01-.711.987h-2.365l-.646 3.873A.747.747 0 0115 24h-2.25zM12.75 7.5a.75.75 0 010-1.5C13.991 6 15 4.991 15 3.75S13.991 1.5 12.75 1.5a.75.75 0 010-1.5c2.068 0 3.75 1.682 3.75 3.75S14.818 7.5 12.75 7.5zM9.75 7.5C7.682 7.5 6 5.818 6 3.75S7.682 0 9.75 0a.75.75 0 010 1.5C8.509 1.5 7.5 2.509 7.5 3.75S8.509 6 9.75 6a.75.75 0 010 1.5zM7.5 24a.747.747 0 01-.746-.675L6.071 16.5H5.25a.75.75 0 01-.75-.75v-3A5.256 5.256 0 019.75 7.5a.75.75 0 010 1.5A3.754 3.754 0 006 12.75V15h.75c.387 0 .708.29.746.675l.683 6.825H9.75a.75.75 0 010 1.5H7.5z"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM20.25 24a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24h-1.5z"}})])
          )
        }
      }
    