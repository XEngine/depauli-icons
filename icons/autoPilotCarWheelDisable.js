
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
            children.concat([_c('path',{attrs:{"d":"M2.051 18.013a.748.748 0 01-.664-.4C-1.698 11.758.554 4.484 6.409 1.398A12.061 12.061 0 0112.008.005c2.087 0 4.157.556 5.985 1.608a.752.752 0 01-.374 1.4.756.756 0 01-.374-.1 10.517 10.517 0 00-5.237-1.408c-1.692 0-3.386.422-4.9 1.219-5.123 2.7-7.094 9.065-4.394 14.189a.75.75 0 01-.663 1.1zM12.002 24.025c-1.934 0-3.87-.482-5.599-1.393a.75.75 0 01.698-1.327A10.55 10.55 0 0012 22.525c1.826 0 3.637-.487 5.237-1.407 5.02-2.889 6.753-9.323 3.864-14.342a.75.75 0 011.301-.748c1.597 2.774 2.016 6.009 1.181 9.108s-2.823 5.685-5.597 7.282a12.025 12.025 0 01-5.984 1.607z"}}),_c('path',{attrs:{"d":"M4.653 16.513a.747.747 0 01-.668-.409 8.964 8.964 0 01-.828-5.718.742.742 0 01.026-.133 8.956 8.956 0 014.733-6.259 9.034 9.034 0 018.178 0 .747.747 0 01.328 1.01.747.747 0 01-1.008.327 7.533 7.533 0 00-6.816 0 7.526 7.526 0 00-3.587 3.982 25.6 25.6 0 016.984-1.05.764.764 0 01.758.742.75.75 0 01-.742.758c-2.53.027-5.031.451-7.439 1.26a7.558 7.558 0 00-.042 1.619 6.627 6.627 0 012.437.258c.192.057.35.186.445.362a.743.743 0 01.058.571.755.755 0 01-.933.503 5.168 5.168 0 00-1.732-.209c.131.447.303.881.515 1.295a.75.75 0 01-.667 1.091zM12.002 21.011a9.054 9.054 0 01-2.315-.305.706.706 0 01-.167-.045 9.027 9.027 0 01-1.608-.629.752.752 0 01-.328-1.009.746.746 0 011.01-.327c.166.084.34.164.522.239a8.888 8.888 0 00-.023-.865.752.752 0 01.752-.806.75.75 0 01.743.695c.034.463.037.94.007 1.421a7.532 7.532 0 002.815-.001c-.183-2.914.829-4.526 1.729-5.373.961-.904 2.257-1.382 3.746-1.382.192 0 .389.008.587.024a7.48 7.48 0 00-.036-1.625 21.094 21.094 0 00-1.618-.484.75.75 0 01.367-1.454c.268.068.539.142.812.223a7.636 7.636 0 00-.314-.703.751.751 0 01.668-1.091c.284 0 .54.157.668.41a8.914 8.914 0 01.848 5.615.693.693 0 01-.037.192 8.952 8.952 0 01-6.341 6.929.736.736 0 01-.178.048c-.76.2-1.538.303-2.309.303zm6.887-6.887c-1.103 0-2.044.337-2.721.973-.883.83-1.321 2.15-1.278 3.836a7.487 7.487 0 004.303-4.801 6.3 6.3 0 00-.304-.008zM.753 24.013a.752.752 0 01-.53-1.281l22.5-22.5a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-22.5 22.5a.74.74 0 01-.53.221z"}})])
          )
        }
      }
    