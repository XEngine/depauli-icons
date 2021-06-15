
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
            children.concat([_c('path',{attrs:{"d":"M15.751 14.25a2.252 2.252 0 01-2.25-2.25V7.5c0-.96.615-1.808 1.5-2.121V4.5c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879a2.26 2.26 0 011.5 2.121V12a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75V12c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-6zm5.25-1.5V4.5c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25v.75h4.5z"}}),_c('circle',{attrs:{"cx":"18.751","cy":"9.775","r":"1.125"}}),_c('path',{attrs:{"d":"M14.175 21.135a2.238 2.238 0 01-1.591-.658l-7.425-7.425a2.253 2.253 0 010-3.182l3.182-3.182c.425-.424.99-.658 1.592-.658.601 0 1.166.233 1.59.657a.375.375 0 010 .53l-.53.531a.372.372 0 01-.53 0 .748.748 0 00-1.061 0L6.22 10.931a.75.75 0 000 1.06l7.425 7.425c.141.141.33.219.53.219s.389-.078.53-.219l3.182-3.182a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.182 3.182a2.23 2.23 0 01-1.59.658z"}}),_c('path',{attrs:{"d":"M1.501 23.25a.75.75 0 010-1.5h2.854C1.725 19.515.117 16.235.001 12.775a12.007 12.007 0 013.862-8.827.747.747 0 011.06.044c.28.304.26.78-.044 1.06a10.48 10.48 0 00-3.378 7.698 10.774 10.774 0 004.5 8.389V18a.75.75 0 011.5 0v4.5a.442.442 0 01-.003.049c-.001.022-.004.043-.007.066-.004.025-.009.047-.014.069a.779.779 0 01-.172.321l-.031.033a.718.718 0 01-.13.1l-.043.024a.765.765 0 01-.351.088H1.501z"}})])
          )
        }
      }
    