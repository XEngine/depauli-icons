
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
            children.concat([_c('path',{attrs:{"d":"M18 19.5a.75.75 0 010-1.5h.75v-3H15a.75.75 0 010-1.5h5.25v-12H6a2.252 2.252 0 00-2.25 2.25v10.151a2.973 2.973 0 011.5-.401H9A.75.75 0 019 15H5.25c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5H6a.75.75 0 010 1.5h-.75c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 016 0h14.25c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5v3H21a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M12 24a.744.744 0 01-.267-.05l-.016-.006a.739.739 0 01-.247-.165l-3-3a.75.75 0 111.06-1.059l1.72 1.72V11.25a.75.75 0 011.5 0v10.189l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.415.415 0 01-.044.038.71.71 0 01-.2.125l-.026.01A.747.747 0 0112 24z"}})])
          )
        }
      }
    