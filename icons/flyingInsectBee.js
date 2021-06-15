
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
            children.concat([_c('path',{attrs:{"d":"M15.675 6a.752.752 0 01-.734-.6 2.996 2.996 0 00-2.948-2.401 2.98 2.98 0 00-1.647.498A2.98 2.98 0 009.06 5.4a.753.753 0 01-.736.6.744.744 0 01-.625-.337.746.746 0 01-.109-.563 4.473 4.473 0 012.134-2.976C9.648 1.907 9.359 1.5 8.25 1.5a.75.75 0 010-1.5c1.928 0 2.615.969 2.858 1.592a4.442 4.442 0 011.786-.002C13.136.968 13.824 0 15.75 0a.75.75 0 010 1.5c-1.093 0-1.39.397-1.47.622A4.473 4.473 0 0116.41 5.1a.75.75 0 01-.735.9z"}}),_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-.885C9.267 21.721 6 18.702 6 13.5c0-.273.011-.552.032-.83l.004-.045c.009-.115.021-.229.034-.342-.995.3-2.022.457-3.062.468C1.032 12.75 0 11.052 0 9.375c0-.851.254-1.653.716-2.259C1.272 6.386 2.062 6 3 6c1.868.02 3.704.518 5.332 1.443A5.318 5.318 0 0112 6c1.381 0 2.643.498 3.667 1.443A11.03 11.03 0 0120.992 6C22.968 6 24 7.698 24 9.375c0 .851-.254 1.653-.716 2.259-.556.73-1.346 1.116-2.284 1.116a10.95 10.95 0 01-3.07-.468c.013.114.024.228.034.342l.005.057c.02.266.031.546.031.819 0 5.203-3.267 8.221-5.25 8.865v.885A.75.75 0 0112 24zm-3.848-7.04C9.223 19.626 11.312 21 12 21s2.777-1.374 3.848-4.04a5.632 5.632 0 00-3.806-1.211L12 15.75l-.041-.001a5.632 5.632 0 00-3.807 1.211zm4.196-2.72c1.403 0 2.788.423 3.957 1.2a9.577 9.577 0 00.183-2.409 5.708 5.708 0 00-4.447-1.782L12 11.25l-.04-.001a5.699 5.699 0 00-4.448 1.783 9.65 9.65 0 00.183 2.408A7.163 7.163 0 0112 14.249c.116-.006.232-.009.348-.009zm5.224-3.671a9.47 9.47 0 003.435.681c.459 0 .814-.172 1.083-.525.26-.341.409-.833.409-1.35 0-.696-.315-1.874-1.498-1.875a9.517 9.517 0 00-4.347 1.111 7.63 7.63 0 01.918 1.958zM2.994 7.5c-.461 0-.816.172-1.085.525-.26.341-.409.833-.409 1.35 0 .696.316 1.875 1.5 1.875a9.454 9.454 0 003.428-.681c.224-.72.532-1.376.917-1.958A9.523 9.523 0 002.994 7.5zm9.357 2.24c1.316 0 2.608.368 3.731 1.05a5.637 5.637 0 00-.996-1.82.753.753 0 01-.165-.182l-.005-.009C14.132 7.942 13.125 7.5 12 7.5s-2.132.442-2.914 1.277a5.615 5.615 0 00-1.167 2.013 7.202 7.202 0 014.082-1.04c.116-.007.233-.01.35-.01z"}})])
          )
        }
      }
    