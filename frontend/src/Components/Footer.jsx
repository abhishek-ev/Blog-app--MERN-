
function Footer() {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[200px] flex md:flex-row flex-col space-y-6 md:space-y-0 justify-between text-base md:text-md py-8">
      <div className="flex flex-col text-white ">
        <p>featured blogs</p>
        <p>Most viewed</p>
        <p>Readers Choice</p>
      </div>

      <div className="flex flex-col text-white ">
        <p>Forum</p>
        <p>Support</p>
        <p>Recent posts</p>
      </div>

      <div className="flex flex-col text-white ">
        <p>privacy policy</p>
        <p>About Us</p>
        <p>terms of Service</p>
      </div>
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Blog.live 2024</p>
    </>
  )
}

export default Footer
