
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
            children.concat([_c('path',{attrs:{"d":"M12 23.242c-5.376 0-9.75-4.374-9.75-9.75H.75a.75.75 0 010-1.5h1.583c.1-.924.295-1.796.581-2.601C1.61 8.635.82 7.769.566 6.814a2.448 2.448 0 01.31-1.987c.628-.943 1.381-1.158 1.901-1.172l.07-.001c.923 0 1.871.582 2.889 1.777.151-.116.304-.224.458-.324-.232-.411-.214-.836-.2-1.141.003-.079.006-.15.006-.224 0-1.443 1.688-2.554 4.405-2.9a12.676 12.676 0 013.187-.001C16.312 1.188 18 2.3 18 3.742c0 .069.003.137.006.202.014.322.032.751-.2 1.162.154.101.307.209.458.324 1.02-1.195 1.971-1.777 2.902-1.777l.056.001c.521.015 1.274.23 1.902 1.172.18.271.572 1.006.31 1.987-.254.955-1.044 1.822-2.349 2.578.286.805.481 1.677.581 2.601h1.583a.75.75 0 010 1.5h-1.5c.001 5.376-4.373 9.75-9.749 9.75zM3.755 13.22a8.276 8.276 0 00-.005.272c0 4.549 3.701 8.25 8.25 8.25s8.25-3.701 8.25-8.25c0-.092-.002-.182-.005-.272A22.394 22.394 0 0012 11.243a22.394 22.394 0 00-8.245 1.977zm8.24-10.978c-.471 0-.94.03-1.4.088-1.993.254-3.095.996-3.095 1.412 0 .099-.004.195-.008.288-.017.383-.017.383.308.525a.752.752 0 01.013 1.369c-2.087.958-3.458 2.931-3.904 5.595a23.892 23.892 0 018.058-1.776h.067c2.785.124 5.493.721 8.058 1.776-.447-2.665-1.817-4.638-3.904-5.595a.751.751 0 01.012-1.369c.324-.141.324-.141.308-.524-.004-.1-.008-.193-.008-.289 0-.416-1.103-1.158-3.096-1.413-.41-.051-.858-.079-1.409-.087zm7.373 4.206c.422.47.792.994 1.104 1.563 1.123-.683 1.43-1.276 1.512-1.583a.945.945 0 00-.109-.77c-.219-.328-.452-.497-.695-.504h-.017c-.27-.001-.852.175-1.795 1.294zM2.815 5.154c-.239.006-.472.176-.691.504a.941.941 0 00-.109.769c.082.307.389.9 1.512 1.583a8.376 8.376 0 011.105-1.562c-.944-1.119-1.531-1.294-1.806-1.294v-.375l-.011.375z"}}),_c('path',{attrs:{"d":"M10.125 5.242a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012zM13.875 5.242a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.774.774 0 010 .259c-.061.513-.47.923-.983.983a.717.717 0 01-.131.012zM11.25 8.242a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    