
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
            children.concat([_c('path',{attrs:{"d":"M8.5 19.75c-.88 0-1.61-.653-1.732-1.5H.75a.75.75 0 010-1.5h6V14.5h-6a.75.75 0 010-1.5h6v-2.25h-6a.75.75 0 010-1.5h6V7h-6a.75.75 0 010-1.5h6.018C6.89 4.653 7.62 4 8.5 4h7c.88 0 1.611.653 1.732 1.5h6.018a.75.75 0 010 1.5h-6v2.25h6a.75.75 0 010 1.5h-6V13h6a.75.75 0 010 1.5h-6v2.25h6a.75.75 0 010 1.5h-6.018a1.753 1.753 0 01-1.732 1.5h-7zm0-14.25a.25.25 0 00-.25.25V18c0 .138.112.25.25.25h7a.25.25 0 00.25-.25V5.75a.25.25 0 00-.25-.25h-7z"}}),_c('path',{attrs:{"d":"M12 16.75a.75.75 0 01-.75-.75v-.353a2.983 2.983 0 01-1.705-1.099.751.751 0 01.597-1.204c.237 0 .454.108.597.296.276.363.716.581 1.175.581l.057-.001c.775 0 1.343-.421 1.343-.797 0-.376-.562-.796-1.313-.796-1.551 0-2.812-1.031-2.812-2.298 0-1.052.849-1.943 2.062-2.213V7.75a.749.749 0 111.499 0v.356a2.976 2.976 0 011.705 1.096.751.751 0 01-1.195.908 1.48 1.48 0 00-1.171-.58h-.059c-.775.001-1.342.422-1.342.798 0 .377.561.798 1.312.798 1.551 0 2.813 1.03 2.813 2.296 0 1.052-.85 1.943-2.063 2.212V16a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    