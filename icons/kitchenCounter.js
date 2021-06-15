
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a.75.75 0 01-.75-.75V12H.75a.75.75 0 010-1.5h9a.75.75 0 000-1.5h-9a.75.75 0 010-1.5H4.5V5.871A2.258 2.258 0 013 3.75v-3A.75.75 0 013.75 0h3a.75.75 0 01.75.75v3c0 .96-.615 1.808-1.5 2.121V7.5h3.75C10.991 7.5 12 8.509 12 9.75S10.991 12 9.75 12H4.5v11.25a.75.75 0 01-.75.75zM4.5 3.75a.75.75 0 001.5 0V1.5H4.5v2.25zM23.25 24a.752.752 0 01-.735-.603L22.035 21h-6.57l-.479 2.397a.752.752 0 01-.885.588.742.742 0 01-.474-.319c-.111-.167-.15-.367-.111-.563l1.321-6.603h-.587a.75.75 0 01-.75-.75v-1.5A2.252 2.252 0 0115.75 12h6A2.252 2.252 0 0124 14.25v1.5a.75.75 0 01-.75.75h-.585l1.321 6.603a.747.747 0 01-.736.897zm-1.515-4.5l-.6-3h-4.771l-.6 3h5.971zM22.5 15v-.75a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75l7.5.75z"}})])
          )
        }
      }
    