
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
            children.concat([_c('path',{attrs:{"d":"M5.313 9.751a.75.75 0 01-.75-.75v-.349a2.983 2.983 0 01-1.706-1.097.751.751 0 011.193-.909c.277.364.713.581 1.165.581h.032a.473.473 0 01.107-.002c.75-.021 1.27-.434 1.27-.796 0-.378-.561-.8-1.312-.8-1.55-.002-2.812-1.033-2.812-2.3 0-1.052.85-1.943 2.063-2.213V.751a.75.75 0 011.5 0v.356a2.987 2.987 0 011.704 1.096.751.751 0 01-.596 1.204.745.745 0 01-.597-.296 1.48 1.48 0 00-1.172-.581l-.059.001C4.568 2.532 4 2.953 4 3.329c0 .377.562.798 1.313.798 1.551 0 2.812 1.032 2.812 2.3 0 1.052-.849 1.944-2.062 2.214v.36a.75.75 0 01-.75.75zM18.892 9.75a.75.75 0 01-.75-.75v-.353a2.98 2.98 0 01-1.705-1.099.751.751 0 01.597-1.204c.236 0 .454.108.597.296.281.37.708.581 1.172.581l.06-.001c.775 0 1.343-.422 1.343-.798 0-.376-.562-.797-1.313-.797-1.551 0-2.812-1.031-2.812-2.298 0-1.052.849-1.943 2.062-2.213V.75a.75.75 0 011.5 0v.354a2.985 2.985 0 011.705 1.097.747.747 0 01-.597 1.204.744.744 0 01-.597-.296 1.476 1.476 0 00-1.167-.581l-.063.001c-.776.001-1.344.422-1.344.798 0 .377.561.798 1.312.798 1.551 0 2.813 1.03 2.813 2.297 0 1.052-.85 1.943-2.063 2.213V9a.75.75 0 01-.75.75zM10.554 5.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM18.072 24a.755.755 0 01-.674-.42 5.913 5.913 0 00-3.415-3.012 5.965 5.965 0 00-1.934-.324c-.907 0-1.785.205-2.611.609A5.98 5.98 0 006.71 23.58a.745.745 0 01-1.003.344.741.741 0 01-.38-.431.745.745 0 01.036-.573 7.491 7.491 0 013.415-3.415 7.381 7.381 0 013.27-.763c.82 0 1.635.137 2.421.406a7.4 7.4 0 014.276 3.772c.088.18.101.383.036.573a.745.745 0 01-.709.507z"}}),_c('path',{attrs:{"d":"M12.054 18.75a4.88 4.88 0 01-4.875-4.875c0-.841.222-1.673.642-2.409.014-.029.029-.049.037-.061A4.894 4.894 0 0112.054 9c2.383 0 4.447 1.773 4.812 4.128a.72.72 0 01.025.17c.025.211.038.4.038.577a4.88 4.88 0 01-4.875 4.875zm-3.269-5.714a3.379 3.379 0 003.269 4.214 3.38 3.38 0 003.339-2.885 7.633 7.633 0 01-6.608-1.329zm.711-1.356a6.103 6.103 0 003.951 1.435c.621 0 1.231-.093 1.817-.277a3.395 3.395 0 00-3.21-2.338c-.985 0-1.919.436-2.558 1.18z"}})])
          )
        }
      }
    