
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
            children.concat([_c('path',{attrs:{"d":"M22.565 5.592c-1.368 0-2.7-.453-3.786-1.281a5.285 5.285 0 01-3.402 1.236 5.277 5.277 0 01-3.378-1.212 5.284 5.284 0 01-3.372 1.212 5.274 5.274 0 01-3.406-1.236A6.246 6.246 0 01.658 5.543a.75.75 0 01.186-1.488A4.725 4.725 0 004.73 2.759a.751.751 0 011.077.037 3.804 3.804 0 002.82 1.251 3.788 3.788 0 002.817-1.251.751.751 0 011.113.001 3.806 3.806 0 002.821 1.251 3.784 3.784 0 002.816-1.251.753.753 0 01.53-.247l.032-.001a.75.75 0 01.515.21 4.725 4.725 0 003.887 1.296.75.75 0 01.185 1.488c-.258.033-.52.049-.778.049zM13.053 21.001c-3.124 0-4.912-1.123-7.362-3.48-.287.292-.587.599-.902.923-.58.596-1.226 1.26-1.93 1.964a.744.744 0 01-1.06 0 .752.752 0 010-1.061c.701-.701 1.346-1.364 1.915-1.948.322-.331.623-.64.911-.933-.316-.319-.647-.656-.996-1.011l-.041-.042c-.559-.57-1.167-1.19-1.839-1.862a.752.752 0 01.53-1.281c.2 0 .389.078.53.22.673.673 1.283 1.295 1.844 1.867.37.378.711.725 1.033 1.049 2.419-2.342 4.201-3.459 7.365-3.459a9.54 9.54 0 017.816 4.098c.177.256.177.6 0 .855a9.523 9.523 0 01-7.814 4.101c.001 0 .001 0 0 0zm-6.299-4.538c2.221 2.138 3.654 3.038 6.299 3.038a8.068 8.068 0 006.266-3.026 8.067 8.067 0 00-6.267-3.026c-2.663 0-4.147.933-6.298 3.014z"}}),_c('path',{attrs:{"d":"M14.625 16.801a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.509.466-.918.974-.982a.742.742 0 01.139-.013c.62 0 1.125.505 1.125 1.125 0 .573-.427 1.048-.995 1.115a.899.899 0 01-.129.01zM21.375 13.801a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.509.466-.918.974-.982a.742.742 0 01.139-.013c.62 0 1.125.505 1.125 1.125 0 .573-.427 1.048-.995 1.115a.899.899 0 01-.129.01zM19.875 9.301a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.983.699.699 0 01-.001-.26c.06-.509.466-.918.974-.982a.742.742 0 01.139-.013A1.125 1.125 0 0121 8.175c0 .572-.426 1.048-.994 1.115a.817.817 0 01-.131.011z"}})])
          )
        }
      }
    