export default function AboutLayout({children} : {children: React.ReactNode}){
    return (
        <>
          <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
              <ul className="py-5 px-5 text-white">
                  <li>Home</li>
                  <li>About</li>
                  <li>Profile</li>
              </ul>
          </nav>
          <div className="">{children}</div>
        </>
    );
}