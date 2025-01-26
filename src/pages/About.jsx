import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="About" text2="Us" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quos,
            fugit in minima eaque accusantium a cum cumque maiores dolores sed
            impedit! Explicabo, nobis. Neque soluta nemo eos explicabo optio.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            autem corrupti deleniti placeat voluptates fugiat dignissimos hic
            necessitatibus, quisquam minus magnam ipsum tempore dicta tempora
            omnis porro dolorum! Aut nostrum enim illo explicabo ex excepturi
            blanditiis nihil labore non quod quasi, commodi similique, ad
            quidem.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            architecto incidunt id laudantium tempora, minima error fugit
            laborum, corrupti, accusamus autem molestias quia nulla enim iure
            voluptatum.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="Why" text2="Choose Us" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            natus earum doloremque error possimus consequuntur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            laboriosam necessitatibus non. Quae, dicta dolores. Debitis,
            necessitatibus totam!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            molestias rerum omnis hic error velit reprehenderit fugit corrupti!
            Possimus.
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;
