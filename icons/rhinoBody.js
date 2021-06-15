
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
            children.concat([_c('path',{attrs:{"d":"M11.603 21c-.71 0-1.328-.505-1.471-1.2l-.506-2.55H5.107l-.509 2.544a1.508 1.508 0 01-1.471 1.203H1.492c-.827 0-1.5-.673-1.5-1.5V11.25C-.008 7.865 1.857 6 5.242 6h6.939l2.78-2.78a.755.755 0 01.651-.21.75.75 0 01.55.405c.027.055.625 1.262.73 2.61.707.066 1.689.311 2.93 1.201l1.82-2.426a.749.749 0 01.6-.292c.239 0 .463.109.6.292.888 1.184 2.007 3.927.099 6.05.607 1.372.698 2.827.238 3.937-.451 1.088-1.338 1.713-2.435 1.713a.741.741 0 01-.363-.094 4.076 4.076 0 01-1.849.831 4.458 4.458 0 01-.797.071c-.778 0-1.582-.193-2.398-.575l-.506 3.013A1.493 1.493 0 0113.353 21h-1.75zm-1.361-5.25c.357 0 .666.254.736.604l.625 3.15 1.75-.004.601-3.587a10.862 10.862 0 01-.431-.327.75.75 0 01.938-1.171c1.153.923 2.252 1.39 3.266 1.39.57 0 1.006-.149 1.301-.298l-.949-.633a.75.75 0 01.832-1.248l2.035 1.356c.469-.084.719-.458.848-.769.438-1.057.13-2.973-1.58-4.683a11.728 11.728 0 00-.697-.645l-.01-.007a.54.54 0 01-.05-.045c-1.177-.99-2.047-1.251-2.698-1.314a2.913 2.913 0 01-.737 1.261.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.647-.647.471-1.816.24-2.618l-2.18 2.178a.755.755 0 01-.53.22h-7.25c-2.558 0-3.75 1.192-3.75 3.75v8.247h1.635l.63-3.144a.752.752 0 01.735-.603h5.75zm10.737-7.566c.103.096.2.19.295.285.31.309.593.639.847.984.605-.979.372-2.057.034-2.838l-1.176 1.569z"}}),_c('path',{attrs:{"d":"M17.367 12a.817.817 0 01-.131-.011 1.127 1.127 0 01-.983-.983.796.796 0 010-.26c.06-.513.47-.922.982-.983a.717.717 0 01.262-.001c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.922-.983.983a.699.699 0 01-.13.012z"}})])
          )
        }
      }
    