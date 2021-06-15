
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
            children.concat([_c('path',{attrs:{"d":"M10.79 23.963c-5.654 0-10.255-4.6-10.255-10.254a.75.75 0 011.5 0c0 4.827 3.927 8.754 8.755 8.754 4.827 0 8.754-3.927 8.754-8.754V8.59c0-.43-.1-.712-1.443-.712h-2.495a4.877 4.877 0 01-.526 4.036c-1.476 2.215-2.405 2.544-2.828 2.544a.375.375 0 01-.375-.375v-.59a.377.377 0 01.246-.522c.043-.017.627-.267 1.698-1.873a3.382 3.382 0 00-.011-3.572.751.751 0 01.635-1.149h3.656c1.953 0 2.943.744 2.943 2.212v.774c1.471.227 2.925 1.082 2.925 2.882a.746.746 0 01-.415.671l-2.524 1.262c-.248 5.416-4.795 9.785-10.24 9.785zm10.254-11.468l1.354-.677c-.204-.56-.821-.812-1.354-.926v1.603z"}}),_c('path',{attrs:{"d":"M17.734 10.812a.61.61 0 01-.086-.007 1.114 1.114 0 01-1.027-.988.796.796 0 010-.26c.06-.513.47-.922.982-.983a.717.717 0 01.264 0c.536.064.949.497.986 1.036a.759.759 0 01-.006.212 1.12 1.12 0 01-1.112.991h-.001zM10.059 17.383a.748.748 0 01-.578-.272 7.147 7.147 0 01-1.635-4.865A7.159 7.159 0 019.09 7.899L4.582 2.827c-.278 1.322-.54 3.428.252 4.616a.748.748 0 01-.625 1.166.756.756 0 01-.366-.095 14.4 14.4 0 01-2.135-1.458c-.157 1.127-.031 2.72 1.488 3.859a.748.748 0 01.151 1.05.747.747 0 01-1.05.15C-1.051 9.606.572 5.429.589 5.387a.748.748 0 011.222-.255c.33.325.679.634 1.044.922-.243-2.315.602-4.889.643-5.012A.753.753 0 014.209.53c.214 0 .419.092.561.252l5.849 6.58a.745.745 0 01.017.976 5.642 5.642 0 00-1.291 3.873.794.794 0 010 .069 5.645 5.645 0 001.291 3.876.752.752 0 01-.1 1.056.753.753 0 01-.477.171z"}})])
          )
        }
      }
    