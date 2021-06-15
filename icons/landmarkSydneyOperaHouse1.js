
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.749v-4c0-.367.158-.704.423-.937L.175 14.462a1.217 1.217 0 01-.143-.91 1.244 1.244 0 01.786-.898 5.36 5.36 0 012.834-.294c.213.032.424.081.631.145L4 11.453a1.246 1.246 0 011.331-1.578c1.245.138 2.44.492 3.554 1.052.343.159.67.354.979.582L9.446 8.96a1.23 1.23 0 01.205-.923 1.241 1.241 0 011.027-.538c.119 0 .237.017.35.05a11.686 11.686 0 016.142 4.089 8.323 8.323 0 011.528 3.422 8.664 8.664 0 014.22-.35c.199.027.4.112.572.244.266.204.435.499.479.83.042.316-.038.632-.224.891l-1.889 2.983c.386.212.643.621.643 1.094v1.75h.75c.414 0 .75.336.75.75s-.335.748-.749.748H.75zM21 22.5V21l-8.963-.001a.785.785 0 01-.381-.118L8.33 18.75H3v3.75h18zm-.82-3l2.128-3.361a7.2 7.2 0 00-3.892.645l-.004.002a5.26 5.26 0 00-2.346 2.713h4.114zm-5.696 0a6.703 6.703 0 012.801-3.781 6.781 6.781 0 00-1.305-3.169 10.193 10.193 0 00-4.991-3.451l.791 4.808a.702.702 0 01.026.161l.893 5.431h1.785zm-5.935-2.25c.144 0 .284.041.405.119l2.095 1.342-.721-4.387a4.442 4.442 0 00-2.095-2.046 9.022 9.022 0 00-2.688-.862l1.573 5.835h1.431zm-2.986 0l-.754-2.798a2.918 2.918 0 00-1.39-.61 3.936 3.936 0 00-1.804.122l1.852 3.286h2.096zM16.5 7.5a3.764 3.764 0 01-3.609-2.729A3.754 3.754 0 0116.498 0a3.77 3.77 0 013.203 1.797 2.996 2.996 0 011.3-.297c1.655 0 3 1.347 3 3.001a3.003 3.003 0 01-3 2.999H16.5zm-.002-6a2.252 2.252 0 00-2.164 2.863A2.258 2.258 0 0016.499 6H21c.827 0 1.5-.673 1.501-1.5a1.502 1.502 0 00-2.577-1.045.755.755 0 01-.721.206.754.754 0 01-.539-.523A2.259 2.259 0 0016.498 1.5z"}})])
          )
        }
      }
    