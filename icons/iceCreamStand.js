
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
            children.concat([_c('path',{attrs:{"d":"M12.724 24a3.743 3.743 0 01-3.673-3H4.474v2.25a.75.75 0 01-1.5 0v-2.403a2.312 2.312 0 01-1.497-2.17V12.75a.75.75 0 01.75-.75h5.247V8.803a.691.691 0 01-.075-.078A3.326 3.326 0 004.837 7.5a3.335 3.335 0 00-2.568 1.226.748.748 0 01-.578.274l-.07-.003a1.647 1.647 0 01-1.255-.653 1.643 1.643 0 01-.32-1.226A8.278 8.278 0 018.225-.008c4.097 0 7.608 3.064 8.167 7.126A1.659 1.659 0 0114.751 9a.746.746 0 01-.585-.278 3.313 3.313 0 00-5.135 0 .491.491 0 01-.057.063V12h9.287l1.292-2.585A.746.746 0 0120.224 9h3a.75.75 0 010 1.5h-2.537l-1.21 2.421v5.756A2.326 2.326 0 0117.154 21h-.757a3.743 3.743 0 01-3.673 3zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S13.965 18 12.724 18zm4.43 1.5a.824.824 0 00.823-.823V13.5h-15v5.177c0 .454.369.823.823.823h5.25c.351-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3h.758zM4.851 6a4.843 4.843 0 013.363 1.394 4.811 4.811 0 016.693-.076c-.458-3.321-3.331-5.825-6.682-5.825a6.771 6.771 0 00-6.693 5.828A4.86 4.86 0 014.827 6h.024z"}})])
          )
        }
      }
    