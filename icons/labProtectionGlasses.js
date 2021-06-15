
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
            children.concat([_c('path',{attrs:{"d":"M17.668 22.497c-.317 0-.629-.031-.927-.094-2.024-.422-3.083-2.16-3.856-3.429-.226-.372-.63-1.035-.852-1.198-.189.183-.544.735-.724 1.016-.843 1.311-1.996 3.105-4.16 3.53a4.9 4.9 0 01-.935.09c-1.503 0-3.166-.655-5.084-2.001A2.694 2.694 0 010 18.19v-6.855c0-.027.002-.053.004-.079v-.008a1.737 1.737 0 01.827-1.391l9.447-5.282-2.162-1.421a1.179 1.179 0 00-.601-.163c-.352 0-.687.155-.918.425l-1.188 1.39a.75.75 0 11-1.14-.974L5.458 2.44a2.704 2.704 0 013.459-.554l2.837 1.865 3.351-1.874c.409-.248.89-.383 1.38-.383.79 0 1.539.346 2.056.949l1.189 1.388c.13.152.194.346.178.546a.75.75 0 01-1.318.43l-1.189-1.388a1.204 1.204 0 00-1.542-.247L2.758 10.498h18.374L14.448 7.08a.742.742 0 01-.372-.437.748.748 0 011.056-.898l7.99 4.086a1.744 1.744 0 01.877 1.418v.009c-.001.031.001.054.001.077v6.863a2.69 2.69 0 01-1.125 2.203c-2.008 1.411-3.71 2.096-5.207 2.096zM12 16.248c.981 0 1.556.945 2.166 1.946.666 1.093 1.494 2.452 2.881 2.741.19.04.394.06.604.06 1.174 0 2.64-.611 4.357-1.817.31-.222.495-.587.492-.973v-3.206h-21v3.2a1.2 1.2 0 00.498.99c1.628 1.142 3.053 1.722 4.235 1.722.217 0 .428-.02.627-.059 1.537-.302 2.452-1.725 3.188-2.869.598-.931 1.114-1.735 1.952-1.735zm10.5-2.75v-1.5h-21v1.5h21z"}})])
          )
        }
      }
    