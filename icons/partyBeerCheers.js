
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
            children.concat([_c('path',{attrs:{"d":"M21 24a2.253 2.253 0 01-2.219-1.88l-3.917 1.662c-.27.137-.62.218-.964.218H7.705a2.248 2.248 0 01-2.214-1.848l-.954-5.25a2.245 2.245 0 01.622-1.992c.24-.24.526-.42.841-.531V8.852c0-1.033.303-2.034.876-2.893A3.7 3.7 0 007.5 3.9V1.5c-.001-.4.155-.776.438-1.06a1.49 1.49 0 011.06-.441H10.5c.827 0 1.5.673 1.5 1.5V3.9a3.7 3.7 0 00.624 2.059c.573.859.876 1.86.876 2.893v2.402a3.442 3.442 0 012.921 1.91 1.954 1.954 0 001.756 1.085h.573A2.253 2.253 0 0121 12h2.25a.75.75 0 010 1.5H21a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h2.25a.75.75 0 010 1.5H21zM6.75 15.75c-.2 0-.388.078-.53.22a.74.74 0 00-.207.665l.954 5.25a.75.75 0 00.738.615H13.9a.754.754 0 00.336-.079l4.514-1.917V15.75h-.573a3.446 3.446 0 01-3.098-1.915 1.953 1.953 0 00-1.579-1.078v.743a2.252 2.252 0 01-2.25 2.25h-4.5zm4.5-1.5a.75.75 0 00.75-.75V9.75H7.5v4.5h3.75zm.699-6a3.711 3.711 0 00-.573-1.459 5.189 5.189 0 01-.876-2.89V1.499H8.999L9 3.9a5.192 5.192 0 01-.876 2.891c-.293.44-.488.938-.573 1.459h4.398zM18.75 6a.75.75 0 01-.75-.75V4.5h-.75a.75.75 0 010-1.5H18v-.75a.75.75 0 011.5 0V3h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zM2.25 14.25a.75.75 0 01-.75-.75v-.75H.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H3v.75a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M18.038 9.375a.817.817 0 01-.131-.011 1.127 1.127 0 01-.983-.983.796.796 0 010-.26c.06-.513.47-.923.983-.983a.717.717 0 01.262 0c.513.06.922.47.982.983a.698.698 0 010 .26c-.06.513-.469.923-.982.983a.817.817 0 01-.131.011zM2.625 2.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    