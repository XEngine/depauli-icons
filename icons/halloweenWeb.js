
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
            children.concat([_c('path',{attrs:{"d":"M16.402 23.5a.75.75 0 01-.69-.455l-.388-.909a15.493 15.493 0 00-3.526-.304 15.563 15.563 0 00-3.615.313l-.385.9a.747.747 0 01-.985.394.742.742 0 01-.4-.41.747.747 0 01.006-.574l.368-.861a10.426 10.426 0 00-4.928-4.909l-.828.334a.752.752 0 01-.977-.414.747.747 0 01.415-.976l.49-.198a9.043 9.043 0 00.085-7.261l-.575-.232a.745.745 0 01-.409-.403.747.747 0 01-.005-.574.746.746 0 01.975-.415l.634.256a10.659 10.659 0 005.044-4.833l-.289-.674A.752.752 0 017.109.25a.75.75 0 01.69.456l.216.505c1.247.236 2.513.356 3.768.357a20.35 20.35 0 003.71-.348l.22-.515a.748.748 0 01.984-.395.747.747 0 01.395.985l-.264.618a10.642 10.642 0 005.273 4.984l.869-.351a.748.748 0 01.977.415.747.747 0 01-.415.976l-1.104.445a9.094 9.094 0 00.073 6.83l1.031.416a.747.747 0 01.414.976.747.747 0 01-.977.414l-1.065-.43a10.412 10.412 0 00-5.161 5.05l.349.816a.747.747 0 01-.394.984.734.734 0 01-.296.062zm-7.515-3.002a16.91 16.91 0 012.912-.165 16.593 16.593 0 012.826.164l-.63-1.474a10.466 10.466 0 00-2.194-.176c-.116-.002-.211-.004-.306-.004-.662 0-1.327.063-1.982.189l-.626 1.466zm7.105-.618a11.824 11.824 0 014.079-4.031l-1.376-.556a6.86 6.86 0 00-3.283 3.228l.58 1.359zM3.658 15.959a11.833 11.833 0 013.879 3.881l.585-1.369a6.883 6.883 0 00-3.055-3.081l-1.409.569zm6.548 1.452a11.593 11.593 0 011.596-.064 11.465 11.465 0 011.501.058l-1.547-3.622-1.55 3.628zm4.474-.6a8.328 8.328 0 012.243-2.232L13.06 13.02l1.62 3.791zm-7.877-2.122a8.348 8.348 0 012.047 2.077l1.499-3.509-3.546 1.432zM2.889 8.914a10.537 10.537 0 01-.056 5.76l1.361-.549a5.938 5.938 0 00.082-4.651l-1.387-.56zM20.66 14.47a10.615 10.615 0 01-.042-5.357l-1.417.572a5.886 5.886 0 00.077 4.227l1.382.558zM6.055 10.192a7.509 7.509 0 01-.039 3.197l3.98-1.607-3.941-1.59zm11.446 3.003a7.395 7.395 0 01-.036-2.809l-3.462 1.397 3.498 1.412zm-4.346-2.687l3.936-1.589a8.48 8.48 0 01-2.315-2.204l-1.621 3.793zm-2.901-.239L8.755 6.762A8.493 8.493 0 016.639 8.81l3.615 1.459zm1.502-.303l1.714-4.012a15.15 15.15 0 01-1.688.099c-.572 0-1.156-.035-1.742-.105l1.716 4.018zm3.739-4.934a7.032 7.032 0 003.392 3.162l1.368-.552a12.041 12.041 0 01-4.168-3.995l-.592 1.385zM4.877 8.099A7.047 7.047 0 008.04 5.087l-.595-1.392a12.064 12.064 0 01-3.959 3.842l1.391.562zm4.471-3.768c.807.147 1.625.222 2.434.222.787 0 1.586-.072 2.378-.214l.636-1.488a21.743 21.743 0 01-3.013.217 21.763 21.763 0 01-3.07-.224l.635 1.487z"}})])
          )
        }
      }
    