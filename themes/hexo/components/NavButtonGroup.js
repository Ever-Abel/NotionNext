import Link from 'next/link'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = (props) => {
  const { categoryOptions } = props
  if (!categoryOptions || categoryOptions.length === 0) {
    return <></>
  }

  return (
    <nav id='home-nav-button' className={'w-full z-10 md:h-96 md:mt-10 xl:mt-40 px-10 py-4 mt-10 flex flex-wrap md:max-w-7xl space-y-4 md:space-y-0 md:flex justify-center max-h-96 overflow-auto'}>
      {categoryOptions?.map(category => {
        return (
          <Link
            key={`${category.name}`}
            title={`${category.name}`}
            href={`/category/${category.name}`}
            passHref
            className='text-center shadow-text w-full sm:w-3/4 md:mx-8 md:w-48 md:h-20 lg:h-24 h-20 text-lg justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism hover:bg-white hover:text-black duration-200 hover:scale-105 transform'>
               {category.name}
            </Link>
        )
      })}
    </nav>
  )
}
export default NavButtonGroup
