
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
            children.concat([_c('path',{attrs:{"d":"M6.882 19.939a.743.743 0 01-.53-.22L.973 14.341a2.254 2.254 0 01-.007-3.175L11.472.659c.425-.425.99-.659 1.591-.659h5.378a2.252 2.252 0 012.25 2.25v5.379a.75.75 0 01-1.5 0V2.25a.75.75 0 00-.75-.75h-5.378a.755.755 0 00-.531.22L2.038 12.214a.753.753 0 00-.005 1.067l5.379 5.378a.752.752 0 010 1.061.746.746 0 01-.53.219z"}}),_c('circle',{attrs:{"cx":"16.192","cy":"4.501","r":"1.125"}}),_c('path',{attrs:{"d":"M16.942 18.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.01 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M16.944 23.999a2.077 2.077 0 01-1.995-1.482l-.441-1.45a.246.246 0 00-.288-.169l-1.471.341a2.072 2.072 0 01-1.577-.266 2.085 2.085 0 01-.417-3.194l1.028-1.109a.251.251 0 00.001-.341l-1.031-1.112a2.074 2.074 0 01-.558-1.496c.02-.558.255-1.074.664-1.455a2.08 2.08 0 011.883-.51l1.477.343a.257.257 0 00.288-.172l.441-1.45a2.093 2.093 0 011.994-1.482 2.073 2.073 0 011.994 1.49l.441 1.449a.247.247 0 00.288.168l1.471-.342c.154-.035.309-.052.463-.052.969 0 1.826.685 2.039 1.629a2.089 2.089 0 01-.509 1.883L22.1 16.33a.252.252 0 000 .342l1.031 1.112c.379.412.575.946.552 1.503a2.074 2.074 0 01-.673 1.451 2.081 2.081 0 01-1.414.552c-.153 0-.305-.017-.455-.05l-1.479-.343a.244.244 0 00-.285.166l-.44 1.453c-.16.531-.518.969-1.007 1.232a2.082 2.082 0 01-.986.251zm-2.671-4.606c.764 0 1.451.51 1.671 1.24l.441 1.45a.582.582 0 001.113.002l.44-1.453a1.755 1.755 0 012.058-1.194l1.474.342a.583.583 0 00.52-.143.59.59 0 00.035-.833l-1.028-1.109a1.757 1.757 0 010-2.383l1.03-1.11a.59.59 0 00-.428-.992.576.576 0 00-.13.015L20 13.566a1.756 1.756 0 01-2.06-1.194l-.444-1.458a.579.579 0 00-.833-.347.578.578 0 00-.281.345l-.443 1.457a1.768 1.768 0 01-1.677 1.237c-.127 0-.254-.014-.378-.042l-1.478-.344a.586.586 0 00-.712.555.588.588 0 00.158.422l1.031 1.112a1.755 1.755 0 01-.001 2.382l-1.029 1.11a.587.587 0 00.559.977l1.47-.341c.128-.029.26-.044.391-.044z"}})])
          )
        }
      }
    