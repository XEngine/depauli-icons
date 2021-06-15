
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
            children.concat([_c('path',{attrs:{"d":"M.75 19.499a.75.75 0 010-1.5h4.208a2.243 2.243 0 002.22-1.88l.332-1.993a.749.749 0 01.74-.627h4.5a.75.75 0 000-1.5H6c-.262 0-.5-.133-.638-.356s-.15-.496-.033-.73l.587-1.173a.88.88 0 00-.033-.853.879.879 0 00-.759-.431.9.9 0 00-.696.333l-3.097 3.794a.748.748 0 01-1.327-.399.745.745 0 01.165-.55l3.093-3.789a2.407 2.407 0 011.863-.89 2.371 2.371 0 012.044 1.16 2.372 2.372 0 01.089 2.295l-.045.089h5.536a2.252 2.252 0 012.25 2.25 2.252 2.252 0 01-2.25 2.25H8.885l-.228 1.366a3.738 3.738 0 01-3.699 3.134H.75zM23.249 4.498a.743.743 0 01-.53-.22l-2.47-2.47-2.47 2.47a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3-3a.744.744 0 011.06 0l3 3c.142.141.22.33.22.53s-.078.389-.22.53-.33.22-.53.22z"}}),_c('path',{attrs:{"d":"M20.249 19.498a.767.767 0 01-.258-.046l-.017-.006a.748.748 0 01-.256-.167l-3-3a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72V7.059l-1.72 1.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3-3a.75.75 0 01.245-.163l.024-.009a.738.738 0 01.555.012.75.75 0 01.238.16l3 3c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0L21 7.059v9.879l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.74.74 0 01-.245.163l-.026.01a.761.761 0 01-.26.046z"}}),_c('path',{attrs:{"d":"M20.249 23.998a.743.743 0 01-.53-.22l-3-3a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47 2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.744.744 0 01-.53.22z"}})])
          )
        }
      }
    