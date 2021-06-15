
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
            children.concat([_c('path',{attrs:{"d":"M12.482 10.008a.746.746 0 01-.641-.359 6.635 6.635 0 01-.691-1.552A4.83 4.83 0 017.499 9.75a4.83 4.83 0 01-3.652-1.654 6.59 6.59 0 01-.69 1.552.746.746 0 01-1.031.251.75.75 0 01-.25-1.031 5.157 5.157 0 00.75-2.857V4.986l.002-.04a.7.7 0 01-.004-.071C2.624 2.187 4.811 0 7.499 0s4.875 2.187 4.875 4.875a.915.915 0 01-.003.074l.001.037v1a5.172 5.172 0 00.75 2.881.75.75 0 01-.64 1.141zM4.28 5.879a3.372 3.372 0 006.438.004 6.235 6.235 0 01-3.22-1.511A6.239 6.239 0 014.28 5.879zM7.5 2.555c.218 0 .425.095.568.26a4.69 4.69 0 002.768 1.568A3.392 3.392 0 007.499 1.5a3.391 3.391 0 00-3.335 2.879 4.698 4.698 0 002.768-1.565.75.75 0 01.568-.259c-.001 0 0 0 0 0z"}}),_c('path',{attrs:{"d":"M.749 18a.75.75 0 01-.75-.75c0-2.003.78-3.887 2.197-5.303a7.453 7.453 0 015.303-2.196c2.247 0 4.356.994 5.786 2.728a.747.747 0 01-.102 1.056.746.746 0 01-1.056-.102A5.977 5.977 0 007.5 11.25a5.963 5.963 0 00-4.243 1.757A5.961 5.961 0 001.5 17.25a.752.752 0 01-.751.75zM17.249 24a.753.753 0 01-.75-.75V18h-1.875a1.126 1.126 0 01-.857-1.854l5.914-6.885a.746.746 0 01.828-.215c.294.109.49.392.49.704V15h1.875a1.126 1.126 0 01.856 1.854l-5.912 6.885a.748.748 0 01-.569.261zm0-7.5a.75.75 0 01.75.75v3.976l4.059-4.727-1.808.001a.75.75 0 01-.75-.75v-3.976l-4.06 4.727 1.809-.001z"}})])
          )
        }
      }
    