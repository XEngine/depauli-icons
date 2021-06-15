
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h4.5V21H2.25A2.252 2.252 0 010 18.75V5.25A2.252 2.252 0 012.25 3h9a.75.75 0 010 1.5h-1.189l-3 3 7.5 7.5H21a.75.75 0 011.5 0v3.75A2.252 2.252 0 0120.25 21H12v1.5h3.75a.75.75 0 010 1.5H6zm-4.5-5.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V16.5H1.5v2.25zM12.439 15L6 8.561l-4.5 4.5V15h10.939zM2.25 4.5a.75.75 0 00-.75.75v5.689L7.939 4.5H2.25zM18.75 6.375a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011z"}}),_c('path',{attrs:{"d":"M18.749 13.426a1.489 1.489 0 01-1.182-.577C15.712 10.477 13.5 7.233 13.5 5.25 13.5 2.355 15.855 0 18.75 0S24 2.355 24 5.25c0 1.98-2.212 5.226-4.068 7.6a1.491 1.491 0 01-1.183.576zM18.75 1.5A3.754 3.754 0 0015 5.25c0 1.161 1.437 3.719 3.75 6.676 2.313-2.959 3.75-5.517 3.75-6.676a3.754 3.754 0 00-3.75-3.75zM11.25 19.125a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.922.47.983.983a.717.717 0 010 .262c-.061.513-.47.922-.983.982a.796.796 0 01-.13.011z"}})])
          )
        }
      }
    