
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.5A3.768 3.768 0 010 18.752V15a.75.75 0 01.75-.75A2.252 2.252 0 003 12 2.252 2.252 0 00.75 9.75.75.75 0 010 9V5.25A3.768 3.768 0 013.748 1.5H20.25A3.768 3.768 0 0124 5.248V9a.751.751 0 01-.748.75A2.264 2.264 0 0021 12.001a2.265 2.265 0 002.252 2.249A.751.751 0 0124 15v3.75a3.768 3.768 0 01-3.748 3.75H3.75zM1.5 18.75A2.264 2.264 0 003.752 21H20.25a2.264 2.264 0 002.25-2.252v-3.075a3.759 3.759 0 01-3-3.671 3.76 3.76 0 013-3.675V5.25A2.264 2.264 0 0020.248 3H3.75A2.264 2.264 0 001.5 5.252v3.073c1.732.35 3 1.875 3 3.675s-1.268 3.324-3 3.675v3.075z"}}),_c('path',{attrs:{"d":"M13.5 19.5a.75.75 0 01-.75-.75V18h-1.5v.75a.75.75 0 01-1.5 0v-4.5A2.252 2.252 0 0112 12a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-.75.75zm-.75-3v-2.25a.75.75 0 00-1.5 0v2.25h1.5zM17.25 19.5a.75.75 0 01-.75-.75v-2.379A2.258 2.258 0 0115 14.25v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 011.5 0v1.5c0 .96-.615 1.808-1.5 2.121v2.379a.75.75 0 01-.75.75zM5.25 19.5a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75c2.445 0 3.724 1.899 3.724 3.774 0 2.56-1.93 3.726-3.724 3.726zM6 17.901c1.079-.312 1.474-1.303 1.474-2.126 0-.897-.459-1.855-1.474-2.168v4.294zM12.586 10.439a.745.745 0 01-.682-.439.747.747 0 01-.02-.574l1.282-3.425L11.25 6a.75.75 0 010-1.5h1.918c.404.002.781.16 1.063.445a1.493 1.493 0 01.34 1.581l-1.282 3.426a.756.756 0 01-.703.487z"}})])
          )
        }
      }
    