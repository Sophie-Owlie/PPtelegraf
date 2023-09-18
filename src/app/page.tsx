export default function Home() {
  return (
    <main>
      <div className="space-y-5 text-center">
        <p className="text-xl italic">Hover the underlined word - font normal to medium on hover cause misalignment</p>
        <p className="text-[15px]">
          15px: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates tempore dolor sapiente tempora itaque asperiores nisi minima, aut vero, esse similique eaque aperiam consequatur? Eos obcaecati accusamus consequatur tempore cum molestiae veniam vel itaque assumenda harum magnam nulla fugiat, nemo provident asperiores vitae eum quibusdam  <span className="underline hover:font-medium">praesentium</span> est sunt, minima omnis. Suscipit quisquam beatae magni natus, aperiam dolorum quam quasi consequuntur explicabo assumenda inventore distinctio quibusdam facere facilis cum nesciunt magnam at? Ut mollitia vel, laborum assumenda tempore dignissimos temporibus non iusto dicta rem repudiandae, doloremque saepe explicabo totam omnis perspiciatis illo adipisci nisi. Sequi, impedit! Rerum minus natus tempora.
        </p>
        <p>
          16px: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates tempore dolor sapiente tempora itaque asperiores nisi minima, aut vero, esse similique eaque aperiam consequatur? Eos obcaecati accusamus consequatur tempore cum molestiae veniam vel itaque assumenda harum magnam nulla fugiat, nemo provident asperiores vitae eum quibusdam  <span className="underline hover:font-medium">praesentium</span> est sunt, minima omnis. Suscipit quisquam beatae magni natus, aperiam dolorum quam quasi consequuntur explicabo assumenda inventore distinctio quibusdam facere facilis cum nesciunt magnam at? Ut mollitia vel, laborum assumenda tempore dignissimos temporibus non iusto dicta rem repudiandae, doloremque saepe explicabo totam omnis perspiciatis illo adipisci nisi. Sequi, impedit! Rerum minus natus tempora.
        </p>
        <p className="text-[17px]">
          17px: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates tempore dolor sapiente tempora itaque asperiores nisi minima, aut vero, esse similique eaque aperiam consequatur? Eos obcaecati accusamus consequatur tempore cum molestiae veniam vel itaque assumenda harum magnam nulla fugiat, nemo provident asperiores vitae eum quibusdam  <span className="underline hover:font-medium">praesentium</span> est sunt, minima omnis. Suscipit quisquam beatae magni natus, aperiam dolorum quam quasi consequuntur explicabo assumenda inventore distinctio quibusdam facere facilis cum nesciunt magnam at? Ut mollitia vel, laborum assumenda tempore dignissimos temporibus non iusto dicta rem repudiandae, doloremque saepe explicabo totam omnis perspiciatis illo adipisci nisi. Sequi, impedit! Rerum minus natus tempora.
        </p>
      </div>
      <hr className="my-5" />
      <div className="space-y-5">
        <p className="text-xl text-center italic">Base line alignment problem except 16px</p>
        <p className="flex justify-center">
          <span className="text-[15px]">15px: Lorem ipsum</span>
          <span className="text-[15px] font-medium">Lorem ipsum medium</span>
          <span className="text-[15px]">Lorem ipsum</span>
        </p>
        <p className="flex justify-center">
          <span>16px: Lorem ipsum</span>
          <span className="font-medium">Lorem ipsum medium</span>
          <span>Lorem ipsum</span>
        </p>
        <p className="flex justify-center">
          <span className="text-[17px]">17px: Lorem ipsum</span>
          <span className="text-[17px] font-medium">Lorem ipsum medium</span>
          <span className="text-[17px]">Lorem ipsum</span>
        </p>
        <p className="flex justify-center">
          <span className="text-[40px]">40px: Lorem ipsum</span>
          <span className="text-[40px] font-medium">Lorem ipsum medium</span>
          <span className="text-[40px]">Lorem ipsum</span>
        </p>
      </div>
    </main>
  )
}