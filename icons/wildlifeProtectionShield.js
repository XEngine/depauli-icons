
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
            children.concat([_c('path',{attrs:{"d":"M12.211 18.112c-.07 0-.14-.001-.211-.004a5.785 5.785 0 01-5.998-5.529 5.289 5.289 0 01.221-1.516 3.018 3.018 0 01-1.717-2.536 2.975 2.975 0 01.753-2.165 2.974 2.974 0 012.24-1.005 2.99 2.99 0 011.988.757c.348.309.615.689.787 1.113a6.22 6.22 0 013.458 0 2.996 2.996 0 015.77 1.131 2.985 2.985 0 01-1.723 2.705c.145.481.22.976.222 1.478-.142 3.132-2.685 5.571-5.79 5.571zM7.499 6.857l-.09.003c-.398.023-.764.201-1.029.5s-.4.681-.377 1.079c.042.72.592 1.307 1.307 1.396a.751.751 0 01.578 1.079 3.7 3.7 0 00-.388 1.633c.104 2.271 1.987 4.064 4.286 4.064.06 0 .121-.001.182-.004h.064a4.29 4.29 0 004.468-4.098 3.666 3.666 0 00-.39-1.596.749.749 0 01.58-1.079 1.494 1.494 0 00-.182-2.974c-.792 0-1.447.618-1.495 1.406a.75.75 0 01-1.058.638A4.721 4.721 0 0012 8.483c-.679 0-1.337.142-1.955.421a.75.75 0 01-1.057-.64 1.48 1.48 0 00-.499-1.029 1.486 1.486 0 00-.99-.378z"}}),_c('path',{attrs:{"d":"M9.751 13.233a.796.796 0 01-.13-.011 1.127 1.127 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM14.251 13.233a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.984.796.796 0 010-.26c.06-.513.47-.923.983-.983a.717.717 0 01.262 0c.513.06.922.47.982.983a.817.817 0 010 .261c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011z"}}),_c('path',{attrs:{"d":"M12 24.001a3.74 3.74 0 01-1.346-.25l-1.041-.4C4.76 21.484 1.5 16.737 1.5 11.538V3.924A2.239 2.239 0 012.806 1.88 22.305 22.305 0 0111.788 0l.219.001.186-.001c3.115 0 6.14.631 8.989 1.875A2.246 2.246 0 0122.5 3.929v7.609c0 5.199-3.26 9.946-8.113 11.813l-1.041.4a3.74 3.74 0 01-1.346.25zM11.8 1.5a20.84 20.84 0 00-8.382 1.749.732.732 0 00-.418.67v7.619c0 4.583 2.874 8.768 7.151 10.413l1.041.4a2.24 2.24 0 001.616.001l1.041-.4C18.126 20.305 21 16.121 21 11.538V3.924a.742.742 0 00-.43-.68A20.807 20.807 0 0012.194 1.5l-.187.001L11.8 1.5z"}})])
          )
        }
      }
    