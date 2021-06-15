
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
            children.concat([_c('path',{attrs:{"d":"M12.483 10.008a.746.746 0 01-.641-.359 6.594 6.594 0 01-.691-1.552A4.832 4.832 0 017.499 9.75a4.83 4.83 0 01-3.652-1.654 6.59 6.59 0 01-.69 1.552.746.746 0 01-1.031.251.75.75 0 01-.25-1.031 5.148 5.148 0 00.75-2.857V4.986l.002-.04a.7.7 0 01-.004-.071C2.624 2.187 4.811 0 7.499 0s4.875 2.187 4.875 4.875c0 .025-.001.05-.003.074l.001.037v1a5.172 5.172 0 00.75 2.881.75.75 0 01-.639 1.141zM4.28 5.879a3.372 3.372 0 006.438.004 6.228 6.228 0 01-3.219-1.511A6.246 6.246 0 014.28 5.879zM7.5 2.555c.218 0 .425.095.568.26a4.69 4.69 0 002.768 1.568C10.595 2.759 9.181 1.5 7.499 1.5a3.391 3.391 0 00-3.335 2.879 4.695 4.695 0 002.768-1.565.75.75 0 01.568-.259z"}}),_c('path',{attrs:{"d":"M.749 18a.743.743 0 01-.53-.22.744.744 0 01-.219-.531 7.46 7.46 0 012.204-5.306A7.417 7.417 0 017.471 9.75h.045c.556 0 1.115.064 1.659.188a.738.738 0 01.468.332c.107.17.141.371.096.566a.745.745 0 01-.73.584.752.752 0 01-.17-.02 6.04 6.04 0 00-1.327-.15 5.969 5.969 0 00-4.249 1.755 5.97 5.97 0 00-1.764 4.246.75.75 0 01-.75.749zM23.249 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}})])
          )
        }
      }
    