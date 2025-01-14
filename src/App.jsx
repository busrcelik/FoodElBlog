import "./App.css";

function App() {
  return (
    <div class="bg-[#e2ded7]">
      <h1 className="text-5xl font-[Jura] font-bold text-center text-[#3C373B]">
        Food El Blog
      </h1>
      <nav className="flex justify-center gap-4 text-xl mt-4 font-[Jura]">
        <a
          href=""
          className=" bg-[#bdac92] border-black py-4 px-12 w-fit m-5 rounded-lg"
        >
          Anasayfa
        </a>
        <a
          href=""
          className=" bg-[#bdac92] border-black py-4 px-12 w-fit m-5 rounded-lg"
        >
          Aperatifler
        </a>
        <a
          href=""
          className=" bg-[#bdac92] border-black py-4 px-12 w-fit m-5 rounded-lg"
        >
          Vegan
        </a>
        <a
          href=""
          className=" bg-[#bdac92] border-black py-4 px-12 w-fit m-5 rounded-lg"
        >
          Yemekler
        </a>
        <a
          href=""
          className=" bg-[#bdac92] border-black py-4 px-12 w-fit m-5 rounded-lg"
        >
          Tatlılar
        </a>
        <a
          href=""
          className=" bg-[#bdac92] border-black py-4 px-12 w-fit m-5 rounded-lg"
        >
          İçecekler
        </a>
      </nav>
      <div class="bg-[#e2ded7] p-10 flex justify-center ">
        <img
          src="images/banner.png"
          alt=""
          class="h-[230px] w-[1350px] rounded-xl "
        />
      </div>
      <div className="mt-10 pl-[100px] pr-[100px] px-[50px]">
        <h2 className=" font-[Jura] font-bold text-2xl">Hakkımızda</h2>
        <p className="font-[Jura] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          nesciunt magnam accusantium ad dolor nihil, aut et maiores deserunt
          cum ducimus commodi quasi debitis voluptatibus facere eaque facilis
          fuga iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, velit excepturi facilis atque quaerat non vitae hic
          repudiandae fuga ea, tempora inventore cum molestias culpa eaque nam
          nesciunt ab dolor.
        </p>
      </div>
      <div class="mt-10  px-[10px] flex items-start gap-[50px] bg-[#bdac92] pb-10">
        <img
          src="images/yemek_1.jpg"
          alt=""
          class="h-[250px] ml-20 mt-7 rounded-xl"
        />
        <div class="mt-10 ">
          <h2 class="font-bold text-2xl font-[Jura]">Yemekler</h2>
          <p class="font-[Jura] text-justify pr-20 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            nesciunt numquam officia, animi laudantium dolor sed rerum
            necessitatibus consequatur iste praesentium hic aut sequi modi
            itaque beatae?
            <span className="mt-4 block">
              Adipisci, quo voluptatum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque laboriosam est, voluptates, minus
              sapiente pariatur enim dolorem iste totam blanditiis earum nisi
              quisquam molestiae ex recusandae assumenda! A, sed tempore! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo
              atque enim odio, saepe inventore fugiat voluptatibus ut tenetur
              nesciunt dignissimos beatae voluptatem, vel nemo suscipit quas
              quibusdam aliquam non.
            </span>
          </p>
        </div>
      </div>
      <div className="mt-[60px] px-[50px] flex flex-row-reverse items-center mr-[160px] ">
        <img
          src="images/aperatif.jpeg"
          alt=""
          class="h-[400px]  rounded-xl mb-4"
        />
        <div class="pb-20">
          <h2 class="font-bold text-2xl font-[Jura] ml-10">Aperatifler</h2>
          <p class="font-[Jura] text-justify mt-5 ml-10 mr-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius earum
            iusto, facere omnis at molestiae quo, alias non, excepturi sequi
            commodi quaerat saepe a aliquam ratione fugiat culpa nesciunt
            laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis tenetur repellat possimus aspernatur quae sunt
            necessitatibus, ipsum nihil, omnis iure aliquid illum. Ipsam
            suscipit delectus sit nobis quas, deleniti laudantium? Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            <span className="mt-4 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              explicabo beatae facilis rem, fugit omnis? Corporis cupiditate,
              inventore, recusandae ipsum asperiores itaque numquam deleniti
              consequatur impedit velit necessitatibus nulla officiis. Vitae
              officia facilis, aspernatur doloribus vero earum at ex labore
              voluptas quasi odio necessitatibus, molestiae ipsam et doloremque,
              iure maxime modi vel.
            </span>
          </p>
        </div>
      </div>
      <div class=" mt-10px px-[50px] flex items-start gap-[50px] pb-10 bg-[#769f466f]">
        <img
          src="images/tatli_1.jpg"
          alt=""
          class="h-[250px] ml-10 mt-7 rounded-xl"
        />
        <div className="mt-[50px]">
          <h2 class="font-bold text-2xl font-[Jura] ">Tatlılar</h2>
          <p class="font-[Jura] mt-5 text-justify pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            necessitatibus ipsam accusantium officia facilis, veniam veritatis
            quia corporis maxime non deserunt quisquam id rerum, dolores
            nesciunt, eum aliquam recusandae. Voluptatibus! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ducimus, facere animi?
          </p>
        </div>
      </div>
      <div class="px-[50px] ml-10 font-[Jura] ">
        <h2 class="font-bold text-2xl font-[Jura] mb-4 mt-5">İletişim</h2>
        <p>yemek@foodelblog.com</p>
        <p>216-550-5905</p>
        <p>Bağdat Cd. No:302/1</p>
        <p>Kadıköy, İstanbul, 34728</p>
      </div>
      <div className="bg-[#bdac92] pb-3 font-semibold font-[Jura]  ">
        <h1 class="px-[50px] ml-10 mb-3 mt-10 pt-3">Food El Blog</h1>
        <nav class="ml-5 underline ">
          <a href="" className="py-4 px-12 w-fit m-5">
            Anasayfa
          </a>
          <a href="" className="py-4 px-12 w-fit m-5">
            Aperatifler
          </a>
          <a href="" className="py-4 px-12 w-fit m-5">
            Vegan
          </a>
          <a href="" className="py-4 px-12 w-fit m-5">
            Yemekler
          </a>
          <a href="" className="py-4 px-12 w-fit m-5">
            Tatlılar
          </a>
          <a href="" className="py-4 px-12 w-fit m-5">
            İçecekler
          </a>
        </nav>
        <p class="text-center mt-2">@Food El Blog 2025</p>
      </div>
    </div>
  );
}

export default App;
