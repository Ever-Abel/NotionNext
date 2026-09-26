import SmartLink from '@/components/SmartLink'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = props => {
  const { categoryOptions } = props

  if (!categoryOptions || categoryOptions.length === 0) {
    return <></>
  }

  /**
   * 将分类名称拆分为中文标题和英文副标题
   *
   * 示例：
   * 玩家生涯 I'm a Gamer
   * =>
   * 玩家生涯
   * I'm a Gamer
   */
  const splitCategoryName = name => {
    const match = name.match(/^(.+?[\u4e00-\u9fff])\s+([A-Za-z].*)$/)

    if (match) {
      return {
        title: match[1].trim(),
        subtitle: match[2].trim()
      }
    }

    return {
      title: name,
      subtitle: ''
    }
  }

  return (
    <nav
      id='home-nav-button'
      className='
        w-full
        z-10
        px-5
        py-2
        mt-8
        md:mt-10
        xl:mt-16
        flex
        flex-wrap
        justify-center
        items-center
        gap-6
        md:gap-8
        md:max-w-7xl
      '>
      {categoryOptions.map(category => {
        const { title, subtitle } = splitCategoryName(category.name)

        return (
          <SmartLink
            key={category.name}
            title={category.name}
            href={`/category/${category.name}`}
            passHref
            className='
              text-center
              text-white
              shadow-text

              w-full
              sm:w-4/5

              md:w-72
              md:h-28

              lg:w-80
              lg:h-32

              flex
              flex-col
              justify-center
              items-center

              px-6
              border-2
              cursor-pointer
              rounded-xl
              glassmorphism

              hover:bg-white
              hover:text-black
              hover:scale-105

              duration-200
              transform
            '>

            {/* 中文标题 */}
            <span className='text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap leading-none'>
              {title}
            </span>

            {/* 英文副标题 */}
            {subtitle && (
              <span className='mt-3 text-base md:text-lg lg:text-xl font-normal whitespace-nowrap leading-none'>
                {subtitle}
              </span>
            )}
          </SmartLink>
        )
      })}
    </nav>
  )
}

export default NavButtonGroup
