
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
            children.concat([_c('path',{attrs:{"d":"M4.502 24a2.235 2.235 0 01-1.591-.659 2.24 2.24 0 01-.422-2.598.695.695 0 01.061-.101l.452-.633V3.99l-.453-.633a.767.767 0 01-.06-.099A2.254 2.254 0 014.501 0h15.001c.601 0 1.166.234 1.591.659a2.253 2.253 0 01.421 2.598.75.75 0 01-.062.102l-.45.631v16.02l.452.633a.797.797 0 01.061.101c.269.538.312 1.148.122 1.718-.19.57-.59 1.032-1.128 1.301a2.269 2.269 0 01-1.007.237h-15zm-.692-2.541a.75.75 0 00.691 1.041h15a.754.754 0 00.712-.513.745.745 0 00-.02-.528l-.552-.773a.743.743 0 01-.14-.436V3.75c0-.157.048-.308.14-.436l.552-.773a.75.75 0 00-.691-1.041H4.501a.747.747 0 00-.335.079.756.756 0 00-.356.962l.552.773a.75.75 0 01.14.436v16.5a.749.749 0 01-.139.436l-.553.773z"}}),_c('path',{attrs:{"d":"M12.002 21c-1.654 0-3-1.346-3-3V9.75h-.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-.75V18c0 1.654-1.346 3-3 3zm-1.5-3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-4.5h-3V18zm3-6V9.75h-3V12h3zM13.127 7.5a.817.817 0 01-.131-.011 1.127 1.127 0 01-.983-.983.796.796 0 010-.26c.06-.513.47-.923.983-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011zM9.377 5.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    