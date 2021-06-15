
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
            children.concat([_c('path',{attrs:{"d":"M6.002 24a.752.752 0 01-.53-1.281l3.75-3.75a.744.744 0 01.53-.22.752.752 0 01.53 1.281l-3.75 3.75a.743.743 0 01-.53.22zM15.002 24a.752.752 0 01-.53-1.281l3.75-3.75a.744.744 0 01.53-.22.752.752 0 01.53 1.281l-3.75 3.75a.743.743 0 01-.53.22zM12.002 22.5a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22zM3.002 22.5a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22zM15.752 10.5a.75.75 0 01-.75-.75V7.487c-1.5-.912-1.5-2.495-1.5-3.362C13.502 1.85 15.857 0 18.752 0s5.25 1.85 5.25 4.125c0 .867 0 2.45-1.5 3.362V9.75a.75.75 0 01-.75.75h-6zm5.25-1.5V7.032a.75.75 0 01.45-.687c.805-.351 1.05-.87 1.05-2.22 0-1.447-1.682-2.625-3.75-2.625s-3.75 1.178-3.75 2.625c0 1.35.245 1.868 1.05 2.22a.75.75 0 01.45.687V9h1.5V7.5a.75.75 0 011.5 0V9h1.5z"}}),_c('path',{attrs:{"d":"M17.252 5.625a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011zM20.252 5.625a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011zM4.502 17.25a4.5 4.5 0 01-4.059-6.438 4.464 4.464 0 012.561-2.297 4.476 4.476 0 012.592-.12 6.762 6.762 0 014.732-4.436.75.75 0 11.373 1.452 5.272 5.272 0 00-3.85 4.106.75.75 0 01-1.06.537 2.961 2.961 0 00-2.289-.124 2.976 2.976 0 00-1.707 1.531 2.998 2.998 0 001.406 3.995c.398.19.848.292 1.302.294h14.999c1.654 0 3-1.346 3-3a.75.75 0 011.5 0c0 2.481-2.019 4.5-4.5 4.5h-15z"}})])
          )
        }
      }
    