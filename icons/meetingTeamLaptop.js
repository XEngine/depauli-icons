
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
            children.concat([_c('path',{attrs:{"d":"M15.349 24.011a.754.754 0 01-.56-.25c-.567-.635-2.308-1.274-4.152-1.951l-.585-.216c-.32-.118-.74-.421-.928-1.193-.166-.683-.137-1.967.35-2.503a4.548 4.548 0 001.185-3.523.846.846 0 01-.004-.073c0-1.789-1.072-3.039-2.607-3.039-1.536 0-2.608 1.249-2.608 3.037a.837.837 0 01-.003.07 4.54 4.54 0 001.182 3.521c.497.547.524 1.807.354 2.507-.188.772-.608 1.074-.926 1.192l-.613.226c-1.833.675-3.563 1.311-4.126 1.941a.75.75 0 11-1.118-.999c.813-.91 2.54-1.546 4.727-2.35l.543-.2a.761.761 0 00.043-.115c.13-.445.037-1.065-.023-1.227a6.04 6.04 0 01-1.539-4.604c.016-2.609 1.741-4.5 4.108-4.5 2.366 0 4.091 1.893 4.107 4.502a6.049 6.049 0 01-1.541 4.608c-.059.164-.148.783-.02 1.223a.684.684 0 00.043.115l.516.19c2.201.809 3.938 1.447 4.754 2.36a.743.743 0 01.189.542c-.011.2-.1.384-.249.517a.745.745 0 01-.499.192z"}}),_c('path',{attrs:{"d":"M14.25 16.511a.75.75 0 010-1.5h5.951a2.686 2.686 0 002.058-1.5H14.25a.75.75 0 010-1.5H21V1.828c.005-.178-.115-.312-.275-.317H7.75c-.135.005-.256.139-.251.293v5.707a.75.75 0 01-1.499 0V1.828C5.969.864 6.743.044 7.725.012H20.75a1.796 1.796 0 011.75 1.841v10.159h.75a.751.751 0 01.744.842 4.192 4.192 0 01-3.652 3.652.677.677 0 01-.092.006h-6z"}}),_c('path',{attrs:{"d":"M12.75 10.511a.75.75 0 010-1.5H15v-.75a.75.75 0 01.933-.727L18 8.05V5.472l-2.068.517a.75.75 0 01-.643-.137.743.743 0 01-.289-.591v-.75h-4.5v2.25a.75.75 0 01-1.5 0v-2.25c0-.827.673-1.5 1.5-1.5H15c.757 0 1.385.563 1.486 1.293l2.082-.521a.75.75 0 01.643.137.743.743 0 01.289.591v4.5a.75.75 0 01-.933.727l-2.082-.521a1.503 1.503 0 01-1.486 1.293H12.75z"}})])
          )
        }
      }
    