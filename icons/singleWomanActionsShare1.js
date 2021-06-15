
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
            children.concat([_c('path',{attrs:{"d":"M23.25 18a.75.75 0 01-.75-.75 5.986 5.986 0 00-2.667-4.988 5.962 5.962 0 00-4.504-.897 5.964 5.964 0 00-3.819 2.551.746.746 0 01-1.04.207.747.747 0 01-.207-1.041 7.45 7.45 0 014.773-3.189 7.451 7.451 0 015.631 1.121A7.487 7.487 0 0124 17.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M21.483 10.008a.756.756 0 01-.641-.36 6.594 6.594 0 01-.691-1.552A4.827 4.827 0 0116.5 9.75a4.83 4.83 0 01-3.652-1.654 6.609 6.609 0 01-.69 1.552.746.746 0 01-1.031.251.75.75 0 01-.25-1.031 5.148 5.148 0 00.75-2.857V4.986l.002-.04a1.083 1.083 0 01-.003-.071C11.625 2.187 13.812 0 16.5 0s4.875 2.187 4.875 4.875a.873.873 0 01-.003.073l.001.037v1a5.172 5.172 0 00.75 2.881.75.75 0 01-.64 1.142zm-8.203-4.13a3.372 3.372 0 006.44.001 6.243 6.243 0 01-3.22-1.511 6.242 6.242 0 01-3.22 1.51zM16.5 2.55c.218 0 .425.095.568.26a4.694 4.694 0 002.768 1.568C19.593 2.756 18.179 1.5 16.5 1.5c-1.678 0-3.092 1.256-3.335 2.878a4.697 4.697 0 002.767-1.568.752.752 0 01.568-.26zM.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6A.75.75 0 016 18h2.118A2.262 2.262 0 006 16.5H1.5V21h13.371z"}})])
          )
        }
      }
    