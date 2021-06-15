
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
            children.concat([_c('path',{attrs:{"d":"M12.75 24a3.73 3.73 0 01-3.357-2.075 3.723 3.723 0 01-.2-2.863 3.726 3.726 0 011.88-2.168.747.747 0 011.006.336c.09.179.104.383.04.573s-.197.344-.376.433a2.253 2.253 0 00-1.008 3.019 2.237 2.237 0 002.013 1.245H19.5a2.252 2.252 0 00-2.25-2.25.75.75 0 01-.75-.75v-3H15a.75.75 0 010-1.5h5.905A2.999 2.999 0 0018 12.75h-3a.75.75 0 010-1.5h1.5A2.222 2.222 0 0118.679 9h.061a3.743 3.743 0 003.005-1.5H18.75c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h3.672a3.613 3.613 0 00.058-1.143 3.889 3.889 0 00-3.842-3.358l-.082.001H12.75A5.256 5.256 0 007.5 6.75v4.5a6.713 6.713 0 01-1.892 4.68.66.66 0 01-.117.119l-.005.004a6.736 6.736 0 01-3.939 1.899A5.262 5.262 0 006.75 22.5a.75.75 0 010 1.5A6.758 6.758 0 010 17.25a.75.75 0 01.75-.75c1.18 0 2.318-.397 3.241-1.124l-1.655-2.068a1.501 1.501 0 01.695-2.36l2.326-.776-2.24-2.242a1.5 1.5 0 01.229-2.312l3.699-2.472A6.714 6.714 0 0112.75 0h5.791l.093-.001c2.685 0 4.979 2.012 5.335 4.68a5.195 5.195 0 01-.295 2.38 5.267 5.267 0 01-4.922 3.441h-.067a.717.717 0 00-.685.736v.014a4.5 4.5 0 014.358 3.375c.1.388.043.792-.161 1.137a1.493 1.493 0 01-1.292.737H18v2.325c1.732.35 3 1.875 3 3.675 0 .827-.673 1.5-1.5 1.5h-6.75zM3.507 12.371l1.527 1.907a5.257 5.257 0 00.958-2.736l-2.485.829zm.671-5.505L6 8.691V6.75c0-.393.034-.784.102-1.17L4.178 6.866z"}}),_c('path',{attrs:{"d":"M13.124 5.252a1.122 1.122 0 01-1.118-1.005l-.001-.019a1.114 1.114 0 01.244-.808c.189-.234.457-.381.756-.413h.003a1.13 1.13 0 011.206.852c.016.05.027.099.032.148a1.121 1.121 0 01-.862 1.209.934.934 0 01-.26.036z"}})])
          )
        }
      }
    