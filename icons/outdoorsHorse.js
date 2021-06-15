
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
            children.concat([_c('path',{attrs:{"d":"M9.75 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M14.25 23.998a2.252 2.252 0 01-2.25-2.25v-3.75H9.183a2.222 2.222 0 01-.43.374l-.731.488.819 2.052c.223.557.215 1.168-.022 1.721s-.675.98-1.232 1.203a2.253 2.253 0 01-1.722-.021 2.238 2.238 0 01-1.203-1.233l-1.5-3.75a2.264 2.264 0 01.839-2.702l.274-.182-.825-1.099a2.263 2.263 0 01.053-2.767 2.263 2.263 0 00-1.629 1.85l-.378 4.136a.745.745 0 01-.812.679.751.751 0 01-.681-.816l.382-4.174c.265-1.864 1.861-3.256 3.714-3.258H7.5v-3a2.234 2.234 0 01.661-1.591 2.236 2.236 0 011.589-.656 2.248 2.248 0 012.183 1.703c.06.204.474 1.295 2.317 1.295 1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25h-.089a7.535 7.535 0 01-3.234-.73.751.751 0 01.647-1.354 6.024 6.024 0 002.584.583l.082-.001c.422 0 .761-.336.761-.75s-.336-.75-.75-.75c-2.915 0-3.648-2.001-3.765-2.403-.092-.359-.386-.593-.735-.593A.748.748 0 009 7.501v3.749a.75.75 0 01-.75.75H5.69l-.97.969a.754.754 0 00-.07.98l1.3 1.732a.75.75 0 01-.184 1.073l-.932.622a.753.753 0 00-.279.899l1.499 3.749a.745.745 0 00.697.472.75.75 0 00.696-1.029l-1.044-2.616a.753.753 0 01.28-.902l1.237-.825a.738.738 0 00.232-.249.751.751 0 01.651-.377h3.946a.75.75 0 01.75.75v4.5a.75.75 0 001.501 0v-1.609c0-2.012.379-3.98 1.127-5.849l1.927-4.818A.744.744 0 0118.75 9h2.85a.75.75 0 00.712-.513l.183-.551-3.965-1.219A.746.746 0 0118 6V4.994c-.35.438-.683.889-.996 1.348a.749.749 0 01-1.357-.283.746.746 0 01.117-.562 23.464 23.464 0 012.444-3.016A.752.752 0 0119.5 3v2.446l3.494 1.074a1.503 1.503 0 01.924 1.889l-.183.552A2.249 2.249 0 0121.6 10.5h-2.342l-1.739 4.346a14.197 14.197 0 00-1.019 5.292v1.609a2.252 2.252 0 01-2.25 2.251z"}})])
          )
        }
      }
    