
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
            children.concat([_c('path',{attrs:{"d":"M.749 24a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h5.25v-5.25a.75.75 0 01.75-.75h5.25V5.25a.75.75 0 01.75-.75h5.25V.75a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-5.25v5.25a.75.75 0 01-.75.75h-5.25v5.25a.75.75 0 01-.75.75h-5.25v5.25a.75.75 0 01-.75.75zM12.749 24a.767.767 0 01-.258-.046l-.017-.006a.763.763 0 01-.419-.412l-.01-.026a.733.733 0 01-.047-.259v-6a.75.75 0 011.5 0v4.189l9.22-9.219a.744.744 0 011.06 0 .752.752 0 010 1.061L14.56 22.5h4.189a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    