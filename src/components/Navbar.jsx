import React from 'react'

const Navbar = () => {
  function BrowseButton() {
    console.log('lead me to browse!')
  }

  function HomeButton() {
    console.log('lead me to home!')
  }

  function ProfileButton() {
    console.log('lead me to my profile!')
  }
  return (
    <div className="flex justify-between bg-bar px-8 py-4 rounded-t-3xl sticky fixed bottom-0 left-0 right-0">
      <button onClick={HomeButton}><img src="./images/home.svg"></img></button>
      <button onClick={BrowseButton}><img src="./images/hantel.svg"></img></button>
      <button onClick={ProfileButton}><img src="./images/profile.svg"></img></button>
    </div>
  )
}

export default Navbar