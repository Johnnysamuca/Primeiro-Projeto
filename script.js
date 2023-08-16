function togglemode () {
   const html = document.documentElement
   html.classList.toggle('light')
   const img = document.querySelector("#foto img")
   
   if(html.classList.contains('light')) {
      img. src="./asset/assets/avatar-light-johnny..png"

   }else {
      img. src="./asset/assets/avatar-johnny.png"
   }
  

}





