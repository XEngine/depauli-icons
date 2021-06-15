
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
            children.concat([_c('path',{attrs:{"d":"M9.75 14.25A.75.75 0 019 13.5v-.353a2.98 2.98 0 01-1.705-1.099.745.745 0 01-.146-.555.745.745 0 01.742-.649c.236 0 .454.108.597.296.276.364.716.581 1.176.581l.056-.001c.774 0 1.342-.422 1.342-.798 0-.376-.562-.797-1.313-.797-1.551 0-2.812-1.031-2.812-2.298 0-1.052.849-1.943 2.062-2.213V5.25a.75.75 0 011.501 0v.355a2.982 2.982 0 011.705 1.096.75.75 0 11-1.193.908 1.489 1.489 0 00-1.177-.581l-.056.002c-.773 0-1.341.421-1.341.797 0 .377.561.798 1.312.798 1.551 0 2.813 1.03 2.813 2.297 0 1.052-.849 1.943-2.063 2.213v.365a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M23.25 24a.743.743 0 01-.53-.22l-6.524-6.525a9.771 9.771 0 01-6.384 2.368C4.402 19.624 0 15.222 0 9.812S4.402 0 9.812 0s9.812 4.402 9.812 9.812c0 2.35-.838 4.603-2.367 6.383l6.524 6.525a.744.744 0 010 1.06.75.75 0 01-.531.22zM9.812 1.5C5.229 1.5 1.5 5.229 1.5 9.812s3.729 8.312 8.312 8.312 8.312-3.729 8.312-8.312S14.395 1.5 9.812 1.5z"}})])
          )
        }
      }
    