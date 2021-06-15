
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
            children.concat([_c('path',{attrs:{"d":"M2.5 24c-.965 0-1.75-.785-1.75-1.75v-7c0-.965.785-1.75 1.75-1.75h5.261A6.739 6.739 0 015.25 8.25.75.75 0 016 7.5h5.25V3c0-1.654 1.346-3 3-3s3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v4.5H18a.75.75 0 01.75.75 6.739 6.739 0 01-2.511 5.25H21.5c.965 0 1.75.785 1.75 1.75v7c0 .965-.785 1.75-1.75 1.75h-19zm19-1.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25h-8.75v7.5h8.75zM2.5 15a.25.25 0 00-.25.25v7c0 .138.112.25.25.25h8.75V15H2.5zm4.303-6A5.264 5.264 0 0012 13.5 5.263 5.263 0 0017.197 9H6.803z"}}),_c('path',{attrs:{"d":"M9 20.25a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM15 20.25a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    