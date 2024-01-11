import MainHeader from "../components/MainHeader"
import SongList from "../components/SongList"
import Footer from "../components/Footer"

function HomePage() {
  

  return (
    <>
      <div className="menu">
        <MainHeader />
        <SongList />
        <Footer />
      </div>
    </>
  )
}

export default HomePage