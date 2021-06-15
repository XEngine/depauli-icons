
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
            children.concat([_c('path',{attrs:{"d":"M14.625 17.253a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993zM9.375 17.253a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011z"}}),_c('path',{attrs:{"d":"M12.015 24.032c-.508 0-1.02-.052-1.524-.156a7.452 7.452 0 01-4.753-3.219c-.03-.045-.058-.091-.087-.137A9.534 9.534 0 011.5 12.762c.074-3.412 1.969-6.558 4.85-8.259H4.5a.75.75 0 010-1.5h1.939l-1.72-1.72A.748.748 0 014.72.223c.141-.142.33-.22.53-.22s.389.078.53.22L7.869 2.31A2.987 2.987 0 0110.5.753h3c1.116 0 2.113.607 2.632 1.558L18.22.223a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72h1.94a.75.75 0 010 1.5h-1.856c2.883 1.699 4.78 4.839 4.856 8.233a9.553 9.553 0 01-4.141 7.776 7.438 7.438 0 01-2.231 2.279 7.454 7.454 0 01-4.113 1.241zm-5.084-4.295l.059.094a5.993 5.993 0 005.019 2.696 5.968 5.968 0 003.293-.989 5.945 5.945 0 001.767-1.796.734.734 0 01.139-.231c.316-.553.541-1.15.669-1.776a5.96 5.96 0 00-.867-4.51 5.97 5.97 0 00-1.707-1.707 3.717 3.717 0 01-2.207 1.819c-.359.11-.729.166-1.1.166a3.753 3.753 0 01-1.749-.438 3.73 3.73 0 01-1.549-1.549v.003a5.96 5.96 0 00-2.574 3.802 5.986 5.986 0 00.674 4.195.74.74 0 01.127.209l.006.012zm8.373-9.717c.293 0 .578.086.823.247a7.454 7.454 0 012.134 2.134 7.442 7.442 0 011.188 5.002A7.972 7.972 0 0021 12.743c-.071-3.171-2.055-6.101-4.973-7.381a3.02 3.02 0 01-2.527 1.39h-3A3.018 3.018 0 017.972 5.36 8.265 8.265 0 003 12.769a8.054 8.054 0 001.549 4.627 7.532 7.532 0 01.104-2.376 7.452 7.452 0 013.219-4.753 1.51 1.51 0 011.257-.184c.385.115.701.374.891.727a2.242 2.242 0 001.977 1.195c.222 0 .443-.033.659-.1a2.226 2.226 0 001.322-1.091 1.5 1.5 0 011.326-.794zM10.5 2.253c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-3z"}})])
          )
        }
      }
    