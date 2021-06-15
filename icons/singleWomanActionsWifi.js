
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.752.752 0 01-.75-.75 7.453 7.453 0 012.201-5.304 7.455 7.455 0 015.302-2.194 7.484 7.484 0 012.941.6.745.745 0 01.402.41.75.75 0 01-.99.97 5.96 5.96 0 00-2.349-.48 5.967 5.967 0 00-4.246 1.755A5.961 5.961 0 001.5 17.251.75.75 0 01.75 18z"}}),_c('path',{attrs:{"d":"M12.483 10.008a.746.746 0 01-.641-.359 6.594 6.594 0 01-.691-1.552A4.83 4.83 0 017.5 9.75a4.83 4.83 0 01-3.652-1.654 6.609 6.609 0 01-.69 1.552.746.746 0 01-1.031.251.75.75 0 01-.25-1.031 5.148 5.148 0 00.75-2.857V4.986l.002-.04a.7.7 0 01-.004-.071C2.625 2.187 4.812 0 7.5 0s4.875 2.187 4.875 4.875a.915.915 0 01-.003.074l.001.037v1a5.172 5.172 0 00.75 2.881.75.75 0 01-.64 1.141zM4.28 5.879A3.375 3.375 0 007.5 8.25a3.375 3.375 0 003.219-2.366 6.242 6.242 0 01-3.22-1.513A6.232 6.232 0 014.28 5.879zM7.5 2.555c.218 0 .425.095.568.26a4.7 4.7 0 002.768 1.568A3.39 3.39 0 007.5 1.5a3.391 3.391 0 00-3.335 2.879 4.695 4.695 0 002.768-1.565.749.749 0 01.567-.259z"}}),_c('circle',{attrs:{"cx":"17.25","cy":"22.799","r":"1.125"}}),_c('path',{attrs:{"d":"M11.25 16.372a.747.747 0 01-.746-.829.747.747 0 01.274-.504c1.814-1.467 4.112-2.275 6.472-2.275s4.657.808 6.472 2.275a.747.747 0 01-.472 1.333.749.749 0 01-.471-.167c-1.549-1.252-3.512-1.942-5.529-1.942s-3.979.69-5.528 1.942a.755.755 0 01-.472.167zM20.749 19.988a.749.749 0 01-.471-.167c-.848-.686-1.924-1.064-3.029-1.064s-2.18.378-3.028 1.063a.751.751 0 01-.944-1.166c1.114-.9 2.524-1.396 3.972-1.396s2.858.496 3.972 1.396a.747.747 0 01.111 1.055.746.746 0 01-.583.279z"}})])
          )
        }
      }
    