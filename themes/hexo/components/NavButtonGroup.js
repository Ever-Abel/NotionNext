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
   * 玩家生涯 I'm a Gamer
   * ->
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
        px-[2vw]
        py-2

        mt-[clamp(2.5rem,4vw,5rem)]

        flex
        flex-wrap
        justify-center
        items-center

        gap-[clamp(1rem,2vw,3rem)]
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

    w-[clamp(10rem,14.7vw,18.7rem)]
    h-[clamp(4rem,6vw,7.3rem)]

    flex
    flex-col
    justify-center
    items-center

    px-[clamp(0.75rem,1.3vw,1.7rem)]

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
  <span className='font-semibold text-[clamp(1rem,1.35vw,1.85rem)] leading-none whitespace-nowrap'>
    {title}
  </span>

  {/* 英文副标题 */}
  {subtitle && (
    <span className='mt-[clamp(0.5rem,0.7vw,1rem)] font-normal text-[clamp(0.85rem,0.9vw,1.35rem)] leading-none whitespace-nowrap'>
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
