
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
            children.concat([_c('path',{attrs:{"d":"M9.5 23.25a.75.75 0 01-.75-.75v-1.542a6.663 6.663 0 01-1.954-.524l-.771 1.336A.754.754 0 015 22.044a.75.75 0 01-.274-1.024l.773-1.339a6.75 6.75 0 01-1.43-1.429l-1.339.772a.748.748 0 01-1.025-.274.75.75 0 01.275-1.024l1.337-.772A6.665 6.665 0 012.792 15H1.25a.75.75 0 010-1.5h1.542a6.665 6.665 0 01.525-1.954l-1.337-.771a.752.752 0 01-.275-1.025.754.754 0 011.024-.275l1.339.773a6.723 6.723 0 011.429-1.429L4.725 7.48a.752.752 0 01.65-1.125c.267 0 .516.144.65.375l.772 1.337a6.657 6.657 0 011.954-.525V6a.75.75 0 011.499 0v1.542a6.665 6.665 0 011.954.525l.772-1.337A.752.752 0 0114 6.455a.752.752 0 01.275 1.025l-.772 1.339a6.705 6.705 0 011.429 1.43l1.339-.773a.752.752 0 011.025.275.75.75 0 01-.274 1.024l-1.337.772c.274.623.45 1.277.524 1.954h1.542A.75.75 0 1117.75 15h-1.542a6.655 6.655 0 01-.524 1.954l1.337.772a.75.75 0 01-.751 1.298l-1.338-.772a6.723 6.723 0 01-1.429 1.429l.772 1.339a.75.75 0 01-1.299.75l-.772-1.337a6.624 6.624 0 01-1.954.524V22.5a.75.75 0 01-.75.75zM9.5 9a5.256 5.256 0 00-5.25 5.25A5.256 5.256 0 009.5 19.5a5.256 5.256 0 005.25-5.25A5.256 5.256 0 009.5 9z"}}),_c('path',{attrs:{"d":"M11.75 13.875a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.061.922.47.982.983a.808.808 0 010 .262 1.126 1.126 0 01-1.113.992zM8 13.125a.796.796 0 01-.13-.011 1.127 1.127 0 01-.983-.982.737.737 0 010-.263c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.699.699 0 01-.13.012zM8.75 17.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM19.25 9.75A.75.75 0 0118.5 9v-.849c-.27-.07-.53-.178-.771-.32l-.601.601a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.601-.601A2.975 2.975 0 0116.348 6H15.5a.75.75 0 010-1.5h.848c.07-.27.178-.53.32-.771l-.601-.601c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.601.601c.241-.142.501-.25.771-.32V1.5A.75.75 0 0120 1.5v.849c.27.07.53.178.771.32l.601-.601a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-.601.601c.142.241.25.501.32.771H23A.75.75 0 0123 6h-.848c-.07.27-.178.53-.32.771l.601.601c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-.601-.601c-.242.143-.502.25-.772.32V9a.75.75 0 01-.75.75zm0-6c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    