
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
            children.concat([_c('path',{attrs:{"d":"M.753 23.998a.743.743 0 01-.53-.22.744.744 0 010-1.06l2.729-2.729c-1.9-2.361-1.938-5.591-.04-7.49.908-.908 2.16-1.408 3.527-1.408a6.13 6.13 0 012.693.637 6.2 6.2 0 01-.625-2.249c-.119-1.541.377-2.952 1.397-3.971.912-.912 2.164-1.414 3.527-1.414.147 0 .297.006.446.017 1.247.096 2.484.603 3.518 1.436l2.289-2.289a2.26 2.26 0 01-.226-.985c0-1.252 1.019-2.271 2.271-2.271S24 1.021 24 2.273a2.274 2.274 0 01-3.256 2.046l-2.289 2.289c.833 1.034 1.34 2.271 1.436 3.517.119 1.542-.377 2.953-1.397 3.972-.912.912-2.165 1.414-3.528 1.414-.146 0-.295-.006-.444-.017a6.19 6.19 0 01-2.247-.625 6.19 6.19 0 01.625 2.247c.119 1.542-.377 2.953-1.397 3.972-.912.912-2.165 1.414-3.528 1.414a6.03 6.03 0 01-.444-.017c-1.247-.096-2.484-.603-3.518-1.436l-2.729 2.729a.748.748 0 01-.531.22zm5.694-11.412c-.967 0-1.846.346-2.474.973-1.487 1.487-1.246 4.147.537 5.931.88.88 1.993 1.412 3.135 1.5.11.008.219.012.327.012.978 0 1.832-.337 2.47-.974.705-.705 1.046-1.698.962-2.797-.088-1.139-.617-2.248-1.491-3.126-.001-.001-.014-.013-.019-.02-.96-.952-2.215-1.499-3.447-1.499zm6.991-6.991c-.967 0-1.846.346-2.474.973-.711.711-1.051 1.713-.959 2.823.094 1.133.626 2.237 1.496 3.108.879.879 1.992 1.412 3.135 1.499.11.009.219.013.328.013.964 0 1.841-.346 2.469-.975.705-.705 1.046-1.698.962-2.797-.087-1.136-.615-2.243-1.485-3.12a.7.7 0 00-.028-.027c-.958-.951-2.213-1.497-3.444-1.497zm8.291-4.093a.772.772 0 000 1.542.772.772 0 000-1.542z"}}),_c('path',{attrs:{"d":"M15.253 12.718a.755.755 0 01-.705-.493.743.743 0 01.025-.574c.3-.643.819-1.162 1.462-1.462a.753.753 0 01.997.363.752.752 0 01-.362.997 1.53 1.53 0 00-.738.738.753.753 0 01-.679.431zM8.261 19.71a.751.751 0 01-.679-1.068 3.037 3.037 0 011.462-1.462.751.751 0 01.634 1.36 1.534 1.534 0 00-.738.738.753.753 0 01-.679.432z"}})])
          )
        }
      }
    