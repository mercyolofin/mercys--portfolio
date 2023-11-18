const About = () => {
    return ( 
        <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-x-gray-500">About</h2>
                </div>

                <p className="text-xl mt-20">
                I am  Mercy Olofinlus, a fullstack web developer who loves building websites, and learning new ways to code. i am constantly improving myself to become one of the finest in my field.               </p>

                <br />

                {/* <p className="text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde totam libero soluta quidem quasi minima! Odit vero architecto ad debitis soluta quis molestiae, rerum ut provident quibusdam tenetur repellendus, commodi laudantium optio, voluptate nemo! Incidunt eum atque ad reprehenderit id aliquid voluptates, a minima sit nemo laudantium quas, vero mollitia.
                </p> */}
            </div>
        </div>
     );
}
 
export default About;