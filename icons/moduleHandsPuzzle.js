
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
            children.concat([_c('path',{attrs:{"d":"M11.002 13.515c-.435 0-.843-.171-1.147-.481L4.96 8.139a1.613 1.613 0 01-.021-2.26L6.178 4.64a1.163 1.163 0 01.962-.335c.347.038.66.229.856.523.037.055.08.108.128.156a.933.933 0 00.736.351c.019 0 .038 0 .057-.002a.951.951 0 00.575-1.658 1.224 1.224 0 00-.187-.158 1.188 1.188 0 01-.522-.858c-.04-.354.081-.704.334-.957L10.348.471a1.603 1.603 0 011.133-.466c.433 0 .839.17 1.143.477l.692.692a2.483 2.483 0 011.805-.781c.645 0 1.257.249 1.725.701.477.461.745 1.08.756 1.744a2.469 2.469 0 01-.779 1.846l.695.696a1.61 1.61 0 01.019 2.267L16.21 8.975a1.166 1.166 0 01-.828.343 1.193 1.193 0 01-1.104-.75 1.011 1.011 0 00-.223-.337 1.496 1.496 0 00-.11-.112.945.945 0 00-.63-.24c-.019 0-.038 0-.057.002a.946.946 0 00-.892 1.004.94.94 0 00.317.654l.038.036a1 1 0 00.337.226c.363.147.63.463.715.846.087.391-.029.795-.311 1.08l-1.33 1.324a1.598 1.598 0 01-1.13.464zM6.007 6.931c-.033.035-.031.104.01.145l4.903 4.902c.03.031.062.037.083.037.02 0 .049-.005.075-.031l1.008-1.004a2.466 2.466 0 01-.426-.345 2.423 2.423 0 01-.792-1.662 2.438 2.438 0 01.615-1.772 2.433 2.433 0 011.837-.823 2.44 2.44 0 011.825.823c.115.113.222.248.316.398l1.008-1.009c.037-.037.034-.107-.008-.148L15.069 5.05a.75.75 0 01.346-1.257.917.917 0 00.42-.239.968.968 0 00.268-.692.976.976 0 00-.3-.69.977.977 0 00-1.367.001.907.907 0 00-.23.411.752.752 0 01-1.257.345l-1.389-1.39a.11.11 0 00-.08-.035.106.106 0 00-.075.03l-.968.968c.029.027.058.054.085.082.454.402.747 1.011.785 1.655a2.438 2.438 0 01-.615 1.772 2.433 2.433 0 01-1.833.824 2.445 2.445 0 01-1.83-.823 1.276 1.276 0 01-.05-.052l-.972.971zM8.248 24.001a.75.75 0 01-.75-.75v-3.136a3.735 3.735 0 00-.63-2.084l-1.143-1.714a.676.676 0 00-.579-.347.65.65 0 00-.333.093l-.033.021a.65.65 0 00-.221.808l1.331 2.223c.103.172.133.373.084.568s-.17.358-.342.461a.75.75 0 01-1.029-.258l-1.348-2.25a2.147 2.147 0 01-.254-1.066l-.003-.069v-3.75a.75.75 0 00-1.5 0v5.172c0 .848.292 1.68.822 2.342l2.013 2.517a.745.745 0 01.16.551.753.753 0 01-1.331.385l-2.013-2.517a5.267 5.267 0 01-1.151-3.279V12.75c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v1.821a2.118 2.118 0 011.172-.036 2.14 2.14 0 011.322.98l1.124 1.683c.578.867.883 1.876.882 2.917v3.135a.751.751 0 01-.75.751zM20.248 24.001a.751.751 0 01-.585-1.218l2.014-2.517c.53-.662.822-1.494.822-2.342v-5.172a.75.75 0 00-1.5 0v3.75l-.002.039c.014.364-.064.725-.226 1.048l-.023.043-1.355 2.256a.754.754 0 01-1.029.257.747.747 0 01-.257-1.029l1.335-2.221a.652.652 0 00-.23-.813l-.035-.021a.643.643 0 00-.484-.068.643.643 0 00-.4.296l-1.162 1.744a3.735 3.735 0 00-.631 2.083v3.136a.75.75 0 01-1.5 0v-3.136c0-1.041.305-2.05.883-2.916l1.143-1.714a2.134 2.134 0 011.824-1.014c.221 0 .44.034.65.101v-1.82c0-1.241 1.009-2.25 2.25-2.25S24 11.512 24 12.753v5.172a5.27 5.27 0 01-1.151 3.28l-2.014 2.517a.757.757 0 01-.587.279z"}})])
          )
        }
      }
    