
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
            children.concat([_c('path',{attrs:{"d":"M12.314 21a.75.75 0 010-1.5h9.437a.75.75 0 00.75-.75V6.866a.753.753 0 00-.372-.652l-7.878-4.596L6.372 6.21a.75.75 0 00-.371.65v5.89a.75.75 0 01-1.5 0V6.862a2.254 2.254 0 011.116-1.948L13.873.102a.747.747 0 01.756 0l8.256 4.816a2.259 2.259 0 011.116 1.95V18.75a2.252 2.252 0 01-2.25 2.25h-9.437zM8.064 21.404a.743.743 0 01-.53-.22c-.608-.608-1.419-.943-2.282-.943s-1.674.335-2.282.943a.744.744 0 01-1.06 0c-.142-.142-.22-.33-.22-.531s.078-.389.22-.53c.891-.891 2.078-1.382 3.343-1.382s2.451.491 3.343 1.382a.75.75 0 01-.532 1.281z"}}),_c('path',{attrs:{"d":"M9.751 18.739a.743.743 0 01-.53-.22c-1.061-1.06-2.47-1.644-3.97-1.644s-2.909.584-3.97 1.644a.744.744 0 01-1.06 0 .752.752 0 010-1.061 7.065 7.065 0 015.03-2.084c1.9 0 3.687.74 5.03 2.084a.752.752 0 01-.53 1.281z"}}),_c('circle',{attrs:{"cx":"5.251","cy":"22.875","r":"1.125"}}),_c('path',{attrs:{"d":"M14.251 10.5a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v3.75c0 .413-.337.75-.75.75z"}}),_c('path',{attrs:{"d":"M14.251 16.497a5.213 5.213 0 01-3.712-1.535c-.992-.991-1.538-2.31-1.538-3.712s.546-2.721 1.538-3.712a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53a3.754 3.754 0 000 5.303 3.725 3.725 0 002.652 1.096 3.725 3.725 0 002.652-1.096 3.754 3.754 0 000-5.303c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0c.991.991 1.538 2.31 1.538 3.712s-.546 2.721-1.538 3.712a5.213 5.213 0 01-3.712 1.535z"}})])
          )
        }
      }
    