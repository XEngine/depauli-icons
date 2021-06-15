
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
            children.concat([_c('path',{attrs:{"d":"M12.483 10.008a.746.746 0 01-.641-.359 6.594 6.594 0 01-.691-1.552A4.83 4.83 0 017.5 9.75a4.83 4.83 0 01-3.652-1.654 6.632 6.632 0 01-.69 1.552.746.746 0 01-1.031.251.75.75 0 01-.25-1.031 5.148 5.148 0 00.75-2.857V4.986l.002-.04a.7.7 0 01-.004-.071C2.625 2.187 4.812 0 7.5 0s4.875 2.187 4.875 4.875c0 .025-.001.05-.003.074l.001.037v1a5.172 5.172 0 00.75 2.881.75.75 0 01-.64 1.141zM4.28 5.879a3.373 3.373 0 006.439.004 6.228 6.228 0 01-3.22-1.511A6.242 6.242 0 014.28 5.879zM7.5 2.555c.218 0 .425.095.568.26a4.69 4.69 0 002.768 1.568A3.392 3.392 0 007.5 1.5a3.391 3.391 0 00-3.335 2.879 4.701 4.701 0 002.768-1.565.749.749 0 01.567-.259z"}}),_c('path',{attrs:{"d":"M.75 18a.75.75 0 01-.75-.75c0-4.135 3.365-7.5 7.5-7.5.309.013.588.041.868.085a.75.75 0 01-.118 1.49.765.765 0 01-.116-.009 5.956 5.956 0 00-.667-.068C4.184 11.25 1.5 13.942 1.5 17.25a.75.75 0 01-.75.75zM12.75 24a2.252 2.252 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v9A2.252 2.252 0 0121.75 24h-9zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M14.25 15a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 21a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    