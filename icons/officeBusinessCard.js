
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
            children.concat([_c('path',{attrs:{"d":"M1.728 22.873A1.732 1.732 0 010 21.158V6.594a1.733 1.733 0 011.727-1.721H3v-.75c0-1.654 1.346-3 3-3s3 1.346 3 3v6.75c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 001.5 0v-6.75c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v.75h.75a.75.75 0 010 1.5H1.728a.228.228 0 00-.228.226v14.554c.001.118.105.22.227.22h20.545a.228.228 0 00.228-.225V6.594a.229.229 0 00-.227-.221H11.25a.75.75 0 010-1.5h11.022c.948 0 1.722.77 1.728 1.716v14.564a1.733 1.733 0 01-1.727 1.72H1.728z"}}),_c('path',{attrs:{"d":"M12 13.123a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5H12zM6.75 17.623a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H6.75z"}})])
          )
        }
      }
    