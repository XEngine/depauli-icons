
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
            children.concat([_c('path',{attrs:{"d":"M4.191 24a1.944 1.944 0 01-1.941-1.941V7.941c0-.934.681-1.729 1.573-1.904A3.732 3.732 0 016.75 3.076v-.49A2.592 2.592 0 019.337 0h5.327a2.592 2.592 0 012.587 2.587V3c0 .827-.673 1.5-1.5 1.5h-3V6h7.059c1.07 0 1.941.871 1.941 1.941v14.118c0 1.07-.871 1.941-1.941 1.941H4.191zm0-16.5a.442.442 0 00-.441.441v14.118c0 .243.198.441.441.441h15.618a.442.442 0 00.441-.441V7.941a.442.442 0 00-.441-.441H4.625a.667.667 0 01-.253 0h-.181zM11.25 6V4.5H7.5c-.96 0-1.805.621-2.118 1.5h5.868zm4.5-3v-.413c0-.599-.488-1.087-1.087-1.087H12.75V3h3zm-4.5 0V1.5H9.337c-.599 0-1.087.488-1.087 1.088V3h3z"}})])
          )
        }
      }
    