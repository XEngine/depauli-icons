
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
            children.concat([_c('path',{attrs:{"d":"M8 23.5a.75.75 0 01-.75-.75V19h-6a1.127 1.127 0 01-.901-1.8L3.5 13h-.75a1.127 1.127 0 01-.901-1.799L5 7h-.021a1.12 1.12 0 01-.797-.336 1.117 1.117 0 01-.111-1.446L7.09.991A1.128 1.128 0 018.92.989l3.022 4.232A1.124 1.124 0 0111.037 7H11l2.457 3.275a.75.75 0 01-.6 1.2.753.753 0 01-.6-.3L9.35 7.3a1.127 1.127 0 01.9-1.8h.052L8.005 2.29 5.713 5.5h.037a1.12 1.12 0 011.113.966c.043.298-.033.594-.213.834L3.5 11.5h.75a1.126 1.126 0 01.9 1.799L2 17.5h6a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M20 23.5a.75.75 0 01-.75-.75V20.5h-4.5v2.25a.75.75 0 01-1.5 0V20.5H11a.75.75 0 010-1.5h.75v-3.75A2.252 2.252 0 0114 13h6a2.252 2.252 0 012.25 2.25V19H23a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75zm.75-4.5v-3.75a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75V19h7.5z"}})])
          )
        }
      }
    