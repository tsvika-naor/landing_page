import './Sidenav.css';
export default function Sidenav () {
    return (
        <div id="sidenav" class="bg-gray-200 xl:w-1/8 lg:w-1/8 md:w-1/4 sm:w-1/4  mr-2">
            <img class="rounded-lg h-72 w-full  mx-auto  mt-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AaEsxf580mCxbpcSUUgfZKptVVu6MLtk7Q&usqp=CAU" alt="Img1" style={{objectFit:"cover"}}/>
            <img class="rounded-lg h-72 w-full mx-auto  m-2" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg" alt="Img2" style={{objectFit:"cover"}}/>
            <img class="rounded-lg h-72 w-full mx-auto  m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjwCVuZ4Z_6ehFaz6QpFqGDw19M0XMDNBIQ&usqp=CAU" alt="Img3" style={{objectFit:"cover"}}/>
            <img class="rounded-lg h-72 w-full mx-auto  m-2" src="https://img.static-af.com/images/meta/IDname/CITY-BER-1?aspect_ratio=2:1&max_width=1920" alt="Img4" style={{objectFit:"cover"}}/>
        </div>
    )
}