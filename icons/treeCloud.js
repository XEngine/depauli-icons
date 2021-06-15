
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
            children.concat([_c('path',{attrs:{"d":"M12.752 23.997a.75.75 0 01-.75-.75v-1.125L9.49 20.239a2.998 2.998 0 01-1.988.759c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 .341-.058.675-.172.996l1.672 1.254v-6.75A6.707 6.707 0 018.2 12.31a4.494 4.494 0 01-3.7 1.939A4.501 4.501 0 01.404 7.901a4.508 4.508 0 015.018-2.552A6.71 6.71 0 019.689.407a6.665 6.665 0 015.14.213 6.698 6.698 0 013.23 3.182c.227-.033.456-.051.684-.054h.029c1.598 0 3.094.722 4.094 1.981a5.205 5.205 0 011.103 3.858 5.21 5.21 0 01-1.948 3.508 5.18 5.18 0 01-3.255 1.135 5.258 5.258 0 01-3.669-1.491 6.648 6.648 0 01-1.595.587v9.922a.75.75 0 01-.75.749zm-5.25-7.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.672-1.5-1.5-1.5zM4.507 6.755a3.006 3.006 0 00-2.736 1.763c-.329.728-.354 1.542-.07 2.291s.84 1.343 1.569 1.672c.39.176.803.265 1.227.265a3.006 3.006 0 002.736-1.764l.044-.103a.748.748 0 011.204-.266 5.17 5.17 0 006.354.543.748.748 0 01.997.161 3.725 3.725 0 002.934 1.413c.853 0 1.656-.28 2.324-.81a3.721 3.721 0 001.39-2.504 3.717 3.717 0 00-.788-2.754 3.72 3.72 0 00-2.929-1.414 3.73 3.73 0 00-.952.137.753.753 0 01-.907-.465 5.185 5.185 0 00-2.706-2.939 5.18 5.18 0 00-3.992-.165 5.222 5.222 0 00-3.414 4.568.75.75 0 01-1.057.636 2.966 2.966 0 00-1.228-.265z"}})])
          )
        }
      }
    