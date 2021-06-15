
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
            children.concat([_c('path',{attrs:{"d":"M19.875 23.999a4.14 4.14 0 01-3.969-3h-1.062a4.14 4.14 0 01-3.969 3 4.13 4.13 0 01-4.125-4.125c0-1.553.875-2.968 2.25-3.672v-2.703a2.252 2.252 0 012.25-2.25h.901l.759-3.339L2.884 1.62a.92.92 0 00-1.196.247.924.924 0 00.102 1.23l7.59 6.645a.743.743 0 01.254.515.747.747 0 01-.748.8.749.749 0 01-.494-.186L3.75 6.807v4.354l1.835.918a.75.75 0 01-.671 1.342l-1.164-.584v2.073l1.835.918a.75.75 0 01-.671 1.342l-1.164-.583v2.073l1.835.918a.75.75 0 01-.671 1.342l-1.164-.583v2.911a.75.75 0 01-1.5 0v-3.661L.415 18.67a.75.75 0 01.671-1.342l1.164.582v-2.073L.415 14.92a.75.75 0 01.671-1.342l1.164.582v-2.073L.415 11.17a.75.75 0 01.671-1.342l1.164.582V5.493L.78 4.206A2.433 2.433 0 01.491.962a2.405 2.405 0 011.935-.964c.436 0 .865.118 1.241.343l9.594 6.02.016-.072a2.247 2.247 0 012.202-1.79h3.27a2.252 2.252 0 012.25 2.25v4.5h.75a2.252 2.252 0 012.25 2.25v6.375a4.128 4.128 0 01-4.124 4.125zm0-6.75c-1.448 0-2.625 1.177-2.625 2.625s1.177 2.625 2.625 2.625 2.625-1.177 2.625-2.625-1.177-2.625-2.625-2.625zm-9 0c-1.447 0-2.625 1.177-2.625 2.625s1.178 2.625 2.625 2.625c1.448 0 2.625-1.177 2.625-2.625s-1.177-2.625-2.625-2.625zm4.892 2.25a4.13 4.13 0 014.108-3.75c.976 0 1.894.337 2.625.947v-3.197a.75.75 0 00-.75-.75h-10.5a.75.75 0 00-.75.75v2.267a4.13 4.13 0 014.483 3.733h.784zm3.733-8.25v-4.5a.75.75 0 00-.75-.75h-3.27a.753.753 0 00-.736.603l-1.055 4.647H19.5z"}}),_c('path',{attrs:{"d":"M10.875 20.999a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.699.699 0 01.001.261c-.06.513-.47.922-.983.982a.71.71 0 01-.131.012zM19.875 20.999a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0 1.126 1.126 0 01.982 1.244c-.06.513-.47.923-.983.983a.808.808 0 01-.131.011z"}})])
          )
        }
      }
    